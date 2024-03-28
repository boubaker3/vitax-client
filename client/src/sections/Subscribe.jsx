import Button from "../components/Button";
import axiosInstance from "../Axios";
import { useState } from "react";
 
const Subscribe = () => {
const [email,setEmail]=useState("");
const [loading, setLoading] = useState(false);
const subscribe= async()=>{
  setLoading(true);
  
      try {
        const response = await axiosInstance.post("subscribe", {
          email:email
        }); 
        setEmail("your are subscribed now!")
        setLoading(false);
      } catch (error) {
        setLoading(false);

      }
    
  }
  return (
    <form onSubmit={subscribe}>

    <div className="max-w-[1440px] mx-auto grid sm:grid-cols-[repeat(auto-fit,minmax(30rem,1fr))] gap-y-10 gap-x-16 justify-center items-center">
      <h1 className="sm:leading-normal text-4xl sm:text-5xl font-bold font-palanquin max-lg:text-center ">
        Sign Up for<span className="text-primary"> Updates </span>&
        Newsletter
      </h1>
      <div className="w-full border p-2 pl-4 items-center border-gray-700 rounded-full flex">
        <input
        value={email} onChange={e=>setEmail(e.target.value)}
          className="w-full h-full rounded-full outline-none"
          type="email"
          placeholder="subscribe@vitax.shop"
        />
      
           <button type="submit"
      className={`w-1/2   flex justify-center items-center 
                  gap-3 py-4  leading-none
                  text-sm md:text-lg  self-start rounded-full
                  cursor-pointer font-montserrat border bg-primary text-white  px-8`}
    >
      {loading?"Signing...":"Sign up"  }
    </button>
      </div>
    </div>
    </form>
  );
};

export default Subscribe;
