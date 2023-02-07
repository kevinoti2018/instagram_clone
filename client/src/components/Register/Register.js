import React from 'react'
import { Link } from 'react-router-dom';
const Register = () => {
    return (
        <div className='container'>
            <div className='row w-530'>
                <div className='col-sm-12 d-flex loginform'>
                    <div className='login-card card-block auth-body'>
                        <div className='authbox'>
                            <h1 className='brand-logo text-center'>Instagram</h1>
                            <h3 className='text-secondary text-center' >Signup to see photos and videos of your friends</h3>
                            <br/>
                            <div className='col-12'>
                                <form className='w-300'>
                                    <div className='input-group'>
                                    <span className='input-group-addon'>
                                        <i className='icofont icofont-email'></i>
                                    </span>
                                    <input type='email' placeholder='Email Address' className='form-control' required autocomplete='off'/>
                                    </div>
                                    <div className='input-group'>
                                    <span className='input-group-addon'>
                                        <i className='icofont icofont-name'></i>
                                    </span>
                                    <input type='text' placeholder='Name' className='form-control' required autocomplete='off'/>
                                    </div>
                                    <div className='input-group'>
                                    <span className='input-group-addon'>
                                        <i className='icofont icofont-password'></i>
                                    </span>
                                    <input type='password' placeholder='Enter Password' className='form-control' required autocomplete='off'/>
                                    </div>
                                    <div className='m-t-30 text-left d-flex'>
                                    Have an account?
                                        <Link to='/' className='forgot-password'>
                                            <div  className='text-right f-w-600 text-inverse'>
                                                <i className='iconfont iconfont-lock'>Login</i>
                                            </div>
                                        </Link>
                                    </div>
                                    <br/>
                                    <div className='m-t-20'>
                                        <button className='btn btn-primary btn-md btn-block m-b-10 signupbtn' type='submit'>Sign up</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )
}

export default Register