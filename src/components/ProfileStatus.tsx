import React, {useEffect, useState} from 'react'
import {setUserStatus} from '../redux/middleware';
import {useDispatch} from 'react-redux';

type ProfileStatusProps = {
    status: string
}

export const ProfileStatus: React.FC<ProfileStatusProps> = ({status}) => {
    const [editMode, setEditMode] = useState(false)
    const [localStatus, setLocalStatus] = useState(status)
    const dispatch = useDispatch()

    useEffect(() => {
        setLocalStatus(status)
    }, [status])

    const onInputBlurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditMode(prevState => !prevState)
        dispatch(setUserStatus(localStatus))
    }

    const onInputKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setEditMode(prevState => !prevState)
            dispatch(setUserStatus(localStatus))
        }
    }


    return (
        <div className='Profile-Status'>
            {
                editMode
                    ? <input
                        onBlur={onInputBlurHandler}
                        onKeyPress={onInputKeyPressHandler}
                        onChange={(e) => setLocalStatus(e.target.value)}
                        value={localStatus}
                        type='text'
                        autoFocus/>
                    : status
                        ? <div onClick={() => setEditMode(!editMode)} className='Profile-Status__text'>{status}</div>
                        : <p onClick={() => setEditMode(!editMode)}>Что у вас нового?</p>
            }
        </div>
    )
}
