import express from 'express'; 
import bodyParser from 'body-parser'; 
import mongoose from 'mongoose'; 
import cors from 'cors'; 
import postRoutes from './ROUTES/Posts.js';


const app = express(); 
app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true})); 
app.use(cors());  
app.use('/posts', postRoutes);

//connect mongodb atlas cloud
const CONNECT_URL = 'mongodb+srv://memories:memories+123@realmcluster.iemom.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000; 

mongoose.connect(CONNECT_URL , {useNewUrlParser: true , useUnifiedTopology: true}) 
    .then(()=>app.listen(PORT , ()=>console.log(`server is running on port ${PORT}`))) 
    .catch((error)=> console.log(error.message)) ; 
mongoose.set('useFindAndModify', false) //so we don't get warnings in console!