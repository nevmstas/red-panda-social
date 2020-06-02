import * as Yup from 'yup'

export const messageSchema = Yup.object().shape({
    message: Yup.string()
        .max(10, 'Too long!')
        .required('Please enter a message')
});

export const singInSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(3, 'Too small!')
        .required('Required password')
})