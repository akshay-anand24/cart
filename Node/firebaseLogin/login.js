function Login()

{
    const express=require('express')
const cors=require('cors')
const Users=require('./config')
const app=express()
app.use(express.json())
app.use(cors())

app.get('/',async(req,resp)=>{
    let query=Users.where('itemObject.email','==','fjfjf').where('count','==',1);
    let data=await query.get();
    let a={'length':data.docs.length};
    resp.send(a)
    
})



app.post('/',async(req,resp)=>{
let data= req.body
data= await Users.add(data)
resp.send(data)
})

app.post('/login',async(req,resp)=>{
    let query=Users.where('email','==',req.body.email).where('password','==',req.body.password)
    let data= await query.get();
    if(data.docs.length)
    resp.send( data.docs[0].data())
    else
    resp.send({daa:'Invalid Username or Password'})
})




app.listen(8001)

}

module.exports=Login;