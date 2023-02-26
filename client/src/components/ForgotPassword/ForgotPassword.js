import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {resetNewPassword} from '../../Features/Auth/AuthActions'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch ,useSelector} from 'react-redux';
import { validEmail } from '../../Utils/Utils'
import * as yup from 'yup'
import { useFormik } from 'formik';
const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const dispatch = useDispatch()
    const authState = useSelector((state)=>state.auth)
    const {isError, isNewPasswordSuccess,message} = authState
    
    const resetPassword = async(e)=>{
        e.preventDefault()
        if(validEmail(email)){
            await dispatch(resetNewPassword(email));
            console.log(email)
            if(isNewPasswordSuccess){
                 toast.success(message)
                setEmail('')
            }
            else if(isError){
                toast.error("Something went wrong")
            }
        }
        else{
            toast.error("Invalid Email")
            return;
        }

    }
  return (
    <div className='container'>
        <div className='row w-530'>
            <div className='col-sm-12 d-flex loginform'>
                <div className='login-card card-block auth-body'>
                    <div className='authbox'>
                        <h1 className='brand-logo text-center'>Instagram</h1>
                        
                        <br/>
                        <ToastContainer/>
                        <div className='col-12'>
                            <form className='w-300' onSubmit={resetPassword} >
                                <div className='input-group'>
                                <span className='input-group-addon'>
                                    <i className='icofont icofont-email'></i>
                                </span>
                                <input type='email' placeholder='Email Address' className='form-control' required autoComplete='off' value={email} onChange={(e)=>setEmail(e.target.value)}/>
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