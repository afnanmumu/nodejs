const express = require('express')
const publicRouter = express.Router();

publicRouter.param((param,option)=>(req,res,next,val)=>{
    if(val === option){
        next();
    }
    else{
        res.sendStatus(403);
    }
    next();
})

publicRouter.param('user','12')

publicRouter.get('/:user',(req,res)=>{
    res.send('hello admin')
})

app.listen(3000,()=>{
    console.log('listening to port 3000');
})