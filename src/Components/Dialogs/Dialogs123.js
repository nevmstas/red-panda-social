import React from 'react'
import s from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import { useFormik, Formik } from 'formik'
import { messageSchema } from './../../validators.js'


const Dialogs =(props) =>{
    const formik = useFormik({
        initialValues: {
            message: ''
        },
        validationSchema: messageSchema,
        onSubmit: values => {
            props.onSendMessage(values.message)
        }
    })
    
    let dialogElements = props.dialogs.map((dialog) => {
        return <Dialog id={dialog.id} name = {dialog.name} />
    })

    let messageElements = props.messages.map((message) =>{
        return <Message id={message.id} text ={message.text} />
    })
    
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messagesItems}>
                <div>{messageElements}</div>
                <Formik
                    initialValues = {{
                        message: ''
                    }}
                    validationSchema = {messageSchema}
                    onSubmit = {(values) => {
                        props.onSendMessage(values.message)
                    }}
                >
                    { props => (
                        <form onSubmit={props.handleSubmit}>
                            <div><textarea placeholder='Enter your message...'
                                            id ='message'
                                            name = 'message'
                                            type = 'text'                                   
                                            onChange={props.handleChange}                              
                                            value={props.values.message}></textarea></div>
                            { props.errors.name && <p>{props.errors.name} KEKW</p> }

                            <div><button type = 'submit'> Send </button></div>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}



export default Dialogs