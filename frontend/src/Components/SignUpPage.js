import React, { useEffect, useState } from 'react';
import '../css/Login.css';
import logo from "../assets/EventPageAsst/logoPlaceHolder.svg";
import { useNavigate } from 'react-router-dom';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

const SignUpPage = () => {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const navigateTo = useNavigate();

    function handleCredentialResponse(response) {
        console.log("Encoded JWT ID token: " + response.credential);
    }
    window.onload = function () {
        google.accounts.id.initialize({
            client_id: "604869602001-rhi20onl03rdgur9vj6gghc64bt905is.apps.googleusercontent.com",
            callback: handleCredentialResponse
        });
        google.accounts.id.renderButton(
            document.getElementById("buttonDiv"),
            { theme: "outline", size: "large" }  // customization attributes
        );
        google.accounts.id.prompt(); // also display the One Tap dialog
    }

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
                            <div id="buttonDiv"></div>
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