import React ,{useEffect}from 'react'
import { Link,useNavigate } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import * as yup from 'yup'
import {useFormik} from 'formik'
import {login} from '../../Features/Auth/AuthActions'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
let schema = yup.object().shape({
    email:yup.string().email("Email should be valid").required("Email is required"),
    password:yup.string().required("Password is required"),
})
const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const authState = useSelector(state=>state.auth)
    const {isLoginSuccess,isLoading,isError,message} = authState
    const formik = useFormik({
        initialValues:{
            email:"",
            password:"",
        },
        validationSchema:schema,
        onSubmit:(values)=>{
            //console.log(values);
            dispatch(login(values))
            
        }
        
       
    })

    useEffect(()=>{
        if(isLoginSuccess){
            navigate('/home')
            toast.success(message)
        }
        else{
            navigate("/")
        }
    },[isLoading,isError])
  return (
    <div className='container'>
        <div className='row w-530'>
            <div className='col-sm-12 d-flex loginform'>
                <div className='login-card card-block auth-body'>
                    <div className='authbox'>
                        <h1 className='brand-logo text-center'>Instagram</h1>
                        
                        <br/>
                        <div className='col-12'>
                            <form className='w-300'onSubmit={formik.handleSubmit}>
                                <div className='input-group'>
                                <span className='input-group-addon'>
                                    <i className='icofont icofont-email'></i>
                                </span>
                                <input type='email' placeholder='Email Address' className='form-control' required 
                                autocomplete='off'
                                value={formik.values.email}
                                onChange={formik.handleChange("email")}
                                />
                                </div>
                               
                                <div className='input-group'>
                                <span className='input-group-addon'>
                                    <i className='icofont icofont-password'></i>
                                </span>
                                <input type='password' placeholder='Enter Password' className='form-control' required 
                                autocomplete='off'
                                value={formik.values.password}
                                onChange={formik.handleChange("password")}
                                />
                                </div>
                                <div className='m-t-30 text-left d-flex'>
                                    <Link to='/forgotpassword' className='forgot-password'>
                                   
                                        <div  className='text-right f-w-600 text-inverse'>
                                            <i className='iconfont iconfont-lock'>Forgot pasword?</i>
                                        </div>
                                    </Link>
                                </div>
                                <br/>
                                <div className='m-t-20'>
                                    <button className='btn btn-primary btn-md btn-block m-b-10 signupbtn' type='submit'>Sign in</button>
                                   <br/>
                                    Dont have an account?<Link to='/register'>Register</Link>
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

export default Login