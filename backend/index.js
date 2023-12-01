// server.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();



const cors = require("cors");
const apirouting = require("../backend/Routes/Apiroutes");


const PORT = process.env.PORT || 5000 ;

app.use(cors( {
        origin: ["https://deploy-mern-1whq.vercel.app"],
    methods : ["POST", "GET"],
    credentials : true
    })); 





// const URL = 'mongodb://127.0.0.1:27017/log_data'
const URL = 'mongodb+srv://user1:user1@edureka.ild8fi0.mongodb.net/log_data?retryWrites=true&w=majority'
app.use(express.json());   //converting the string json data to pure json data
app.use(express.urlencoded({extended:false})); // normal post data to json data
app.use("/",apirouting);
mongoose.connect(URL).then(()=>{
    app.listen(PORT,() => {
        // console.log("database connected"
        console.log("app is running ",PORT);
    });
}).catch((error)=>{
    console.log(error);
});

