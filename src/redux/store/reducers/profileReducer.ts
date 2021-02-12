import {SET_PROFILE, SET_STATUS} from '../../actions'
import {ProfileActionTypes, ProfileType} from '../../../types'

type InitialStateType = {
    profile: ProfileType | null,
    status: string
}

const initialState: InitialStateType = {
    profile: null,
    status: ''
}

export const profileReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_PROFILE: {
            return {
                ...state,
                profile: action.payload
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.payload
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export const setProfile = (profileData: ProfileType): ProfileActionTypes => ({
    type: SET_PROFILE,
    payload: profileData
})

export const setStatus = (status: string): ProfileActionTypes => ({
    type: SET_STATUS,
    payload: status
})

// export const setUpdateStatus = (status: string): ProfileActionTypes => ({
//     type: SET_STATUS,
//     payload: status
// })
