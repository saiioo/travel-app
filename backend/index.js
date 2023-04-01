const express = require("express") 
const bodyParser = require('body-parser')
const mongoose = require("mongoose") 
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoutes = require('./routes/user');




dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(userRoutes)






const PORT = process.env.PORT || 8080
// const uri = 'mongodb+srv://Manikanta:Manikanta@mern-app.kcsrx1t.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect('mongodb+srv://Manikanta:Manikanta@cluster0.l49y7uv.mongodb.net/?retryWrites=true&w=majority')
// {
//   useNewParser : true,
//   useUnifiedTopology : true
// }
.then(()=>{
  app.listen(PORT,()=>{`server is up and running at ${PORT}`})
})
.catch((error)=>{console.log(error)})