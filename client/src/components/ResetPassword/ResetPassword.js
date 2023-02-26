import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useParams,useNavigate} from 'react-router-dom'
import {newPassword} from '../../Features/Auth/AuthActions'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const ResetPassword = () => {
    const [password,setPassword] = useState('')
    const dispatch =  useDispatch()
    const token = useParams();
    const navigate = useNavigate()
    const tokenData = {password,token}
    const authState = useSelector(state=>state.auth)
    const {isError,isPasswordSuccess,message}= authState
    const updatePassword = async(e)=>{
        e.preventDefault()
        await dispatch(newPassword(tokenData))
        if(isPasswordSuccess){
            toast.success("updated")
            navigate("/")
        }
        else if(isError){
            toast.error("error")
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
                                <form className='w-300' onSubmit={updatePassword}>
                                    <div className='input-group'>
                                    <span className='input-group-addon'>
                                        <i className='icofont icofont-password'></i>
                                    </span>
                                    <input type='password' placeholder='New Password' className='form-control' required autoComplete='off' value={password} onChange={e=>setPassword(e.target.value)}/>
                                    </div>
                                  
                                    <div className='m-t-20'>
                                        <button className='btn btn-primary btn-md btn-block m-b-10 signupbtn' type='submit'>Update password</button>
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

export default ResetPassword