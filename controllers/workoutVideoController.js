//importing models
const WorkoutVideo = require("../models/workoutVideoModel");

//Creating Get request Controller

// exports.getAllWorkoutVideos = async (req, res) => {
//     try{
//         const WorkoutVideo
//     }
// }

exports.uploadWorkoutVideos = async (req, res) => {
  try {
    const workoutVideo = await WorkoutVideo.create(req.body);
    res.status(200).json({
      status: "success",
      data: {WorkoutVideo},
    });
  } catch (e) {
    console.log(e)
    res.status(400).json({
      status: "failed",
    });
  }
};


