import "../App.css"
const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div
      className="item p-8 shadow-[0_10px_40px_rgba(0,0,0,0.1)] rounded-xl flex-1
                    space-y-3 py-16 max-xl:min-w-[350px] max-sm:min-w-[300px]"
    >
      <div className="bg-primary rounded-full flex justify-center items-center w-11 h-11">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h2 className="text-3xl font-bold font-palanquin  leading-normal">
        {label}
      </h2>
      <p className="text-slate-400 font-palanquin sm:max-w-lg  text-xl">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
