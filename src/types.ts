import {
    SET_IS_FOLLOW,
    SET_IS_LOADING,
    SET_USER_DATA,
    SET_USER_LOGGED_IN,
    SET_USERS,
    SET_IS_UNFOLLOW,
    SET_CURRENT_PAGE
} from './redux/actions'

// usersReducer_types
export type PhotosType = {
    small: string | null,
    large: string | null
}

export type UserType = {
    followed: boolean | null,
    id: number | null,
    name: string | null,
    photos: PhotosType,
    large: any,
    small: null,
    status: string | null,
    uniqueUrlName: string | null
}

export type UsersType = Array<UserType>

// AC_types
export type SetUsersType = {
    type: typeof SET_USERS,
    payload: UsersType
}

export type SetIsLoadingType = {
    type: typeof SET_IS_LOADING,
    payload: boolean
}

export type SetIsFollowType = {
    type: typeof SET_IS_FOLLOW,
    payload: number
}

export type SetIsUnFollowType = {
    type: typeof SET_IS_UNFOLLOW,
    payload: number
}

export type UserDataType = {
    email: string | null,
    login: string | null,
    id?: number | null
}

export type SetUserDataType = {
    type: typeof SET_USER_DATA,
    payload: UserDataType
}

export type SetUserLoggedInType = {
    type: typeof SET_USER_LOGGED_IN,
    payload: boolean
}

export type SetCurrentPageType = {
    type: typeof SET_CURRENT_PAGE,
    payload: number
}

export type UsersActionTypes = SetUsersType | SetIsLoadingType | SetIsFollowType | SetIsUnFollowType | SetCurrentPageType
export type AuthActionTypes = SetUserDataType | SetUserLoggedInType
