import {ThunkAction} from 'redux-thunk'
import {RootState} from './store/store'
import {Action} from 'redux'
import {setUsers, setIsLoading, setFollowInProgress, setIsFollow, setIsUnFollow} from './store/reducers/usersReducer'
import {setLoginError, setUserData, setUserLoggedIn} from './store/reducers/authReducer'
import {authAPI, profileAPI, statusAPI, usersAPI} from '../api/api'
import {setProfile, setStatus} from './store/reducers/profileReducer';
import {LoginFormTypes} from '../types'

export const fetchUsers = (): ThunkAction<void, RootState, unknown, Action> => async (dispatch: any, getState) => {
    const perPage = getState().users.perPage
    const currentPage = getState().users.currentPage

    try {
        dispatch(setIsLoading(true))
        const {items} = await usersAPI.getUsers(perPage, currentPage)
        dispatch(setUsers(items))
        dispatch(setIsLoading(false))
    } catch (e) {
        console.error(e)
    }
}

export const fetchAuthData = (): ThunkAction<void, RootState, unknown, Action> => async (dispatch: any) => {
    try {
        const res = await authAPI.me()
        if (res.resultCode === 0) {
            dispatch(setUserData(res.data))
            dispatch(setUserLoggedIn(true))
        }
    } catch (e) {
        console.error(e)
    }
}

export const followUser = (id: number): ThunkAction<void, RootState, unknown, Action> => async (dispatch: any) => {
    try {
        const {resultCode} = await usersAPI.follow(id)
        if (resultCode === 0) {
            dispatch(setFollowInProgress(false, id))
            dispatch(setIsFollow(id))
        }
    } catch (e) {
        console.error(e)
    }
}

export const unfollowUser = (id: number): ThunkAction<void, RootState, unknown, Action> => async (dispatch: any) => {
    try {
        const {resultCode} = await usersAPI.unfollow(id)
        if (resultCode === 0) {
            dispatch(setFollowInProgress(false, id))
            dispatch(setIsUnFollow(id))
        }
    } catch (e) {
        console.error(e)
    }
}

export const fetchProfile = (id: number): ThunkAction<void, RootState, unknown, Action> => async (dispatch: any) => {
    try {
        const {status, data} = await profileAPI.getProfile(id)
        if (status === 200) {
            dispatch(setProfile(data))
        }
    } catch (e) {
        console.error(e)
    }
}

export const fetchStatus = (id: number): ThunkAction<void, RootState, unknown, Action> => async (dispatch: any) => {
    try {
        const {status, data} = await profileAPI.getStatus(id)
        if (status === 200) {
            dispatch(setStatus(data))
        }
    } catch (e) {
        console.error(e)
    }
}

export const setUserStatus = (text: string): ThunkAction<void, RootState, unknown, Action> => async (dispatch: any) => {
    try {
        const {resultCode} = await statusAPI.setStatus(text)
        if (resultCode === 0) {
            dispatch(setStatus(text))
        }
    } catch (e) {
        console.error(e)
    }
}

export const setUserLogIn = (loginData: LoginFormTypes): ThunkAction<void, RootState, unknown, Action> => async (dispatch: any) => {
    try {
        const {email, password, rememberMe} = loginData
        const data = await authAPI.logIn(email, password, rememberMe)
        if (data.resultCode === 0) {
            dispatch(fetchAuthData())
        } else if (data.resultCode === 1) {
            dispatch(setLoginError(data.messages[0]))
        }
    } catch (e) {
        console.error(e)
    }
}



export const setUserLogOut = (): ThunkAction<void, RootState, unknown, Action> => async (dispatch: any) => {
    try {
        const {resultCode} = await authAPI.logOut()
        if (resultCode === 0) {
            dispatch(setUserLoggedIn(false))
            dispatch(setUserData({
                email: null,
                login: null,
                id: null,
            }))
        }
    } catch (e) {
        console.error(e)
    }
}
