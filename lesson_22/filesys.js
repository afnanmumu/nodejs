const express = require('express')
const multer = require('multer')
const app = express()

const up_folder = "./upload"

var upload = multer({
    dest: up_folder,
    limits: {
        fileSize: 1000000, // 1mb
    },
    fileFilter: (req,file,cb)=>{
        if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png'){
            cb(null,true);
        }
        else{
            // cb(null,false);
            cb(new Error('Only jpg , jpeg , png files allowed! ')); // x
        }
        console.log(file)
    }
})

//application route 
// app.post('/', upload.none() ,(req,res)=>{
//     res.send('File Uploaded successfully');
// }) // for form upload 

// app.post('/', upload.single('avatar') ,(req,res)=>{
//     res.send('File Uploaded successfully');
// }) // for single file upload
 
// app.post('/', upload.array('avatar',3) ,(req,res)=>{
//     res.send('File Uploaded successfully');
// }) // for multiple file upload

app.post('/', upload.fields([
    { name: "avatar", maxCount: 1},
    // { name: "gallery", maxCount: 3},
]) ,(req,res)=>{
    res.send('File Uploaded successfully');
}) // for multiple file upload

// customize error handler
app.use((err,req,res,next)=>{
    if(err){
        if(err instanceof multer.MulterError){
            res.status(500).send('There was an upload error! '); // only for multer specific error 
        }else{
            res.status(500).send(err.message); // prints x
        }
    }
    else{
        res.send('Success')
    }
})

app.listen(3000,()=>{
    console.log('listening to port 3000');
})