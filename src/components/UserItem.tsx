import React from 'react'
import './UserItem.css'
import svgLogo from '../assets/img/logo_default.svg'
import {useDispatch} from 'react-redux';
import {setIsFollow, setIsUnFollow} from '../redux/store/reducers/usersReducer';
import {usersAPI} from '../api/api';

type UserItemType = {
    userName: string | null,
    imageSrc: string | null,
    status: string | null,
    followed: boolean | null,
    userId: number | null
}

export const UserItem: React.FC<UserItemType> = ({userName, imageSrc, status, followed, userId}) => {
    const dispatch = useDispatch()

    const onFollowHandler = (id: any): void => {
        usersAPI.follow(id).then(res => {
            if (res.resultCode === 0) {
                dispatch(setIsFollow(id))
            }
        })
    }

    const onUnFollowHandler = (id: any): void => {
        usersAPI.unfollow(id).then(res => {
            if (res.resultCode === 0) {
                dispatch(setIsUnFollow(id))
            }
        })
    }

    return (
        <li className='UserItem'>
            <div className='UserItem__container'>
                <div className='UserItem__img'>
                    <img src={`${imageSrc !== null ? imageSrc : svgLogo}`} alt=''/>
                </div>
                <div className='UserItem__info'>
                    <div className='UserItem__login'>{userName}</div>
                    <div className='UserItem__status'>{status}</div>
                </div>
            </div>
            <div className='UserItem__button'>
                {
                    followed === true
                        ? <button onClick={() => onUnFollowHandler(userId)}>un-follow</button>
                        : <button onClick={() => onFollowHandler(userId)}>follow</button>
                }
            </div>
        </li>
    )
}
