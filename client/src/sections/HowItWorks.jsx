import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef } from "react";
import { howitworksData } from "./data/howitworksData";

const HowItWorks = () => {
  const cardRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust the threshold as needed
    };

    const revealOnScroll = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(revealOnScroll, observerOptions);

    cardRef.current.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Grid container spacing={4} columnGap={4} justifyContent="center" >
       <h1 className="text-5xl font-bold text-center font-palanquin">
        How<span className="text-primary"> it works? </span>
      </h1>
      <Grid item xs={12} sx={{ display: { md: "flex" }, justifyContent: "center" }}>
        {howitworksData.map((hiwd, index) => (
          <Card
            key={index}
            ref={(el) => (cardRef.current[index] = el)}
            className="Card"
            sx={{
              width: { xs: "300px", sm: "300px",md:"250px",xl:"300px" },
              height: "400px",
              boxShadow: "rgba(149, 157, 165, 0.5) 0px 8px 24px",
              borderRadius: "38px",
              marginBottom: "50px",
              margin: "50px auto",
              justifyContent: "center",
              alignItems: "center",
              opacity: 0,
              transform: "translateY(20px)",
              transition: "opacity 0.5s, transform 0.5s",
              "&.visible": {
                opacity: 1,
                transform: "translateY(0)",
              },
            }}
          >
            <Grid
              container
              justifyContent="center"
              sx={{
                height: "350px",
                p: 2,
                backgroundColor: "white",
                color: "black",
                textAlign: "center",
                borderRadius: "24px",
              }}
            >
              <Box>
                <Avatar
                  src={hiwd.image}
                  sx={{
                    borderRadius: "0",
                    width: " 150px",
                    height: "auto",
                    margin: "0 auto",
                  }}
                ></Avatar>
  <h2 className="text-2xl font-bold font-palanquin  leading-normal">
  {hiwd.title}
      </h2>
      <p className="text-slate-500 font-palanquin sm:max-w-lg  text-lg md:text-md xl-text-lg mt-2">
      {hiwd.description}
      </p>
               
              </Box>
            </Grid>
          </Card>
        ))}
      </Grid>
    </Grid>
  );
};

export default HowItWorks;
