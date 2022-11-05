//environment variables
require("dotenv").config();

//importing required modules
const express = require("express");
const mongoose = require("mongoose");
const workoutVideoRoutes = require("./routes/workoutVideoRoutes");
const userRouter = require("./routes/userRoutes");
const session = require("express-session");
const redis = require("redis");
let RedisStore = require("connect-redis")(session);

//wiring up redis session
let redisClient = redis.createClient({
  host: process.env.REDIS_URL,
  port: process.env.REDIS_PORT,
});

//express applicationd
const app = express();

//Port mapping
const PORT = process.env.PORT;

//middlewares
app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    secret: process.env.SESSION_SECRET,
    cookie: {
      secure: false,
      resave:false,
      saveUninitialized:false,
      httpOnly: true,
      maxAge: 30000,
    },
  })
);
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use(express.json());

//Routes
app.use("/api/v1/workoutVideos/", workoutVideoRoutes);
app.use("/api/v1/users/", userRouter);

//connecting to the database and starting server
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
