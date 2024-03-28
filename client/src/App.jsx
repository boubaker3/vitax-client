import {
  Hero,
  PopularProduct,
  SuperQuality,
  Services,
  Contactus,
  CustomerReviews,
  Subscribe,
  Footer,
  HowItWorks,
} from "./sections";
import {getAccessToken,getRefreshToken} from "./components/cjAuth/ApiAuth"
import Nav from "./components/Nav";
import { useEffect } from "react";
import "./App.css"
import { Route, Routes } from 'react-router-dom';
import Product from "./sections/Product";
import { Divider } from "@mui/material";
import { getProducts } from "./components/productApi";


function App() { 
  
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");
  useEffect(() => {
    const handleAccessToken = async () => {
      try {
        if (!accessToken) {
          await getAccessToken();
        } else {
          const accessTokenExpiration = new Date(
            localStorage.getItem("accessTokenExpiryDate")
          );
          const refreshTokenExpiration = new Date(
            localStorage.getItem("accessTokenExpiryDate")
          );

          if (accessTokenExpiration > new Date()) {
            if (refreshTokenExpiration > new Date()) {
              await getAccessToken();
            } else {
              await getRefreshToken(refreshToken);
            }
          }
        }
      } catch (error) {
        console.error("Error while getting access token:");
      }
    };
    console.log(accessToken);
    handleAccessToken();
  }, [accessToken, refreshToken]);
  return (
    <main className="relative">
          <Nav />
       <Routes>
        <Route exact path="/" element={<>
      <section  className="section xl:px-16 xl:max-wide:pr-0 pb-12 sm:pb-24">
        <Hero />
      </section>
      <section className="section px-8 py-12 sm:px-16 sm:py-24">
        <PopularProduct />
      </section>
     
      <section className="px-16 py-24 md:px-12 md:py-12">
        <Services />
      </section>
      <section className="px-8 py-12 sm:px-16 sm:py-24">
        <SuperQuality />
      </section>
      <section className="px-8 py-12 sm:px-16 sm:py-24">
        <HowItWorks />
      </section>
    
      <section className="bg-[rgb(245_246_255)] px-8 py-12 sm:px-16 sm:py-24">
        <Contactus />
      </section>
      <Divider sx={{height:"2px",bgcolor:"gray",opacity:0.3}}/>
      <section className="bg-[rgb(245_246_255)] px-8 py-12 sm:px-16 sm:py-24">
        <CustomerReviews />
      </section>
      
      
      <section className="px-8 py-16 sm:px-16 sm:py-32">
        <Subscribe />
      </section>
        </>} />
        <Route path="/product" element={<>
          <section className="bg-[rgb(245_246_255)] px-8 py-16 sm:px-16 sm:py-32">
        <Product/>
      </section>
        </>} />
      </Routes>
     
      <section className="bg-black px-8 pt-12 sm:px-16 sm:pt-24">
        <Footer />
      </section>
    </main>
  );
}

export default App;
