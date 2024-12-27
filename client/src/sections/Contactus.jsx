import React, { useState } from "react";
import axiosInstance from "../Axios";

const Contactus = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [res, setRes] = useState("");

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const submitContact = async (e) => {
    e.preventDefault();
    if (formData.fullname.length < 4 || formData.fullname.length > 24) {
      setError("fullname must be between 4 and 12 characters.");
      return;
    }

    if (formData.email.length < 10 || formData.email.length > 254) {
      setError("Email must be between 10 and 254 characters.");
      return;
    }

    if (formData.phone.length < 4 || formData.phone.length > 15) {
      setError("phone must be between 4 and 15 characters.");
      return;
    }

    if (formData.message.length < 4 || formData.message.length > 1000) {
      setError("message must be between 4 and 1000 characters.");
      return;
    }
    setLoading(true);
    
    try {
      const response = await axiosInstance.post("addContact", {
        fullname: formData.fullname,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      });
  
      setLoading(false);
      setRes(response.data.res);
    } catch (error) {
      console.error("Failed to add a contact:", error);
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setRes("Message sent successfully!");
    }, 2000);
     
  };
    
  
  return (
    <section id="contact-us" className="w-full mx-auto">
      <h1 className="text-5xl font-bold text-center font-palanquin">
        Feel free to<span className="text-primary"> Contact </span>us?
      </h1>
      <p className="text-slate-500 block mx-auto text-center font-montserrat max-w-lg pt-6 text-lg info-text">
        we will get back to you soon as we can.
      </p>
      <form onSubmit={submitContact} className="mt-4 flex flex-col items-center">
        <div className="w-full mb-4 flex flex-col lg:flex-row  items-center justify-center">
          <input
            onChange={handleChange}
            name="fullname"
            placeholder="Full Name"
            type="text"
            value={formData.fullname}
            className="w-full md:w-1/4 mb-4 lg:mr-4 pt-3 pb-3 pr-8 pl-8 outline-none rounded-lg text-lg " // Adjust padding and font size here
          />
          <input
            onChange={handleChange}
            name="email"
            placeholder="Email Address"
            type="text"
            value={formData.email}
            className="w-full md:w-1/4 mb-4 lg:ml-0 lg:mr-4 pt-3 pb-3 pr-8 pl-8 outline-none rounded-lg text-lg" // Adjust padding and font size here
          />
     
     <input
            onChange={handleChange}
            name="phone"
            placeholder="Phone Number"
            type="text"
            value={formData.phone}
            className="w-full md:w-1/4 mb-4 lg:mr-4 pt-1 pb-1 pr-8 pl-8 outline-none rounded-lg text-lg" // Adjust padding and font size here
          />
     
        </div>
        <div className="w-full md:w-1/2 h-32 flex flex-col lg:flex-row">
          
          <input
            onChange={handleChange}
            name="message"
            placeholder="Message"
            type="text"
            value={formData.message}
            className=" mb-4 lg:ml-0 lg:mr-4 pt-4 pb-4 pr-8 pl-8 outline-none rounded-lg text-lg w-full" // Adjust padding and font size here
            multiple
          />
        </div>
        <button
          type="submit"
          className="w-full md:w-1/5 text-white mt-4 bg-primary px-6 py-2 rounded-3xl text-lg " // Adjust padding and font size here
        >
          {loading ? "Sending..." : "Send it"}
        </button>
        {error && <p className="text-primary mt-2">{error}</p>}
        {res && <p className="text-primary mt-2">{res}</p>}
      </form>
    </section>
  );
};

export default Contactus;
