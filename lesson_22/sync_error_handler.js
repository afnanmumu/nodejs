const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    for(let i=0;i<10;i++){
        if(i===5)next('There was an error')
        else res.write('a') // generates headers
    }
    res.end()
})

app.use((req,res,next)=>{
    next('There was a problem!')
})

app.use((err,req,res,next)=>{
    if(res.headersSent){
        next('There was a problem!') // handles headers sent
    }
    else{
        if(err.message){
            res.status(500).send(err.message)
        }
        else{
            res.send('There was an error!')
        }
    }
})

//default error handler
// app.use((err,req,res,next)=>{
//     handle error here
// })

app.listen(3000,()=>{
    console.log('listening to port 3000');
})