import React from 'react'
import './Login.css'
import {Button} from '@material-ui/core'
import { auth, provider } from '../firebase'
const Login = () => {
    
    const signInHandler=()=>{
        auth.signInWithPopup(provider)
        .then(result=>{
            console.log('Logged In')
        })
        .catch(err=>alert(err))
    }

    return (
        <div className='login'>
            <div className="login__container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlzbQhNr7n-ZoqrESNqRTDH1-y-jbGIJvfRUml-HW4Z_W0eoNtkMpwG7oOLIJoKnGkEJ0&usqp=CAU" alt="drive logo"/>
                <div className="login_text">
                    <h1>Sign In to Todo App</h1>
                </div>
                <Button onClick={signInHandler}>Sign In With Google</Button>
            </div>
        </div>
    )
}

export default Login
