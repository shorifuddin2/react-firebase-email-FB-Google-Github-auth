import { createUserWithEmailAndPassword, FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, sendEmailVerification, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../../firebase.init';
import GoogleLogo from '../../Images/google.svg'
import GithubLogo from '../../Images/github.svg'
import FacebookLogo from '../../Images/facebook.svg'
import { useNavigate } from 'react-router-dom';

const googleProvider = new GoogleAuthProvider();
const githubProvvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const Register = () => {
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
    //Submit field
    const handleFormSubmit = event => {
        event.preventDefault();
        
        //Creating user
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setUser(user)
                console.log(user);
                sendVerificationEmail()
            }).catch(error => {
                setError(error.message)
                console.log(error.message);
            })
        
    }
    //Sending verification email for the first signup
    const sendVerificationEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
            console.log("Verification Email sent");
        })
    }
    //Creating user with google signin
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
    //Creating user with github signin
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
    //Creating user with facebook signin
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
                <h1>Sign Up</h1>
                <form onSubmit={handleFormSubmit}>
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
                        Sign Up
                    </button>
                </form>
                <p className='redirect'>
                    Already have an account?{" "}
                    <span onClick={() => navigate('/login')}>Login</span>
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

export default Register;