import "../App.css"
const ProductCard = ({ featuredProduct, mainProduct, setMainProduct }) => {
  return (
    <div 
      onClick={() => setMainProduct(featuredProduct.featuredProduct)}
      className={`item border-2 cursor-pointer w-25 h-35 sm:w-40 sm:h-40 flex
     justify-center items-center
     ${mainProduct === featuredProduct.featuredProduct && "border-primary"}  p-4 bg-card
       bg-cover bg-center rounded-xl`}
    >
      <img
        src={featuredProduct.featuredProduct}
        alt="shoe preview"
        height={113}
        width={127}
        className="object-contain"
      />
    </div>
  );
};

export default ProductCard;
