import { footerLogo } from "../assets/images";
import { socialMedia, footerLinks } from "../constants";
import { copyrightSign } from "../assets/icons";

const Footer = () => {
  return (
    <footer className="text-white max-w-[1440px] mx-auto">
      <div className="flex flex-col lg:flex-row justify-between gap-20">
        <div className="space-y-7">
          <a href="/">
            <img src={footerLogo} alt="footer logo" width={150} />
          </a>
          <p className="max-w-sm text-lg text-gray-300">
          Prepare for the new health care & beauty journey at your nearest health and wellness store. Discover Your Ideal Store. 
          </p>
          <div className="flex gap-4 pt-2">
            {socialMedia.map(({ src, alt }, index) => (
              <div className="bg-white rounded-full p-2" key={index}>
                <img src={src} alt={alt} width={30} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-14 justify-between flex-1">
          {footerLinks.map(({ title, links }, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold font-montserrat mb-5">
                {title}
              </h3>
              <div className="flex flex-col space-y-2 text-gray-300">
                {links.map(({ name, link }, index) => (
                  <a className="text-lg font-palanquin" key={index} href={link}>
                    {name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex sm:justify-between items-center flex-col sm:flex-row pt-20 pb-8">
        <div className="flex gap-2">
          <img src={copyrightSign} alt="" />
          <span className="text-lg text-gray-300">
            Copyright. All rights reserved.
          </span>
        </div>
        <a className="text-lg text-gray-300" href="/">Terms & Conditions</a>
      </div>
    </footer>
  );
};

export default Footer;
