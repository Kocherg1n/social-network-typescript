import {UsersActionTypes, UserType} from '../../../types'
import {
    SET_CURRENT_PAGE,
    SET_FOLLOW_IN_PROGRESS,
    SET_IS_FOLLOW,
    SET_IS_LOADING,
    SET_IS_UNFOLLOW,
    SET_USERS
} from '../../actions'

const initialState = {
    isLoading: false,
    followInProgress: [] as Array<number>,
    items: [] as Array<UserType>,
    currentPage: 1,
    perPage: 15,
    totalCount: 500
}

type InitialStateType = typeof initialState
export const usersReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USERS: {
            return {
                ...state,
                items: action.payload,
            }
        }
        case SET_IS_LOADING: {
            return {
                ...state,
                isLoading: action.payload,
            }
        }
        case SET_IS_FOLLOW: {
            const copyItems = state.items.map((user) => {
                if (user.id === action.payload) {
                    return {...user, followed: true}
                }
                return user
            })
            return {
                ...state,
                items: copyItems
            }
        }
        case SET_IS_UNFOLLOW: {
            const copyItems = state.items.map((user) => {
                if (user.id === action.payload) {
                    return {...user, followed: false}
                }
                return user
            })
            return {
                ...state,
                items: copyItems
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.payload
            }
        }
        case SET_FOLLOW_IN_PROGRESS: {
            return {
                ...state,
                followInProgress: action.isFetching
                    ? [...state.followInProgress, action.userId]
                    : state.followInProgress.filter(el => el !== action.userId)
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export const setUsers = (users: Array<UserType>): UsersActionTypes => ({
    type: SET_USERS,
    payload: users
})

export const setIsLoading = (value: boolean): UsersActionTypes => ({
    type: SET_IS_LOADING,
    payload: value
})

export const setIsFollow = (userId: number): UsersActionTypes => ({
    type: SET_IS_FOLLOW,
    payload: userId
})

export const setIsUnFollow = (userId: number): UsersActionTypes => ({
    type: SET_IS_UNFOLLOW,
    payload: userId
})

export const setCurrentPage = (page: number): UsersActionTypes => ({
    type: SET_CURRENT_PAGE,
    payload: page
})

export const setFollowInProgress = (isFetching: boolean, userId: number): UsersActionTypes => ({
    type: SET_FOLLOW_IN_PROGRESS,
    isFetching,
    userId
})
