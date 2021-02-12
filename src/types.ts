import {
    SET_IS_FOLLOW,
    SET_IS_LOADING,
    SET_USER_DATA,
    SET_USER_LOGGED_IN,
    SET_USERS,
    SET_IS_UNFOLLOW,
    SET_CURRENT_PAGE, SET_FOLLOW_IN_PROGRESS, SET_PROFILE, SET_STATUS, SET_LOGIN_ERROR
} from './redux/actions'

export type LoginFormTypes = {
    email: string,
    password: string,
    rememberMe: boolean
}

// usersReducer_types
export type PhotosType = {
    small: string | null,
    large: string | null
}

export type UserType = {
    followed: boolean,
    id: number,
    name: string,
    photos: PhotosType,
    large: any,
    small: null,
    status: string | null,
    uniqueUrlName: string | null
}

// profileReducer_types
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
    id: number | null
}

export type ProfileType = {
    aboutMe: null | string,
    contacts: ProfileContactsType,
    fullName: string,
    lookingForAJob: false,
    lookingForAJobDescription: null | string,
    photos: PhotosType,
    userId: null | number
}

export type ProfileContactsType = {
    facebook: null | string,
    website: null | string,
    vk: null | string,
    twitter: null | string,
    instagram: null | string,
    youtube: null | string,
    github: null | string,
    mainLink: null | string
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

export type SetFollowInProgressType = {
    type: typeof SET_FOLLOW_IN_PROGRESS,
    isFetching: boolean,
    userId: number
}

export type SetProfileType = {
    type: typeof SET_PROFILE,
    payload: ProfileType
}

export type SetStatusType = {
    type: typeof SET_STATUS,
    payload: string
}

export type SetLoginErrorType = {
    type: typeof SET_LOGIN_ERROR,
    payload: string
}

export type UsersActionTypes = SetUsersType | SetIsLoadingType |
    SetIsFollowType | SetIsUnFollowType | SetCurrentPageType |
    SetFollowInProgressType

export type AuthActionTypes = SetUserDataType | SetUserLoggedInType | SetLoginErrorType
export type ProfileActionTypes = SetProfileType | SetStatusType
