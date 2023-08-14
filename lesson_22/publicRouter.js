const express = require('express')
const publicRouter = express.Router();

// publicRouter.get('/',(req,res) => {
//     res.send('Home');
// })

// publicRouter.get('/about',(req,res) => {
//     res.send('About');
// })

publicRouter
    .route('/user')
    .all((req,res,next)=>{
        console.log('I am logging something')
        next()
    })
    .put((req,res)=>{
        res.send('Put')
    })
    .post((req,res)=>{
        res.send('Post')
    })
    .delete((req,res)=>{
        res.send('Delete')
    })
    .get((req,res)=>{
        res.send('Get')
    })

module.exports = publicRouter;