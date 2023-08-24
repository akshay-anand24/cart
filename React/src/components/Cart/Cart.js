import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import 'aos/dist/aos.css';
import Aos from 'aos';

const Cart = () => {

  let [total,setTotal]=useState(0)
let tot=0

  let [items,setItems]=useState([])

  let cart=async()=>{
    let result=await fetch('http://localhost:8000')
     result=await result.json()
     if(result.length!==items.length)
     setItems(result)
    console.log(items)
   for(let i=0;i<items.length;i++)
   if(items)
   tot=tot+items[i].count*items[i].itemObject.idCategory
  if(tot!==total)
  setTotal(tot)

  }


 let plus=async(value)=>{
  console.log(value)
  let result=await fetch('http://localhost:8000/plus',{
    method:'put',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({itemObject:value.itemObject,count:1})
    })
    let respons=await result.json()
    window.location.reload()
    console.log(respons)
 }
 let minus=async(value)=>{
  let result=await fetch('http://localhost:8000/minus',{
    method:'put',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({itemObject:value.itemObject,count:1})
    })
    let respons=await result.json()
    console.log(respons)
    if(value.count===1)
    del(value)
  else
    window.location.reload()
 }


 let del=async(value)=>{
  let result=await fetch('http://localhost:8000',{
    method:'delete',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({itemObject:value.itemObject})
  })
  result=await result.json()
  console.log(result)
  window.location.reload()
 }



  useEffect(()=>{
    Aos.init({duration:2000})
    cart()
  })

  return (
    <>
    <h1 style={{textDecoration:'underline',margin:'40px'}}>Cart</h1>
    <h2 style={{margin:'10px'}}>Total:{total}</h2>


    <Box sx={{textAlign:'left', display:'flex',flexWrap:'wrap',justifyContent:'space-evenly',mt:5,p:3,bgcolor:'rgb(248, 253, 255)'}}>


{items.map((value,i)=>(



<Card sx={{ maxWidth: 600,minWidth:300,width:'40vw',m:2 }} data-aos="fade-up" key={i}>
<CardMedia
sx={{ minHeightheight: 200,height:'50vh' }}
image={value.itemObject.strCategoryThumb}
title={value.itemObject.strCategory}
/>
<CardContent>
<Typography gutterBottom variant="h5" component="div">
{value.itemObject.strCategory}
</Typography>
<Typography gutterBottom variant="h5" component="div">
Price: <i class="fa-solid fa-indian-rupee-sign fa-xs"></i> {value.itemObject.idCategory}
</Typography>

</CardContent>
<CardActions>
  <Box sx={{display:'flex',justifyContent:'space-between',width:'100%'}}>
<Button size="large"  onClick={()=>{minus(value)}}><i class="fa-solid fa-minus"></i></Button>
<Typography variant="h6" >{value.count}</Typography>
<Button size="large" onClick={()=>{plus(value)}}><i class="fa-solid fa-plus"></i></Button>
</Box>
</CardActions>
<Typography variant='h5' sx={{display:'block',m:2}}>Total: <i class="fa-solid fa-indian-rupee-sign fa-xs"></i>{value.itemObject.idCategory*value.count}</Typography>
</Card>

)
)}
 </Box>
    </>
  )
}

export default Cart