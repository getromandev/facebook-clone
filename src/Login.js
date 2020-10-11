import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { auth, provider } from './firebase'
import { actionTypes } from './reducer'
import { useStateValue } from './StateProvider'

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        // sign in click handler
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
            console.log(result)
        })
        .catch((error) => alert(error.message))
    }
 
    return (
        <div className='login'>
            <div className='login__logo'>
                <img 
                    src='https://upload.wikimedia.org/wikipedia/commons/d/d4/Akash_rajoriya_Facebook_.png' 
                    alt='Picture of Facebook logo'   
                />
                <img 
                    src='https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg'
                    alt='Picture of Facebook logo text'
                />
            </div>
            <Button type='submit' onClick={signIn}> Sign 📥 </Button>
        </div>
    )
}

export default Login
