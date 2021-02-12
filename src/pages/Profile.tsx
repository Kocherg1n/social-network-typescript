import React, {useEffect} from 'react'
import {Redirect, RouteComponentProps} from 'react-router-dom'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import {fetchProfile, fetchStatus} from '../redux/middleware'
import {RootState} from '../redux/store/store'
import svgLogo from '../assets/img/logo_default.svg'
import './Prorfile.css'
import { ProfileStatus } from '../components/ProfileStatus'

type PathParamsType = {
    userId: string
}

export const ProfilePage: React.FC<RouteComponentProps<PathParamsType>> = (props) => {
    const {id, profile, status, userLoggedIn} = useSelector((state: RootState) => ({
        id: state.auth.userData.id,
        profile: state.profile.profile,
        status: state.profile.status,
        userLoggedIn: state.auth.userLoggedIn,
    }))

    const {userId} = props.match.params
    const dispatch = useDispatch()

    useEffect(() => {
        console.log('Profile render')
        if (userId) {
            dispatch(fetchProfile(+userId))
            dispatch(fetchStatus(+userId))
        }
        if (!userId && id !== null) {
            dispatch(fetchProfile(id))
            dispatch(fetchStatus(id))
        }
    }, [id, userId])

    if (!userLoggedIn) {
        return <Redirect to='/login'/>
    }

    return (
        <div className='Profile-page'>
            <div className='Profile-page__avatar'>
                {
                    (profile && profile.photos.small !== null)
                        ? <img src={profile.photos.small} alt=''/>
                        : <img src={svgLogo} alt=''/>
                }
            </div>
            <div className='Profile-page__login'>{profile?.fullName}</div>
            <ProfileStatus status={status}/>
        </div>
    )
}
