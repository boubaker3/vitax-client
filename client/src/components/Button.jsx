 const Button = ({ label, iconUrl, customClass }) => {
  console.log(customClass?.border);
  return (
    <div 
    style={{
      transition: "box-shadow 0.3s ease", // Smooth transition
      boxShadow: "0 0px 32px 4px transparent", // Initial shadow (transparent)
    }}
    onMouseEnter={(event) => {
      event.target.style.boxShadow = "0 4px 32px 4px #ff0048"; // Shadow on hover
    }}
    onMouseLeave={(event) => {
      event.target.style.boxShadow = "0 4px 32px 4px transparent"; // Reset on hover out
    }}
      className={`w-1/2 flex justify-center items-center 
                  gap-3 py-4 leading-none 
                  text-sm md:text-lg  self-start rounded-full
                  cursor-pointer font-montserrat border
                  ${customClass?.bgColor ? customClass?.bgColor : "bg-primary"} 
                  ${customClass?.textColor ? customClass?.textColor : "text-white"} 
                  ${customClass?.border ? customClass?.border : " border-primary"}
                  ${customClass?.paddingX ? customClass?.paddingX : "px-8"}
                  ${customClass?.whiteSpaceNoWrap && customClass?.whiteSpaceNoWrap}`}
    >
      {label} {iconUrl && iconUrl}
    </div>
  );
};

export default Button;
