import { star } from "../assets/icons";

const CustomerCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-col items-center space-y-3">
      <img
        src={imgURL}
        alt={customerName}
        width={120}
        height={120}
        className="object-contain rounded-full"
      />
      <p
        className="text-slate-500 text-center 
      font-montserrat max-w-md text-lg pt-1"
      >
        {feedback}
      </p>
      <div className="flex gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="text-lg leading-normal font-montserrat text-slate-600">
          ({rating})
        </p>
      </div>
      <h3 className="text-2xl font-semibold font-palanquin">
        {customerName}
      </h3>
    </div>
  );
};

export default CustomerCard;
