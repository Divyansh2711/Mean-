const express=require('express');

const app=express();

const bodyparser=require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended:false }))

const encrypt=require('bcrypt');


const RegisterModel=require('C:\\Users\\thede\\CogniFiesta\\src\\backend\\model\\RegisterModel.js');

const moongoose=require('mongoose');
moongoose.connect
('mongodb+srv://dk:8210127675@cluster0.ej4by.mongodb.net/Botanicadatabase?retryWrites=true&w=majority')
.then(()=>{
    console.log('Connected to Database');
})
.catch(()=>{
    console.log('Error');
});

const cors = require('cors');
app.use(cors())

app.use((requset,response,next)=>{
    response.setHeader('Access-Control-Allow-Origin', "*");
    response.setHeader("Access-Control-Allow-Credentials", "true");
    response.setHeader("Access-Control-Max-Age", "1800");
    response.setHeader("Access-Control-Allow-Headers", "content-type"); 
    response.setHeader('Access-Control-Allow-Methods',"GET,POST,OPTIONS,DELETE,PUT");
    next();
})


app.post('/register',(request,response,next)=>{

    encrypt.hash(request.body.password,10).then(hash=>{

        const user=new RegisterModel({
            name:request.body.name,
            email:request.body.email,
            collegeName:request.body.collegeName,
            dob:request.body.dob,
            gender:request.body.gender,
            mobile_no:request.body.mobile_no,
            password:hash
    });

    user.save();

    response.status(201).json({
        message:'User Registered Successfully',
        user:user
       });
    })
});



module.exports=app;