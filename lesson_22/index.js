const express = require('express') // created a express app
const app = express() //clone of express app

app.set('view engine','ejs')

app.get('/test',(req,res)=>{
    res.send('hello');
})

app.route('/about').get((req,res)=>{
    // res.render('index',{
    //     'name': 'Bangladesh'
    // }) // for rendering html files
    // res.json({ name: 'bangladesh'}) // for auto format into json data
    // res.status(200); // must write end code
    // res.end();
    // res.format({
    //     'text/plain': () => {
    //         res.send('hi');
    //     },
    //     'text/html': () => {
    //         res.render('index',{
    //             name: 'Bangladesh'
    //         });
    //     },
    //     'application/json': () => {
    //         res.json('index',{
    //             message: 'about'
    //         });
    //     },
    //     default: ()=> {
    //         res.status(406).send('Not Acceptable');
    //     }
    // }) // in metadata(Headers) change Accept value
    // res.sendStatus(400); // send + end
    // res.cookie('name','ab');
    // res.end();
    // res.location('/test');
    // res.end();
    res.set('Platform','Learn snck')
    res.redirect('/test');
    res.end();
}).put((req,res)=>{
    res.send('put method')
}).post((req,res)=>{
    res.send('post method')
}).delete((req,res)=>{
    res.send('delete method')
})

app.listen(3000,()=>{
    console.log('listening to port 3000')
})