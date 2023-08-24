import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';

const CartCard = (props) => {
  let navigate=useNavigate()
  let [data,setData]=useState(props.datas)
  // console.log(props.data)

  let apis=async(value)=>{
    // alert(333)
    let result=await fetch('http://127.0.0.1:8000',{
      method:'put',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({itemObject:value,count:1})
    })
    let respons=await result.json()
    console.log(respons)

    navigate('/cart')
  }



  return (
    <Box sx={{textAlign:'left', display:'flex',flexWrap:'wrap',justifyContent:'space-evenly',mt:5,p:3,bgcolor:'rgb(248, 253, 255)'}}>


       {data.map((value,i)=>(


<Card sx={{ maxWidth: 600,minWidth:300,width:'40vw',m:2 }} data-aos="fade-up" key={i}>
<CardMedia
  sx={{ minHeightheight: 200,height:'50vh' }}
  image={value.strCategoryThumb}
  title={value.strCategory}
/>
<CardContent>
  <Typography gutterBottom variant="h5" component="div">
    {value.strCategory}
  </Typography>
  <Typography gutterBottom variant="h5" component="div">
    Price: <i class="fa-solid fa-indian-rupee-sign fa-xs"></i> {value.idCategory}
  </Typography>
  <Typography variant="body2" color="text.secondary">
  {value.strCategoryDescription}
  </Typography>
</CardContent>
<CardActions>
  <Button size="small" onClick={()=>{apis(value)}}>Add To Cart</Button>
</CardActions>
</Card>
  

       ))}
        


    </Box>
  )
}

export default CartCard