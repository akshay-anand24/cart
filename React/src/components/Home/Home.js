import React, { useEffect } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';

let auth=localStorage.getItem('user')

const Home = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  })

  return (
    <>   <header data-aos='fade-down'> 
    <h1>Your Website</h1>
    <p>Welcome to our website!</p>
</header>

<nav data-aos='zoom-out'>
    <Link to='/'>Home</Link> |
    <Link to={'/menu'}>Menu</Link> |
    <Link to={'/cart'}>Cart</Link> |
    {auth?<span style={{cursor:'pointer'}} onClick={()=>{localStorage.removeItem('user')
    window.location.reload()}}>Logout</span>:<Link to={'/login'}>Login</Link> }

</nav>

<section data-aos='fade-up'>
    <h2>Welcome to Our Website</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel metus vel urna sollicitudin consectetur.</p>
</section>

<footer data-aos='flip-right'>
    <p>&copy; 2023 Your Website. All rights reserved.</p>
</footer></>
  )
}

export default Home