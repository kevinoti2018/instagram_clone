import React from 'react'
import { Link,useNavigate } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import * as yup from 'yup'
import {useFormik} from 'formik'
import {register} from '../../Features/Auth/AuthActions'

// validation

let schema = yup.object().shape({
    email:yup.string()
    .email("Email should be valid").required("Email is required"),
    password:yup.string().required("Password is required"),
    name:yup.string().required("Name is required")
})
const Register = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const authState = useSelector((state)=>state.auth)
    const formik = useFormik({
        initialValues:{
            email:"",
            password:"",
            name:""
        },
        validationSChema: schema,
        onSubmit: (values)=>{
            console.log(values)
            console.log('hi');
            dispatch(register(values))}
    })
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
                                <form className='w-300' onSubmit={formik.submit} >
                                    <div className='input-group'>
                                    <span className='input-group-addon'>
                                        <i className='icofont icofont-email'></i>
                                    </span>
                                    <input type='email' placeholder='Email Address' className='form-control' required autoComplete='off'
                                        value={formik.values.email}
                                        onChange={formik.handleChange("email")}
                                    />
                                    </div>
                                    <div className='input-group'>
                                    <span className='input-group-addon'>
                                        <i className='icofont icofont-name'></i>
                                    </span>
                                    <input type='text' placeholder='Name' className='form-control' required autoComplete='off'
                                    value={formik.values.name}
                                        onChange={formik.handleChange("name")}
                                    />
                                    </div>
                                    <div className='input-group'>
                                    <span className='input-group-addon'>
                                        <i className='icofont icofont-password'></i>
                                    </span>
                                    <input type='password' placeholder='Enter Password' className='form-control' required autoComplete='off'
                                    value={formik.values.password}
                                        onChange={formik.handleChange("password")}
                                    />
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