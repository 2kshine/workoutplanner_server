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
      data: { WorkoutVideo },
    });
  } catch (e) {
    console.log(e);
    res.status(400).json({
      status: "failed",
    });
  }
};

exports.getAllWorkoutVideos = async (req, res) => {
  try {
    const workoutVideos = await WorkoutVideo.find();
    res.status(200).json({
      status: "success",
      data: {
        workoutVideos,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "failed",
    });
  }
};

exports.deleteWorkoutVideos = async (req, res) => {
  try {
    const workoutVideos = await WorkoutVideo.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
    });
  } catch (e) {
    res.status(400).json({
      status: "failed",
    });
  }
};

exports.updateWorkoutVideos = async (req, res) => {
  try {
    const workoutVideos = await WorkoutVideo.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json({
      status: "success",
      data: {
        workoutVideos,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "failed",
    });
  }
};

exports.getSingleWorkoutVideo = async (req, res) => {
  try {
    const workoutVideo = await WorkoutVideo.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        workoutVideo,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "failed",
    });
  }
};

