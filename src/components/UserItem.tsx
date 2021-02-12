import React from 'react'
import './UserItem.css'
import svgLogo from '../assets/img/logo_default.svg'
import {useDispatch} from 'react-redux'
import {setFollowInProgress} from '../redux/store/reducers/usersReducer';
import { Link } from 'react-router-dom';
import {followUser, unfollowUser} from '../redux/middleware';

type UserItemType = {
    userName: string,
    imageSrc: string | null,
    status: string | null,
    followed: boolean,
    userId: number,
    followProgress: Array<number>
}

export const UserItem: React.FC<UserItemType> = (
    {
        userName,
        imageSrc,
        status,
        followed,
        userId,
        followProgress
    }) => {
    const dispatch = useDispatch()

    const onFollowHandler = (id: any): void => {
        dispatch(setFollowInProgress(true, userId))
        dispatch(followUser(id))
    }

    const onUnFollowHandler = (id: any): void => {
        dispatch(setFollowInProgress(true, userId))
        dispatch(unfollowUser(id))
    }

    return (
        <li className='UserItem'>
            <div className='UserItem__container'>
                <Link to={`profile/${userId}`}>
                    <div className='UserItem__img'>
                        <img src={`${imageSrc !== null ? imageSrc : svgLogo}`} alt=''/>
                    </div>
                </Link>
                <div className='UserItem__info'>
                    <div className='UserItem__login'>{userName}</div>
                    <div className='UserItem__status'>{status}</div>
                </div>
            </div>
            <div className='UserItem__button'>
                {
                    followed
                        ? <button disabled={followProgress.some(id => id === userId)}
                                  onClick={() => onUnFollowHandler(userId)}>un-follow</button>
                        : <button disabled={followProgress.some(id => id === userId)}
                                  onClick={() => onFollowHandler(userId)}>follow</button>
                }
            </div>
        </li>
    )
}
