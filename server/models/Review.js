const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reviewShema = new Schema(
  {
    review: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.model("Review", reviewShema);

module.exports = Review;
