const mongoose = require("mongoose");

const workoutVideoSchema = mongoose.Schema({
  title: {
    type: String,

    required: [true, "Title of the workout video is required"],
  },
  workoutCategory: {
    type: String,
    required: [true, "Workout Category is required"],
  },
  votes: {
    type: [Object],
    upvotes: {
      type: Number,
    },
    downvotes: {
      type: Number,
    },
  },
  workoutDescription: {
    type: String,
    required: [true, "Workout Description is required"],
  },
  youtubeVideoLink: {
    type: String,
    validate: {
      validator: (v) => {
        return /^https:\/\/www.youtube.com\/|youtu.be\/.*$/.test(v);

      },
      message: (message) => `${message.value} is not a valid youtube link.`,
    },
    required: [true, "Youtube video link is required."],
  }
},{timestamps: true,});

const WorkoutVideo = mongoose.model('WorkoutVideo', workoutVideoSchema)
module.exports = WorkoutVideo;