import React, { useEffect } from 'react'
import { useState } from 'react';
import './style.css'
import { Link, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  let navigate=useNavigate();

  useEffect(()=>{
    Aos.init({duration:2000})

  })

 const api=async()=>{
    let data= await fetch('http://127.0.0.1:8001/login',{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({'email':email,'password':age,'name':name})
    })
    data= await data.json()
    // console.log(data)
    if(data.email){
      localStorage.setItem('user',JSON.stringify(data))
      console.log(JSON.parse(localStorage.getItem('user')))
      navigate('/')
      window.location.reload()
    }
 else
 alert(data.daa)
 }


  const handleSubmit = async (e) => {
    if(name.length===0||email.length===0||age.length===0)
         console.log(33333)
        else{
            api();
        }
  };

  return (
    <>
    <h2 data-aos='flip-down'>User Login</h2>
    <div className="form-container" data-aos='flip-up'>
    <form  className="registration-form">
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br />
      <label>Email:</label>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
      <label>Password:</label>
      <input type="password" value={age} onChange={(e) => setAge(e.target.value)} /><br />
      <button type="button" onClick={handleSubmit}>Login</button>
    </form>
  </div>
    <h3 data-aos='flip-down'><Link to={'/signup'}>New User? Sign up here!!!</Link></h3>
  </>
  );}

export default Login