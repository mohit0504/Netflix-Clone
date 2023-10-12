const express = require('express');
const dotenv = require('dotenv').config()
const cros = require('cors')
const {mongoose} = require('mongoose')
const app = express();
const cookieParser = require('cookie-parser')

//database connected
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("Database Connected"))
.catch((err) => console.log("Database not connected",err))

app.use(cors({
    origin:["https//deploy-mern-1whq.vercel.app"],
    method: ["POST", "GET"],
    credentials : true,
}));

mongoose.connect('mongodb+srv://mohitkumargupta0504:dzMOZ22wpgvxZ1qA@cluster0.tbhiy5k.mongodb.net/?retryWrites=true&w=majority')


//midleware
app.use(express.json())
app.use(cookieParser());
app.use(express.urlencoded({extended:false}))


app.use('/', require('./routes/authRoutes'))

const port = 8000;
app.listen(port, () => console.log(`server is running on port ${port}`))