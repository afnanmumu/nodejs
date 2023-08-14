const express = require('express')
const fs = require('fs')
const app = express()

app.get('/',[
    (req,res)=>{
    // fs.readFileSync('/file-does-not-exist',(err,data)=>{
    // }) // gives default error handler
    fs.readFile('/file-does-not-exist',(err,data)=>{
        console.log(data)
        next(err)
        console.log(data.property)
    })},
    (req,res)=>{
            console.log(data.property)
        }, // doing middleware chaining in order to use sync default error handler
    // (req,res)=>{
        // setTimeout(function(){
        //     try{
        //         console.log(a)
        //     }
        //     catch(err){
        //         next(err)
        //     }
        // },100) //async error handler
    // }
])

//custom error handler
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

app.listen(3000,()=>{
    console.log('listening to port 3000');
})