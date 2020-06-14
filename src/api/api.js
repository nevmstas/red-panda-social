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
        console.warn('Obsolete method. Please use profileApi object')
        return profileApi.getUserProfile(userId)
    },

    followUser(userId){
        return instance.post(`follow/${userId}`).then(response => response.data)
    },

    unFollowUser(userId){
        return instance.delete(`follow/${userId}`).then(response => response.data)
    }
}

export const profileApi = {
    getUserProfile(userId){
        return instance.get(`profile/`+ userId).then(response => response.data)
    },
    getStatus(userId){
        return instance.get(`profile/status/`+ userId)
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status: status})
    },
    savePhoto(photo){
        var formData = new FormData()
        
        //image, watch to api doc
        formData.append('image', photo);
        return instance.put(`profile/photo`, formData, {
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}

export const authApi = {
    me() {
        return instance.get('auth/me/')
    },
    login(email, password, rememberMe = false) {
        return instance.post('auth/login/', { email, password, rememberMe })
    },
    logout() {
        return instance.delete('auth/login')
    }
}







            