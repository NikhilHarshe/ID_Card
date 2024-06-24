import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../services/opretions/userApi'
import { useDispatch } from 'react-redux';

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formdata, setFormData] = useState({
    Email : "", Password: ""
  })
  const changeHandler = (e) => {
    const {name, value} = e.target
    setFormData({
      ...formdata, [name] : value
    })
  }
  const submitHandler = async(e) => {
    e.preventDefault();
    await login(formdata, navigate, dispatch)
    setFormData({
      Email : "", Password: ""
    })
  }

  return (
    <div>
      <h2 className=' text-2xl font-bold'>Enter your UserID and Password</h2>
      <form action="" onSubmit={submitHandler}>
        <div className=' mt-4'>
            <label className=' text-lg font-semibold' htmlFor="UserID">UserID <span className=' text-lg text-red-500'>*</span> </label><br />
            <input name="Email" onChange={changeHandler} value={formdata.Email} className=' border-2 w-[28rem] px-4 py-2' type="text" placeholder='Enter Your UserID'/>
        </div>
        <div className=' mt-4'>
            <label className=' text-lg font-semibold' htmlFor="Password">Password <span className=' text-lg text-red-500'>*</span> </label><br />
            <input name="Password" onChange={changeHandler} value={formdata.Password} className=' border-2 w-[28rem] px-4 py-2' type="password"  placeholder='Enter Your Password'/>
        </div>
        <button className=' bg-blue-600 hover:bg-blue-700 hover:text-white duration-150 px-3 py-2 rounded-md w-[7rem] text-gray-200 mt-7' type='submit' >Submit</button>
      </form>
    </div>
  )
}

export default LoginForm
