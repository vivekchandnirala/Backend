const connectDB=require('./connect');
const connectionString='mongodb+srv://amanjyotkaur736:2F1FB7QquotKm3ew@cluster0.arkuaia.mongodb.net/User-Data?retryWrites=true&w=majority&appName=Cluster0';
const port=4000;

const {loginModel,signUpModel}=require('./model');

const express = require('express');
const app =express();
app.use(express.static('../game'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));



app.post('/sign-in',async (req,res)=>{
    // console.log(req.body);
    // res.send(`Hi, your credentials saved successfully.`);
    try {
        // const u=req.body.user;
        // const pass=req.body.password;
        // const tmp={
        //     user:u,
        //     password:pass

        // }
        const data=await loginModel.create(req.body);
        return res.status(201).send("Data saved successfully.");
    } catch (error) {
        return res.status(500).send(error);
    }
})

app.post('/sign-up',async (req,res)=>{
    // console.log(req.body);
    // res.send(`Hi, your credentials saved successfully.`);
    try {
        const data=await signUpModel.create(req.body);
        return res.status(201).send("Data saved successfully.");
    } catch (error) {
        return res.status(500).send(error);
    }
})


const start=async ()=>{
    try {
        await connectDB(connectionString).then(()=>{
            console.log('Connected To Db.');
        });
        app.listen(port,()=>{
            console.log('Server is running.');
        })
    } catch (error) {
        console.log(error);
    }
}
start();