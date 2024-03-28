import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  featuredProduct1,
  featuredProduct2,
  featuredProduct3,
  customer1,
  customer2,
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#products", label: "Products" },
  { href: "/#services", label: "Services" },
  { href: "/#contact-us", label: "Contact Us" },
  { href: "/#reviews", label: "Reviews" },
];

export const featuredProducts = [
  {
    thumbnail: thumbnailShoe1,
    featuredProduct: featuredProduct1,
  },
  {
    thumbnail: thumbnailShoe2,
    featuredProduct: featuredProduct2,
  },
  {
    thumbnail: thumbnailShoe3,
    featuredProduct: featuredProduct3,
  },
];

export const featuredProduct = {
  image: featuredProduct1,
  name: "Self Cleaning Hair Brush",
  price: 25.96,
  pid: "1672467558920245248",
};

export const statistics = [
  { value: "10k+", label: "visitors" },
  { value: "1k+", label: "Orders" },
  { value: "2k+", label: "Customers" },
];

export const products = [
  {
    imgURL: product1,
    name: "Self Cleaning Hair Brush",
    pid: "1672467558920245248",
    price: 25.96,
  },
  {
    imgURL: product2,
    name: "Beauty Lifting Contouring Tool",
    pid: "1588104292874072064",
    price: 12.86,
  },
  {
    imgURL: product3,
    name: "Automatic Filling Pot Brush",
    pid: "1388312243199938560",
    price: 1.86,
  },
  {
    imgURL: product4,
    name: "Nails Dryer Lamp",
    pid: "E06A0A7E-D94E-4FD4-AD03-35292A956769",
    price: 14.88,
  },
  {
    imgURL: product5,
    name: "Shapewear Bodysuit",
    pid: "1701542297433165824",
    price: 14.06,
  },
  {
    imgURL: product6,
    name: "Electric Nail Clipper",
    pid: "1400332629169016832",
    price: 22.70,
  },
  {
    imgURL: product7,
    name: "Electric Foot File Grinder",
    pid: "414ED2E8-C9DB-4797-ABE0-8E111C0D3665",
    price: 21.54,
  },
  {
    imgURL: product8,
    name: "Crystal Hair Remover",
    pid: "1538839168443494400",
    price: 10.56,
  },
];


export const services = [
  {
    imgURL: truckFast,
    label: "Friendly Shipping Budget",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: products[0].name, link: "/#products" },
      { name: products[1].name, link: "/#products" },
      { name: products[2].name, link: "/#products" },
      { name: products[3].name, link: "/#products" },

    ],
  },
  {
    title: "Help",
    links: [
      { name: "Services", link: "/#services" },
      { name: "Our products", link: "/#products" },
      { name: "Reviews", link: "/#reviews" },
      { name: "Contact us", link: "/#contact-us" },
      { name: "Privacy policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "vitaxshop@gmail.com", link: "mailto:vitaxshop@gmail.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
