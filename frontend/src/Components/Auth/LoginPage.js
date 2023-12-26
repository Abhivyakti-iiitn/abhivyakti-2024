import React, { useEffect, useState } from 'react';
import '../../css/Login.css';
import logo from "../../assets/EventPageAsst/logoPlaceHolder.svg";
import { useNavigate } from 'react-router-dom';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import Footer from '../Footer';

const clientId = "604869602001-rhi20onl03rdgur9vj6gghc64bt905is.apps.googleusercontent.com";

const LoginPage = () => {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const navigateTo = useNavigate();

    // useEffect(() => {
    //     const footerHeight = document.querySelector('.footer').offsetHeight;
    //     document.documentElement.style.setProperty('--footer-height', `${footerHeight}px`);
    // }, [])

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
        <>
            <div className='LoginSignUp Login'>
                <div className='loginContainer'>
                    <div className='bgImageLogin'>
                        <div className='logoLogin'>
                            <img src={logo} alt="clublogo" srcset="" className='LoginClubLogo' />
                        </div>
                    </div>

                    <div className='LoginSignUpForm'>
                        <div className='SignupFormArea'>
                            <p className='signUpHeading'>Login</p>
                            <form className='SignupForm'>

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
                                            type={`${showPassword ? 'text' : 'password'}`}
                                            placeholder='Enter Your Password'
                                            value={userPassword}
                                            onChange={handlePasswordChange}
                                        />
                                        {(showPassword ?
                                            <VisibilityOffOutlinedIcon
                                                className='EyeIcon'
                                                onClick={() => { setShowPassword(false) }}
                                            />
                                            :
                                            <VisibilityOutlinedIcon
                                                className='EyeIcon'
                                                onClick={() => { setShowPassword(true) }}
                                            />
                                        )}
                                    </div>
                                </div>

                                <button className='submitButton' type='submit' >
                                    Login
                                </button>
                            </form>
                            <div className='SignUpToLogin'>
                                <span>
                                    First Time Here?
                                </span>
                                <span className='linkToLogin' onClick={() => { navigateTo(`/signup`) }}>
                                    Sign Up
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default LoginPage