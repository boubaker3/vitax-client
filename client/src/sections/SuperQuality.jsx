import Button from "../components/Button";
import { vitaxVideo } from "../assets/images";

const SuperQuality = () => {
  return (
    <div  >
    <div className="max-w-[1440px] mx-auto flex gap-8 flex-col lg:flex-row">
      <div className="flex flex-col flex-1 justify-center"> 
        <h1 className="text-5xl font-bold font-palanquin lg:max-w-lg leading-[55px]">
      Why Choose  
<span className="text-primary">VitaX?</span> 
      </h1> <p className="text-slate-400 font-palanquin sm:max-w-lg py-8 text-xl">
      At VitaX, we're not just another beauty and wellness store—we're your ultimate partner
       in health and beauty. What sets us apart is our unwavering commitment to your beauty
        journey and our dedication to providing unparalleled quality, innovation, and service.
Our commitment to excellence ensures your satisfaction.


        </p>
        <p className="text-slate-400 font-palanquin sm:max-w-lg pb-8 text-xl">
          Our commitment to excellence ensures your satisfaction.
        </p>
      </div>
      <div className="flex-1 flex items-center justify-center">
      <video src={vitaxVideo} className="rounded-3xl" autoPlay loop muted />
        </div>
    </div>

    <div className="max-w-[1440px] mx-auto flex gap-8 flex-col lg:flex-row">
    
     
    
  </div>
  </div>
  );
};

export default SuperQuality;
