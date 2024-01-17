import React, { useEffect, useState, useContext } from 'react';
import '../../css/Login.css';
import { useNavigate } from 'react-router-dom';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import Footer from '../Footer';
import LogoComponent from '../../assets/LogoComponent.js';
import NewContext from '../../context/NewContext.js';
import { ToastContainer, toast } from 'react-toastify';


const url = process.env.REACT_APP_HOST || 'http://localhost:5000';
// const clientId = "604869602001-rhi20onl03rdgur9vj6gghc64bt905is.apps.googleusercontent.com";

const LoginPage = () => {

   
    const context = useContext(NewContext);
    // const [userName, setUserName] = useState('');
    // const [userEmail, setUserEmail] = useState('');
    // const [userPassword, setUserPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    // const [isLogin, setisLogin] = useState(false);

    // const navigateTo = useNavigate();

    // const handleSubmit = () => {
    //     localStorage.setItem("usrName", "demoUser");
    //     navigateTo('/');
    // }

    useEffect(() => {
        if (localStorage.getItem("access_token")) {
            navigate("/home");
        }
        window.scrollTo(0, 0);
    }, [])

    // const handleNameChange = (e) => {
    //     e.preventDefault();
    //     setUserName(e.target.value);
    // }
    // const handleEmailChange = (e) => {
    //     setUserEmail(e.target.value);
    // }
    // const handlePasswordChange = (e) => {
    //     setUserPassword(e.target.value);
    // }

    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);

            const res = await fetch(`${url}/api/sign-in`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (data.success === false) {
                setError(data.msg);
                // console.log(error.message);
                toast.error(data.msg);

                
                console.log(data)
            } else {
                setError(null);
                toast.success("Successfully Loggedin!");
                
                window.localStorage.setItem("access_token", data.access_token);
                console.log(data)
                context.setuserData(data.rest);
                navigate('/home');
            }

            setLoading(false);
        } catch (error) {
            setError(error.message);
            console.log(error.message);
            setLoading(false);
        }
    };
    return (
        <>
            <div className='LoginSignUp Login'>
                <div className='loginContainer'>
                    <div className='bgImageLogin'>
                        <div className='logoLogin'>
                            <LogoComponent />
                        </div>
                    </div>

                    <div className='LoginSignUpForm'>
                        <div className='SignupFormArea'>
                            <h1 className='signUpHeading'>Login</h1>
                            <form className='SignupForm' onSubmit={handleSubmit}>

                                <div className='loginInputs'>
                                    <label htmlFor='emailForm' className='loginLabel'>
                                        Email
                                    </label>
                                    <input
                                        className='loginInput'
                                        name='emailForm'
                                        placeholder='bt22cse@iiitn.ac.in'
                                        // value={userEmail}
                                        // onChange={handleEmailChange}
                                        id='email'
                                        onChange={handleChange}
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
                                            // value={userPassword}
                                            // onChange={handlePasswordChange}
                                            id='password'
                                            onChange={handleChange}
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

                                {/* <button className='submitButton' type='submit' >
                                    Login
                                </button> */}
                                <button disabled={loading} className='submitButton' type="submit">{loading ? 'loading...' : 'Log In'}</button>
                            </form>
                            <div className='SignUpToLogin'>
                                <span>
                                    First Time Here?
                                </span>
                                <span className='linkToLogin' onClick={() => { navigate(`/signup`) }}>
                                    Sign Up
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default LoginPage