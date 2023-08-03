## Installation
Nodejs  
Postman  
nodemon  
yarn(optional)  

## Run
For staging - npm start  
For production - npm production  

## Task done
Created a token system  
4 operation - post , get , put , delete  
Created a general purpose token verification  
Control all route access by token verification  

## User
For post - http://localhost:3000/user  
{  
    "firstName" : "afnan" ,  
    "lastName" : "mumu" ,  
    "phone" : "01773046092" ,  
    "password" : "XXX" ,  
    "tosAgreement" : true  
}  

For get - http://localhost:3000/user?phone=01773046092  
Headers -> token = token_number  

For put - http://localhost:3000/user  
Headers -> token = token_number  
Phone number not mutable  
{  
    "firstName" : "afnan" ,  
    "lastName" : "alauddin" ,  
    "phone": "01773046092",  
    "password": "xxx"  
}  

For delete - http://localhost:3000/user?phone=01773046092  
Headers -> token = token_number  

## Token  
For post - http://localhost:3000/token  
{  
    "phone" : "01773046092" ,  
    "password" : "XXX"   
}  

For get - http://localhost:3000/token?id=token_number  

For put - http://localhost:3000/token  
{  
    "id": token_number ,  
    "extend": true  
}  

For delete - http://localhost:3000/token?id=token_number  

