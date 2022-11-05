//importing required modules
const express = require("express");
const workoutVideoController = require("../controllers/workoutVideoController");

//middleware protect to protect from unauthorized users.
const protect = require("../middleware/authMiddleware");

//Creating express route
const router = express.Router();

//middleware runs before controller
router
  .route("/")
  .post(protect, workoutVideoController.uploadWorkoutVideos)
  .get(workoutVideoController.getAllWorkoutVideos);

router
  .route("/:id")
  .get(workoutVideoController.getSingleWorkoutVideo)
  .delete(protect, workoutVideoController.deleteWorkoutVideos)
  .patch(protect, workoutVideoController.updateWorkoutVideos);

module.exports = router;
