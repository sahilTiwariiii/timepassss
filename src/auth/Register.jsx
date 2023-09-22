import React, { useState } from 'react'

// import toast from 'react-hot-toast';
// import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import '../Styles/AuthStyles.css'
const Register = () => {
    const navigate=useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    // form function
    const handleSubmit=async(e)=>{
e.preventDefault()
    }
  return (
    
        <div className="form-container" >
           <form onSubmit={handleSubmit}>
            <h1>Register Form</h1>
  <div className="mb-3">
    <input type="text"  value={name} onChange={(e)=>setName(e.target.value)} required className="form-control" id="exampleInputEmail1" placeholder='Enter your Name' />
  </div>
  <div className="mb-3">
    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required className="form-control" id="exampleInputEmail1" placeholder='Enter your Email' />
  </div>
  <div className="mb-3">
    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required className="form-control" id="exampleInputPassword1" placeholder='Enter your Password' />
  </div>
  <div className="mb-3">
    <input type="text" value={phone} required onChange={(e)=>setPhone(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder='Enter your phone' />
  </div>
  <div className="mb-3">
    <input type="text" value={address} required onChange={(e)=>setAddress(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder='Enter your Address' />
  </div>
 
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

        </div>
 
  )
}

export default Register