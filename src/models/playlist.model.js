const mongoose = require("mongoose");

// Schema
const playlistSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Username is required"],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    videos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    isPublic: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Compile Schema to form a model
const Playlist = mongoose.model("Playlist", playlistSchema);

module.exports = Playlist;
