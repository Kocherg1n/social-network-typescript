import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        'API-KEY': '03fb97ce-8827-479d-9e38-80cd2e7f9f8e'
    }
})

export const usersAPI = {
    getUsers: (perPage: number, currentPage: number) =>
        instance.get(`/users?count=${perPage}&page=${currentPage}`).then(res => res.data),
    follow: (userId: number) => instance.post(`/follow/${userId}`).then(res => res.data),
    unfollow: (userId: number) => instance.delete(`/follow/${userId}`).then(res => res.data),
}

export const profileAPI = {
    getProfile: (userId: number) => instance.get(`profile/${userId}`),
    getStatus: (userId: number) => instance.get(`profile/status/${userId}`),
}

export const authAPI = {
    me: () => instance.get('/auth/me').then(res => res.data),
    logIn: (email: string, password: string, rememberMe: boolean) => instance.post('/auth/login', {
        email,
        password,
        rememberMe
    }).then(res => res.data),
    logOut: () => instance.post('/auth/logout').then(res => res.data)
}

export const statusAPI = {
    setStatus: (text: string) => instance.put('/profile/status', {
        status: text
    }).then(res => res.data)
}
