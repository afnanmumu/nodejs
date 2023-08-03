/*
 * Title: Uptime Monitoring Application
 * Description: A RESTFul API to monitor up or down time of user defined links
 * Author: mumu
 * Date: 11/09/23
 *
 */

// dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes')
const environment = require('./helpers/environments')
// const data = require('./lib/data')

// app object - module scaffolding
const app = {};

// configuration
app.config = {
    port: 3000,
};

// // testing purpose
// data.create('test', 'newfile' , {'name':'mumu','country': 'Bangladesh'} , (err)=>{console.log('error was ' , err)} )
// data.read('test', 'newfile'  , (err,data)=>{console.log( err , data )} )
// data.update('test', 'newfile' , {'name':'mm','country': 'Bangladesh'} , (err)=>{console.log( err )} )
// data.delete('test', 'newfile' , (err)=>{console.log( err )} )

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environment.port, () => {
        console.log(`listening to port ${environment.port}`);
    });
};

app.handleReqRes = handleReqRes;

app.createServer();
