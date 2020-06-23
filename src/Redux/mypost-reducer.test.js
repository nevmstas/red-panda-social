import {myPostReducer} from './mypost-reducer'

describe('actions',() => {
    const post = 'new post'
    const expectedAction = {
        type: 'ADD-POST',
        post
    }

    expect(myPostReducer.addPost(post)).toEqual(expectedAction)
})