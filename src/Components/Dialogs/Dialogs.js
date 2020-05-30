import React from 'react'
import s from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import {messageSchema} from './../../validators.js'


const Dialogs =(props) =>{

    const formik = useFormik({
        initialValues: {
            message: ''
        },
        validationSchema: messageSchema,
        onSubmit: values => {
            alert(values.message)
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

                <form onSubmit={formik.handleSubmit}>
                    <div><textarea placeholder='Enter your message...'
                                    id ='message'
                                    name = 'message'
                                    type = 'message'                                   
                                    onChange={formik.handleChange}                              
                                    value={formik.values.message}></textarea></div>
                    <div><button type = 'submit' >Send</button></div>
                </form>

            </div>
        </div>
    )
}



export default Dialogs