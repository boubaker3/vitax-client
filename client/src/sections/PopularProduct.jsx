import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";
import { useEffect,useState } from "react";
import { getProducts } from "../components/productApi";
const PopularProduct = () => { 
  const getPids=async()=>{
   //  const res= await getProducts()
    // console.log(res)

  }
useEffect(()=>{
  getPids()
},[])
  return (
    <section id="products" className="max-w-[1440px] mx-auto">
      <h1 className="text-5xl font-bold font-palanquin">
        Our <span className="text-primary">Popular</span> Products
      </h1>
      <p className="text-slate-600 sm:max-w-lg py-8">
        Experience top-notch quality and style with our sought-after selections.
        Discover a world of comfort, design, and value
      </p>
      <div className=" grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 ">
        {products.map((product, index) => (
          <PopularProductCard product={product} key={index} />
        ))}
      </div>
    </section>
  );
};

export default PopularProduct;
