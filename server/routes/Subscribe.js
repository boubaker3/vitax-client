const express = require("express");
const router = express.Router();
const NewsLetter = require("../models/NewsLetter");

 

router.route("/subscribe").post( async (req, res) => {
  const { email } = req.body;

 
      const newsLetter = new NewsLetter({ email });
      newsLetter
        .save()
        .then(() => {
          res.json({ res: "subscribed!" });
        })
        .catch((error) => {
          res.status(400).json({ error });
        });
    })
 
 
 
module.exports = router;
