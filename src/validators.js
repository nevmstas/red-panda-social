import * as Yup from 'yup'

export const messageSchema = Yup.object().shape({
    message: Yup.string()
        .max(10, 'To long!')
});