import React from 'react'
import './LoginForm.css'
import {useForm} from 'react-hook-form'
import {LoginFormTypes} from '../types'
import {useDispatch, useSelector} from 'react-redux'
import {setUserLogIn} from '../redux/middleware'
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {RootState} from '../redux/store/store';

const schema = yup.object().shape({
    email: yup.string()
        .email('invalid email address').required(),
    password: yup.string()
        .min(6, 'password must be between 6 and 20 characters')
        .max(16, 'password must be between 6 and 20 characters')
});


export const LoginForm: React.FC = () => {
    const {loginErrorMessage} = useSelector((state: RootState) => state.auth)
    const dispatch = useDispatch()
    const {register, handleSubmit, watch, errors} = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data: LoginFormTypes) => {
        dispatch(setUserLogIn(data))
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className='Login-form'>
            <div className='Login-form__row'>
                <label htmlFor='login'>Email</label>
                <input name='email' type='text' id='login' ref={register}/>
                {errors.email?.message && <div style={{color: 'red'}}>{errors.email?.message}</div>}
            </div>
            <div className='Login-form__row'>
                <label htmlFor='password'>Password</label>
                <input name='password' type='password' id='password' ref={register}/>
                {errors.password?.message && <div style={{color: 'red'}}>{errors.password?.message}</div>}
            </div>
            <div>
                <label htmlFor='rememberMe'>Remember me</label>
                <input name='rememberMe' type='checkbox' id='rememberMe' ref={register}/>
            </div>
            <div>
                <button type='submit'>login</button>
            </div>
        </form>
    )
}
