import { star } from "../assets/icons";
import "../App.css"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";

const PopularProductCard = (props) => {
  const markupPercentage = 70;
  const markupFactor = 1 + markupPercentage / 100;
  const [productPrice, setProductPrice] = useState(0);
  useEffect(()=> {

    const updatedPrice = (props.product.price * markupFactor).toFixed(2); // Format to 2 decimal places
      setProductPrice(updatedPrice);
  },[])
  
  return (
   <Link to={`/product?pid=${props.product.pid}`}>
   <div>
      <Avatar
        src={props.product.imgURL}
        alt="shoe preview"
        sx={{width:{xs:"280px",md:"200px",xl:"280px"},height:{xs:"280px",md:"200px",xl:"280px"},objectFit:"cover",borderRadius:"32px"}}
        className="item"
      />
      <div className="flex gap-2.5 mt-8">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="text-lg leading-normal font-montserrat text-slate-600">
          (4.5)
        </p>
      </div>
      <h3 className="text-xl font-semibold font-palanquin mt-2">{props.product.name}</h3>
      <p className="text-xl font-semibold font-montserrat mt-2 text-primary leading-normal">
        {productPrice}$
      </p>
    </div>
    </Link> 
  );
};

export default PopularProductCard;
