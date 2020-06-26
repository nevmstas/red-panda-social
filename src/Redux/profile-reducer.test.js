import * as reducer from './profile-reducer'

describe('actions', () => {
    it('should create an action to setting user profile',() => {
        const profile = 'profile'
        const expectedAction = {
            type: reducer.SET_USER_PROFILE,
            profile
        }
        expect(reducer.setUserProfile(profile)).toEqual(expectedAction)
    })

    it('should create an action to setting status',() => {
        const status = 'status'
        const expectedAction = {
            type: reducer.SET_STATUS,
            status
        }
        expect(reducer.setStatus(status)).toEqual(expectedAction)
    })

    it('should create an action to setting photo',() => {
        const photo = 'photo'
        const expectedAction = {
            type: reducer.SET_PHOTO_SUCCESS,
            photos: photo
        }
        expect(reducer.savePhotoSuccess(photo)).toEqual(expectedAction)
    })
})

