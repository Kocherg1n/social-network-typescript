import {AuthActionTypes, UserDataType} from '../../../types'
import {SET_USER_DATA, SET_USER_LOGGED_IN} from '../../actions'

type InitialStateType = {
    userData: UserDataType,
    userLoggedIn: boolean
}

const initialState: InitialStateType = {
    userData: {
        email: null,
        login: null
    },
    userLoggedIn: false
}

export const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                userData: action.payload
            }
        }
        case SET_USER_LOGGED_IN: {
            return {
                ...state,
                userLoggedIn: action.payload
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
