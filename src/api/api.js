import * as axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY" : "f97bc1d7-2910-490d-a19c-f5fbf0d0365f" 
    }
})

export const postApi = {
    getPosts(){
        return fetch('https://jsonplaceholder.typicode.com/posts?_limit=5').then(response => response.json())
    },
    // getPosts(){
    //     return axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5').then(response => response.data)
    // }

    addPost(text, userId = 1){
        const data = fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                title: text,
                body: 'body',
                userId
            }),
            headers:{
                "Content-type":"application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        return data
   
    }
}

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
    },
    saveProfile(profile){
        return instance.put(`profile`, profile)
    },
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







            