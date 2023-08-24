function cartApi(){



    
    let express=require('express')
    let cors=require('cors')
    let cartModel=require('./cartModel')
    
    let app=express()
    app.use(express.json())
    app.use(cors())

    app.get('/',async(req,resp)=>{
        let result=await cartModel.find({})
        resp.send(result)
    })

    // app.post('/',async(req,resp)=>{
    //     let data=new cartModel(req.body)
    //     let result=await data.save()
    //     resp.send(result)
    // })


    app.delete('/',async(req,resp)=>{
        let result=await cartModel.deleteOne({itemObject:req.body.itemObject})
        resp.send(result)
    })
    app.put('/',async(req,resp)=>{
        let result=await cartModel.updateOne({itemObject:req.body.itemObject},{$set:req.body},{upsert:true})
        resp.send(result)
    })
    app.put('/plus',async(req,resp)=>{
        let result=await cartModel.updateOne({itemObject:req.body.itemObject},{$inc:{count:1}})
        resp.send(result)
    })
    app.put('/minus',async(req,resp)=>{
        let result=await cartModel.updateOne({itemObject:req.body.itemObject},{$inc:{count:-1}})
        resp.send(result)
    })


    app.listen(8000)
    
}

module.exports=cartApi