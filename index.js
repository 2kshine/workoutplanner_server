//environment variables
require("dotenv").config();

//importing required modules
const express = require("express");
const mongoose = require("mongoose");
const workoutVideoRoutes = require('./routes/workoutVideoRoutes');

//express application
const app = express();

//Port mapping
const PORT = process.env.PORT;

//middlewares
app.use((req, res, next) =>{
    console.log(req.path, req.method);
    next();
})
app.use(express.json());

//Routes
app.use('/api/v1/workoutVideos/', workoutVideoRoutes)

//connecting to the database
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("successfully connected to the database");
    //Run server to receive request at port:PORT
    app.listen(PORT, () => {
      console.log(`listening at PORT ${PORT}`);
    });
  })
  .catch((e) => {
    console.log(e);
  });
