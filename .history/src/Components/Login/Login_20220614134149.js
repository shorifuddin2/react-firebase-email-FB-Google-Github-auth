import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import auth from '../../firebase.init';
import GoogleLogo from '../../Images/google.svg'
import GithubLogo from '../../Images/github.svg'
import FacebookLogo from '../../Images/facebook.svg'
import { useNavigate } from 'react-router-dom';

const googleProvider = new GoogleAuthProvider();
const githubProvvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [user, setUser] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    //Email Field 
    const getEmail = event => {
        setEmail(event.target.value);
    }
    //Password Field
    const getPassword = event => {
        setPassword(event.target.value)
    }
    //Login with Email and Password
    const handleLoginWithEmailAndPassword = event => {
        event.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setUser(user)
                console.log(user);
            }).catch(error => {
                setError(error.message)
                console.error(error.message)
            })
    }
    //Login with Google
    const handleGoolgeSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user)
                console.log(user);
            }).catch(error => {
                setError(error.message)
                console.log(error.message);
            })
    }
    //Login with Github
    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvvider)
            .then(result => {
                const user = result.user;
                setUser(user)
                console.log(user)
            }).catch(error => {
                setError(error.message)
                console.error(error.message)
            })
    }
    //Login with Facebook
    const handleFacebookSignIn = () => {
        signInWithPopup(auth, facebookProvider)
            .then(result => {
                const user = result.user;
                setUser(user)
                console.log(user)
            }).catch(error => {
                setError(error.message)
                console.error(error.message)
            })
    }
    return (
        <div className='auth-form-container '>
            <div className='auth-form'>
                <h1>Log In</h1>
                <form onSubmit={handleLoginWithEmailAndPassword}>
                    <div className='input-field'>
                        <label htmlFor='email'>Email</label>
                        <div className='input-wrapper'>
                            <input
                                onBlur={getEmail}
                                type='email'
                                name='email'
                                id='email'
                            />
                        </div>
                    </div>
                    <div className='input-field'>
                        <label htmlFor='password'>Password</label>
                        <div className='input-wrapper'>
                            <input
                                onBlur={getPassword}
                                type='password'
                                name='password'
                                id='password'
                            />
                        </div>
                    </div>
                    <button type='submit' className='auth-form-submit'>
                        Login
                    </button>
                </form>
                <p className='redirect'>
                    Don't have an account?{" "}
                    <span onClick={() => navigate('/register')}>Join Now</span>
                </p>
                <div className='horizontal-divider'>
                    <div className='line-left' />
                    <p>or</p>
                    <div className='line-right' />
                </div>
                <div className='provider-parent'>
                    <button onClick={handleGoolgeSignIn} className='google-auth'>
                        <img src={GoogleLogo} alt='' />
                    </button>
                    <button onClick={handleGithubSignIn} className='google-auth'>
                        <img className='github' src={GithubLogo} alt='' />
                    </button>
                    <button onClick={handleFacebookSignIn} className='google-auth'>
                        <img className='facebook' src={FacebookLogo} alt='' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;