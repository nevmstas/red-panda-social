import * as mypostReducer from './mypost-reducer'

describe('actions', () => {
    it('should create an action to add post',() => {
        const post = 'new post'
        const expectedAction = {
            type: 'ADD-POST',
            post
        }
        expect(mypostReducer.addPost(post)).toEqual(expectedAction)
    })
})


describe('reducer', ()=> {
    it('should return the initial state', () => {
        expect(mypostReducer.myPostReducer(undefined, {})).toEqual({
            posts: [
                {id:1, text: 'Post 1', likes: 1},
                {id:2, text: 'Post 2', likes: 2},
                {id:3, text: 'Post 3', likes: 4},
                {id:4, text: 'Post 4', likes: 2}
            ],
            fetchedPosts: [
                { userId: 1, id: 2, title: 'Title', body: 'post body' }
            ]
        })    
    })
})
