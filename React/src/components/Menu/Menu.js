import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';
import CartCard from '../Card/CartCaed';



const Menu = () => {
    let [data,setData]=useState([])
    let [flag,setFlag]=useState(false)

const api=async()=>{
    let result= await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    result=await result.json()
    if(result.categories.length!==data.length)
    setData(result.categories)
    console.log(data)
    setFlag(true)
}






    useEffect(()=>{
        api()
        Aos.init({duration:2000})
    })
  return (
    <>
        <Typography variant='h3' sx={{mt:5,textDecoration:'underline',fontFamily:'ubuntu'}} data-aos='flip-down'>Menu</Typography>
        {flag?(<CartCard datas={data}/>):null}
         
    </>
  )
}

export default Menu