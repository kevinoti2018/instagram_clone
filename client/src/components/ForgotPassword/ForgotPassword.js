import React from 'react'
import {Link} from 'react-router-dom'
const ForgotPassword = () => {
  return (
    <div className='container'>
        <div className='row w-530'>
            <div className='col-sm-12 d-flex loginform'>
                <div className='login-card card-block auth-body'>
                    <div className='authbox'>
                        <h1 className='brand-logo text-center'>Instagram</h1>
                        
                        <br/>
                        <div className='col-12'>
                            <form className='w-300'>
                                <div className='input-group'>
                                <span className='input-group-addon'>
                                    <i className='icofont icofont-email'></i>
                                </span>
                                <input type='email' placeholder='Email Address' className='form-control' required autocomplete='off'/>
                                </div>
                              
                                <div className='m-t-20'>
                                    <button className='btn btn-primary btn-md btn-block m-b-10 signupbtn' type='submit'>Reset password</button>
                                   <br/>
                                    Go back?<Link to='/'>Login</Link>
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

export default ForgotPassword