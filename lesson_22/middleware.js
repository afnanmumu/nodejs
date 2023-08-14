const express = require('express') // created a express app
const app = express() //clone of express app
const adminRouter = express.Router()
const cookieParser = require('cookie-parser')

// app.use(cookieParser) // third party middleware
// app.use(express.json) // build-in middleware
// Application level Middleware
// http://localhost:3000/admin/dashboard      /about
const logger = (req,res,next)=>{
    console.log(
        `${new Date(Date.now()).toLocaleString} - ${req.method} - ${req.originalUrl} - ${req.protocol} - ${req.ip}`
    );
    // throw new Error('This is an error')
    next();
}
const errorHandlingMiddleware = (err,req,res,next)=>{
    console.log(err.message)
    res.status(500).send('Server side error')
}
const loggerWrapper = (options) => {
    return function(req,res,next){
        if(options.log){
            console.log(
                `${new Date(Date.now()).toLocaleString} - ${req.method} - ${req.originalUrl} - ${req.protocol} - ${req.ip}`
            );
            next();
        }
        else{
            throw new Error('Failed to log')
        }
    }
}

// adminRouter.use(logger)
// adminRouter.use(errorHandlingMiddleware)
adminRouter.use(loggerWrapper({log: true}))

adminRouter.get('/dashboard',(req,res)=>{
    res.send('Dashboard')
    res.end()
})
// adminRouter.use(logger)

app.get('/about',(req,res)=>{
    res.send('About')
    res.end()
})

app.use('/admin',adminRouter)

app.listen(3000,()=>{
    console.log('listening to port 3000')
})