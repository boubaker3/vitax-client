import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";

const Services = () => {
  
   
  return (
   <div id="services" >

    <h1 className="text-5xl font-bold text-center font-palanquin">
        We<span className="text-primary"> provide </span>you with
      </h1>
   <div  className="flex flex-wrap xl:flex-nowrap gap-10 max-w-[1440px] mx-auto mt-16">
   
        {services.map((service, index) => (
        <ServiceCard key={index}  {...service}   />
      ))}
    </div>
    </div>
  );
};

export default Services;
