const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Review = require("../models/Review");

router.route("/reviews").get(async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 4;

    const skip = (page - 1) * limit;

    const reviews = await Review.find({})
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 })
      .exec();

    res.json(reviews);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.route("/addReview").post(async (req, res) => {
  const { review, rating } = req.body;

  // Define the review limit and timeframe (e.g., 1 review per day)
  const reviewLimit = 1;
  const reviewTimeframe = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

  // Calculate the start time of the review timeframe
  const startTime = new Date(Date.now() - reviewTimeframe);

  // Check the user's review activity within the timeframe
  Review.countDocuments({ review, rating, createdAt: { $gte: startTime } })
    .then((userReviewCount) => {
      if (userReviewCount >= reviewLimit) {
        return res.json({ res: "Review limit is one review per day" });
      }

      const newReview = new Review({ review, rating });
      newReview
        .save()
        .then(() => {
          res.json({ res: "review added successfully" });
        })
        .catch((error) => {
          res.status(400).json({ error });
        });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
});

module.exports = router;
