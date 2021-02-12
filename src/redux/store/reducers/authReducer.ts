import {AuthActionTypes, UserDataType} from '../../../types'
import {SET_USER_DATA, SET_USER_LOGGED_IN, SET_LOGIN_ERROR} from '../../actions'

type InitialStateType = {
    userData: UserDataType,
    userLoggedIn: boolean,
    loginErrorMessage: null | string
}

const initialState: InitialStateType = {
    userData: {
        email: null,
        login: null,
        id: null
    },
    userLoggedIn: false,
    loginErrorMessage: null
}

export const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA: {
            const {email, login, id} = action.payload
            return {
                ...state,
                userData: {
                    login: login,
                    email: email,
                    id: id
                }
            }
        }
        case SET_USER_LOGGED_IN: {
            return {
                ...state,
                userLoggedIn: action.payload
            }
        }
        case SET_LOGIN_ERROR: {
            return {
                ...state,
                loginErrorMessage: action.payload
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export const setUserData = (userData: UserDataType): AuthActionTypes => ({
    type: SET_USER_DATA,
    payload: userData
})

export const setUserLoggedIn = (value: boolean): AuthActionTypes => ({
    type: SET_USER_LOGGED_IN,
    payload: value
})

export const setLoginError = (error: string): AuthActionTypes => ({
    type: SET_LOGIN_ERROR,
    payload: error
})
