import { reviews } from "../constants";
import CustomerCard from "../components/CustomerCard";
import { Button, Grid, Input, Rating, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axiosInstance from "../Axios";

const CustomerReviews = () => {

  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
useEffect(()=>{console.log(loading)},[])
  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleShareReview = async () => {
    setLoading(true)
      if (review.length < 4 || review.length > 300) {
        setError("review must be between 4 and 300 chars");
        return;
      } else if (rating === 0) {
        setError("rating is required");
        return;
      }
      const response = await addReview({
        review: review,
        rating: rating,
      });

      if (response) {
        setReview("");
        setRating(0);
        setLoading(false)
      }
  };
   const addReview = async ({ username, review, rating, userid }) => {
    try {
      const response = await axiosInstance.post("addReview", {
        review,
        rating,
      });
  
      return response.data;
    } catch (error) {
      console.error("Failed to add a review:", error);
    }
  };
  return (
    <section id="reviews" className="max-w-[1440px] mx-auto">
      <h1 className="text-5xl font-bold text-center font-palanquin">
        What Our<span className="text-primary"> Customers </span>Say?
      </h1>
      <p
        className="text-slate-500 block mx-auto text-center 
      font-montserrat max-w-lg pt-6 text-lg info-text"
      >
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="flex gap-14 flex-wrap justify-evenly mt-24">
        {reviews.map((review, index) => (
          <CustomerCard {...review} key={index} />
        ))}
      </div>
     
      <Grid container justifyContent="center" mt={6}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            backgroundColor: "#FFF",
            borderRadius: "32px",
            display: "flex",
            mt: 2,
            p: 4,
          }}
        >
          <Input
            multiline
            fullWidth
            disableUnderline
            placeholder="Write your review here..."
            value={review}
            onChange={handleReviewChange}
          />
          <Rating
            sx={{ fontSize: { xs: "32px", md: "32px", xl: "48px" } }}
            name="rating"
            value={rating}
            precision={1}
            defaultValue={3}
            onChange={(event, newValue) => {
              handleRatingChange(newValue);
            }}
          />
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="center">
           
          <button
           onClick={() => { 
            handleShareReview(); 
        }}
          className="w-full md:w-1/5 text-white mt-4 bg-primary px-6 py-2 rounded-3xl text-lg " // Adjust padding and font size here
        >
          {loading ? "Sending..." : "Send it"}
        </button>
        </Grid>
        </Grid>
    </section>
  );
};

export default CustomerReviews;
