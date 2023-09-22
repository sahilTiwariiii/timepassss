import React, { useState } from 'react'
 
import { useLocation, useNavigate } from 'react-router-dom';
import '../Styles/AuthStyles.css'

const Login = () => {
  
    const navigate=useNavigate()
  const location=useLocation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
   

    const handleSubmit=async(e)=>{
e.preventDefault()

    }
  return ( 
   
        <div className="form-container">
           <form onSubmit={handleSubmit}>
            <h1>Login Form</h1>

  <div className="mb-3">
    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required className="form-control" id="exampleInputEmail1" placeholder='Enter your Email' />
  </div>
  <div className="mb-3">
    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required className="form-control" id="exampleInputPassword1" placeholder='Enter your Password' />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

        </div>
    
  )
}

export default Login