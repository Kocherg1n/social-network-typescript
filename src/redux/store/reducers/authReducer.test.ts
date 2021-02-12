import {authReducer, setLoginError, setUserData, setUserLoggedIn} from './authReducer'


const state = {
    userData: {
        email: null,
        login: null,
        id: null
    },
    userLoggedIn: false,
    loginErrorMessage: null
}

it('new users data should be added', () => {
    const newUserData = {
        email: 'test@mail.ru',
        login: 'testLogin',
        id: 123,
    }
    const action = setUserData(newUserData)
    const newState = authReducer(state, action)
    // expect(newState.userData.email).toBe('test@mail.ru')
    // expect(newState.userData.login).toBe('testLogin')
    // expect(newState.userData.id).toBe(123)
    expect(newState.userData).toStrictEqual(newUserData)
})

it('new user logged in status (boolean) should be added', () => {
    const action = setUserLoggedIn(true)
    const newState = authReducer(state, action)
    expect(newState.userLoggedIn).toBe(true)
})

it('new text error message should be added', () => {
    const action = setLoginError('Some text error message')
    const newState = authReducer(state, action)
    expect(newState.loginErrorMessage).toBe('Some text error message')
})
