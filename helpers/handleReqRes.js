/*
 * Title: Handle Request Response
 * Description: Handle Resquest and response
 * Author: mumu
 * Date: 11/15/2020
 *
 */

// dependencies
const routes = require('../routes');
const { notFoundHandler } = require('../handlers/routeHandlers/notFoundHandler');
const url = require('url');
const {StringDecoder} = require('string_decoder') //here StringDecoder is a class
const { parseJSON } = require('./utilities');


// module scaffolding
const handler = {}

handler.handleReqRes = (req, res) => {
    //request handle
    // get the url and parse it
    const parseurl = url.parse(req.url, true)
    const path = parseurl.pathname
    const trimpath =   path.replace(/^\/+|\/+$/g,'') // removes assigned vairable valjues ?a=7&b=4
    const method = req.method.toLowerCase() // get post 
    const querystringobject = parseurl.query; // full url link
    const headersobject = req.headers; // returns metadata
    const decoder = new StringDecoder('utf-8');
    let realdata = ''

    const requestProperties = {
        parseurl,
        path,
        trimpath,
        method,
        querystringobject,
        headersobject,
    };

    // check route is valid
    const chosenHandler = routes[trimpath] ? routes[trimpath] : notFoundHandler;

    req.on(
        'data',
        (buffer) => {
            realdata += decoder.write(buffer)
        }
    )
    req.on(
        'end',
        () => {
            realdata += decoder.end() 
            requestProperties.body = parseJSON(realdata); // adding body property of json format

            chosenHandler(requestProperties, (statusCode, payload) => {
                statusCode = typeof statusCode === 'number' ? statusCode : 500;
                payload = typeof payload === 'object' ? payload : {};
                const payloadString = JSON.stringify(payload);
                // return the final response
                res.setHeader('Content-Type', 'application/json');
                res.writeHead(statusCode);
                res.end(payloadString);
            });
        }
    )
};

module.exports = handler ; 