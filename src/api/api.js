import * as axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY" : "f97bc1d7-2910-490d-a19c-f5fbf0d0365f" 
    }
})
export const usersApi = {
    getUsers(currentPage = 1, pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    
    getUserProfile(userId){
        return instance.get(`Profile/`+ userId).then(response => response.data)
    },

    followUser(userId){
        return instance.post(`follow/${userId}`).then(response => response.data)
    },

    unFollowUser(userId){
        return instance.delete(`follow/${userId}`).then(response => response.data)
    }
}

export const authApi = {
    me() {
        return instance.get('auth/me/')
    }
}







            