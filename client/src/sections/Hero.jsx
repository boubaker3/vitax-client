import { arrowRight } from "../assets/icons";
import Button from "../components/Button";
import {featuredProduct, statistics, featuredProducts } from "../constants";
import { featuredProduct1 } from "../assets/images";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import { Link  } from "react-router-dom";
import "../App.css"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const Hero = () => {
  const [mainProduct, setMainProduct] = useState(featuredProduct1);
 
  const pid = featuredProduct.pid

  return (
    <section
      id="home"
      className="w-full mx-auto max-w-[1440px] gap-10 flex flex-col xl:flex-row min-h-screen"
    >
      <div className="w-full xl:w-2/5 pt-28 flex flex-col justify-center max-sm:px-8  max-xl:px-16">
        <p className="text-primary text-xl font-montserrat">
          Our Unique collections
        </p>
        <h1 className="mt-8 font-palanquin max-sm:text-7xl max-sm:leading-tight text-8xl z-10 font-bold leading-[1.2]">
          <span className="xl:whitespace-nowrap xl:bg-white pr-10">
            The New Arrival
          </span>
        </h1>

        <h1 className="mt-8 font-palanquin max-sm:text-7xl max-sm:leading-tight text-7xl   font-bold leading-[1.2]">
             
          <span className="text-primary">Vitax</span> products
        </h1>
        <p className="font-montserrat text-slate-600 text-lg leading-8 mt-6 mb-14 max-w-sm">
          Discover stylish Vitax arrivals, quality comfort, and innovation for
          your active life.
        </p>
     <Link to={`/product?pid=${pid}`} >
        <Button label="Shop now"
         iconUrl={<ChevronRightIcon sx={{color:"primary.main",bgcolor:"white",borderRadius:"100%",width:32,height:32}}/>}  />
        </Link>
        <div className="flex flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-5xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 xl:min-h-screen max-xl:py-40 flex relative justify-center items-center bg-blue-200 
      bg-hero bg-cover bg-center">
        <img
          className="item object-contain"
          src={mainProduct}
          alt="shiw collection"
          width={510}
          height={400}
        />
        <div className="absolute -bottom-[5%] max-sm:px-6 sm:left-[10%] flex gap-4 rounedd-md">
          {featuredProducts.map((featuredProduct, index) => (
            <ProductCard
            
            featuredProduct={featuredProduct}
              mainProduct={mainProduct}
              setMainProduct={setMainProduct}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
