//importing required modules
const express = require("express");
const workoutVideoController = require("../controllers/workoutVideoController");

//Creating express route
const router = express.Router();

router.route("/").post(workoutVideoController.uploadWorkoutVideos);

module.exports = router;
