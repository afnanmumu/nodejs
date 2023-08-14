const express = require('express')
const adminRouter = require('./adminRouter');
const publicRouter = require('./publicRouter');

const app = express();

app.get('/',publicRouter);
app.get('/admin',adminRouter);

app.listen(3000,()=>{
    console.log('listening to port 3000');
})