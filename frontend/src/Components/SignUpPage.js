import React, { useEffect, useState } from 'react';
import '../css/Login.css';
import logo from "../assets/EventPageAsst/logoPlaceHolder.svg";
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

const clientId = "604869602001-rhi20onl03rdgur9vj6gghc64bt905is.apps.googleusercontent.com";

const SignUpPage = () => {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const navigateTo = useNavigate();

    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: clientId,
                scope: ""
            })
        }

        gapi.load('client:auth2', start)
    })

    useEffect(() => {
        const footerHeight = document.querySelector('.footer').offsetHeight;
        document.documentElement.style.setProperty('--footer-height', `${footerHeight}px`);
    }, [])

    const handleNameChange = (e) => {
        e.preventDefault();
        setUserName(e.target.value);
    }
    const handleEmailChange = (e) => {
        setUserEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setUserPassword(e.target.value);
    }

    return (
        <div className='LoginSignUp SignUp'>
            <div className='loginContainer'>
                <div className='bgImageLogin'>
                    <div className='logoLogin'>
                        <img src={logo} alt="clublogo" srcset="" className='LoginClubLogo' />
                    </div>
                </div>

                <div className='LoginSignUpForm'>
                    <div className='SignupFormArea'>
                        <p className='signUpHeading'>Create an account</p>
                        <form className='SignupForm'>
                            <div className='loginInputs'>
                                <label htmlFor='nameForm' className='loginLabel'>
                                    Full Name
                                </label>
                                <input
                                    className='loginInput'
                                    name='nameForm'
                                    placeholder='Enter Your Name'
                                    value={userName}
                                    onChange={handleNameChange}
                                />
                            </div>

                            <div className='loginInputs'>
                                <label htmlFor='emailForm' className='loginLabel'>
                                    Email
                                </label>
                                <input
                                    className='loginInput'
                                    name='emailForm'
                                    placeholder='bt22cse@iiitn.ac.in'
                                    value={userEmail}
                                    onChange={handleEmailChange}
                                />
                            </div>

                            <div className='loginInputs'>
                                <label htmlFor='passwordForm' className='loginLabel'>
                                    Password
                                </label>
                                <div className='passwordInputDiv'> 
                                    <input
                                        className='passwordInput'
                                        name='passwordForm'
                                        type={`${showPassword?'text':'password'}`}
                                        placeholder='Enter Your Password'
                                        value={userPassword}
                                        onChange={handlePasswordChange}
                                    />
                                    {(showPassword?
                                        <VisibilityOffOutlinedIcon
                                            className='EyeIcon'
                                            onClick={() => {setShowPassword(false)}}
                                        />
                                        :
                                        <VisibilityOutlinedIcon
                                            className='EyeIcon'
                                            onClick={() => {setShowPassword(true)}}
                                        />
                                    )}
                                </div>
                            </div>
                            
                            <button className='submitButton' type='submit' >
                                Create account
                            </button>
                        </form>
                        <div className='GoogleSignIn'>
                            <GoogleLogin
                                className='GoogleSignInBtn'
                                clientId={clientId}
                                buttonText="Continue with Google"
                                onSuccess={(res) => {console.log("Login successful", res.profileObj);}}
                                onFailure={(res) => {console.log("Failed to authorize google id", res);}}
                                cookiePolicy='single_host_origin'
                                isSignedIn={true}
                            />
                        </div>
                        <div className='SignUpToLogin'>
                            <span>
                                Already have an account?
                            </span>
                            <span className='linkToLogin' onClick={() => { navigateTo(`/login`) }}>
                                Log In
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage