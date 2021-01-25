import {ThunkAction} from 'redux-thunk'
import {RootState} from './store/store'
import {Action} from 'redux'
import {setUsers, setIsLoading} from './store/reducers/usersReducer'
import {setUserData, setUserLoggedIn} from './store/reducers/authReducer'
import {authAPI, usersAPI} from '../api/api'

export const fetchUsers = (): ThunkAction<void, RootState, unknown, Action> => async (dispatch: any, getState) => {
    const perPage = getState().users.perPage
    const currentPage = getState().users.currentPage

    try {
        dispatch(setIsLoading(true))
        const {items} = await usersAPI.getUsers(perPage, currentPage)
        dispatch(setUsers(items))
        dispatch(setIsLoading(false))
    } catch (e) {
        console.log(e)
    }
}

export const fetchUserData = (): ThunkAction<void, RootState, unknown, Action> => async (dispatch: any) => {
    try {
        const userData = await authAPI.me()
        if (userData.resultCode === 0) {
            dispatch(setUserData(userData))
            dispatch(setUserLoggedIn(true))
        }
    } catch (e) {
        console.log(e)
    }
}
