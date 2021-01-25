import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        'API-KEY': '03fb97ce-8827-479d-9e38-80cd2e7f9f8e'
    }
})

export const usersAPI = {
    getUsers: (perPage: number, currentPage: number) => instance.get(`/users?count=${perPage}&page=${currentPage}`).then(res => res.data),
    follow: (userId: number) => instance.post(`/follow/${userId}`).then(res => res.data),
    unfollow: (userId: number) => instance.delete(`/follow/${userId}`).then(res => res.data)
}

export const authAPI = {
    me: () => instance.get('/auth/me').then(res => res.data)
}
