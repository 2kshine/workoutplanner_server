//importing required modules
const express = require("express");
const workoutVideoController = require("../controllers/workoutVideoController");

//Creating express route
const router = express.Router();

router
  .route("/")
  .post(workoutVideoController.uploadWorkoutVideos)
  .get(workoutVideoController.getAllWorkoutVideos);

router
  .route("/:id")
  .get(workoutVideoController.getSingleWorkoutVideo)
  .delete(workoutVideoController.deleteWorkoutVideos)
  .patch(workoutVideoController.updateWorkoutVideos);

module.exports = router;
