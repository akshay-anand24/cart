let mongoosse=require('mongoose')
let connection=require('../connection')

let cartSchema=mongoosse.Schema({
    itemObject:{
        type:Object,
        required:true
    },
    count:Number
})

let cartModel=mongoosse.model('cart',cartSchema)
module.exports=cartModel