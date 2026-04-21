"use client";

import { useState } from "react";
import {
  allProduct,
  products,
  whyChooseUs,
  whyBuyersChoose,
  faqs,
} from "@/data";
import {
  BookCheck,
  ChevronDown,
  IndianRupee,
  Package,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Grid2X2,
  ChevronRight,
  Mail,
  Quote,
} from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us/" },
  { label: "Our Products", href: "/our-products/" },
  { label: "Blog", href: "/blog/" },
  { label: "Career", href: "/career/" },
  { label: "Contact Us", href: "/contact-us/" },
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Terms & Conditions", href: "/terms-and-conditions/" },
  { label: "Shipping Policy", href: "/shipping-policy/" },
  { label: "Return & Refund Policy", href: "/return-refund-policy/" },
];
 
const productLinks = [
  { label: "Face Tissue", href: "/product-category/face-tissue/" },
  { label: "Paper Napkin", href: "/product-category/paper-napkin/" },
  { label: "Kitchen Towel", href: "/product-category/kitchen-towel/" },
  { label: "Toilet Roll", href: "/product-category/toilet-roll/" },
  { label: "Butter Paper", href: "/product-category/butter-paper/" },
  { label: "Cling Film", href: "/product-category/cling-film/" },
  { label: "Aluminium Foil", href: "/product-category/aluminium-foil/" },
];
 
const recentPhotos = [
  {src:"/recent/recent1.webp"},
  {src:"/recent/recent2.webp"},
  {src:"/recent/recent3.webp"},
  {src:"/recent/recent4.webp"},
  {src:"/recent/recent5.webp"},
  {src:"/recent/recent6.webp"},
];
 
const socials = [
];
 
const cities = [
  "Delhi", "Delhi NCR", "Gurgaon", "Faridabad", "Ghaziabad", "Noida",
  "Lucknow", "Varanasi", "Hyderabad", "Bengaluru", "Chennai", "Kolkata",
  "Surat", "Rajkot", "Jodhpur", "Jaipur", "Haridwar", "Panipat",
  "Sonipat", "Karnal", "Mohali", "Patiala", "Bahadurgarh", "Allahabad",
];
 
const bottomLinks = [
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Terms & Conditions", href: "/terms-and-conditions/" },
  { label: "Shipping Policy", href: "/shipping-policy/" },
  { label: "Return & Refund", href: "/return-refund-policy/" },
];
 

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div>
      {/* hero  */}
      <section className="bg-[#F2A99B] flex flex-col gap-1 items-center px-2 py-4 lg:py-6">
        <p className="font-bebas text-2xl text-white md:text-4xl">
          Need Reliable Supply of
        </p>
        <p className="font-teko text-4xl text-white md:text-6xl">
          FACIAL TISSUE PRODUCTS?
        </p>
        <p className="font-open text-center text-white md:text-xl ">
          Connect directly with Matrix Tissue – your trusted face tissue
          manufacturer in Delhi for bulk and wholesale requirements.
        </p>

        <div className="grid grid-cols-3 mt-2 gap-3 text-white md:gap-8 md:mt-5">
          <div className="flex flex-col items-center gap-0.5 ">
            <BookCheck className="md:h-9 md:w-9" />
            <p className="md:text-xl">SUBMIT ENQUIRY</p>
          </div>
          <div className="flex flex-col items-center gap-0.5 text-center">
            <IndianRupee className="md:h-9 md:w-9" />
            <p className="md:text-xl">RECEIVE BEST PRICES</p>
          </div>
          <div className="flex flex-col items-center gap-0.5 ">
            <Package className="md:h-9 md:w-9" />
            <p className="md:text-xl">GET QUICK DELIVERY</p>
          </div>
        </div>

        <div className="flex gap-5 mt-3 md:gap-14 pb-2">
          <button className="bg-red-500 hover:bg-red-600 px-5 py-1 rounded text-white text-xl md:scale-115">
            Request Quote
          </button>
          <a
            href="tel:8810540823"
            className="bg-red-400 hover:bg-red-500 px-5 py-1 rounded text-white text-xl md:scale-115"
          >
            Call Now
          </a>
        </div>
      </section>

      {/* product section  */}
      <section className="px-3 py-8 md:py-14 lg:px-20 flex flex-col items-center lg:py-6">
        <p className="text-3xl md:text-5xl font-bebas text-gray-900 mb-2 text-center tracking-wide">
          Send Your Enquiry Directly to Matrix Tissue
        </p>
        <div className="grid grid-cols-2 gap-1 mt-5 md:grid-cols-4 lg:gap-6">
          {products.map((item, idx) => (
            <div
              key={idx}
              className=" flex flex-col items-center overflow-hidden rounded-lg border shadow hover:shadow-xl duration-300"
            >
              <Image
                src={item?.image}
                width="1000"
                height="1000"
                alt={item?.title}
                className="h-auto w-full"
              />
              <h3 className="text-xl my-1 md:text-2xl text-center">
                {item?.title}
              </h3>
              <p className="px-2 md:text-xl font-open text-center">{item?.desc}</p>

              <button className="my-4 text-xl bg-red-700 text-white px-10 py-2 rounded-lg hover:bg-red-800">
                Get Quote
              </button>
            </div>
          ))}
        </div>

        <button className="mt-7 bg-red-700 text-white px-8 py-2 rounded text-xl md:scale-110 lg:px-20 lg:text-2xl">
          SHOW MORE
        </button>
      </section>

      {/* cta  */}
      <section className="px-5 py-12 md:py-20 lg:px-24 bg-gray-50 flex flex-col items-center lg:py-5">
        {/* Bulk Supply CTA */}
        <div className="mt-8 w-full max-w-5xl bg-gradient-to-r from-red-700 to-red-900 rounded-3xl p-6 md:p-8 text-center text-white shadow-xl">
          <h3 className="text-3xl md:text-5xl font-bebas mb-3 tracking-wide">
            Need Bulk Facial Tissue Supply?
          </h3>
          <p className="text-lg md:text-xl mb-7 text-red-50 max-w-3xl mx-auto">
            Partner with a reliable facial tissue manufacturer in Delhi NCR for
            consistent quality and timely delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto bg-white text-red-700 font-bold py-3 px-7 rounded-xl text-lg hover:bg-gray-100 transition-colors shadow-lg">
              Get Bulk Pricing
            </button>
            <a
              href="tel:8810540823"
              className="bg-red-400 hover:bg-red-500 px-5 py-1 rounded text-white text-xl md:scale-115"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* third section  */}
      <section className="px-5 py-12 md:py-20 lg:px-24 bg-gray-50 flex flex-col items-center lg:py-6">
        <h2 className="text-3xl md:text-5xl font-bebas text-gray-900 mb-6 text-center tracking-wide">
          Leading Facial Tissue in Delhi
        </h2>
        <div className="max-w-5xl text-center space-y-4">
          <p className="text-lg md:text-xl text-gray-700 leading-7">
            Matrix Tissue began its journey in 2008 under the visionary
            leadership of{" "}
            <span className="font-semibold">Mr. Praveen Bhagwat</span>, with a
            mission to redefine quality in the tissue industry. Today, we are
            recognized as a trusted{" "}
            <span className="font-semibold">
              facial tissue manufacturer in Delhi
            </span>
            , offering premium-quality facial tissue products designed for
            superior softness, strength, and hygiene.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-7">
            Our range of facial tissue in Delhi caters to households, offices,
            hotels, and healthcare sectors, ensuring comfort and reliability in
            every use. With years of expertise, Matrix Tissue has established
            itself as a dependable{" "}
            <span className="font-semibold">
              facial tissue supplier in Delhi NCR
            </span>
            , delivering high-quality solutions for both retail and bulk
            requirements.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-7">
            Our commitment to innovation and consistent quality allows us to
            provide soft facial tissue, premium facial tissue, and customized
            solutions that meet modern hygiene standards. We continue to focus
            on delivering the best facial tissue products in Delhi, making us a
            preferred choice for customers seeking quality and value.
          </p>
        </div>
      </section>

      {/* fouth section  */}
      <section className="px-3 py-10 md:py-14 lg:px-20 flex flex-col items-center lg:py-6">
        <p className="text-3xl md:text-5xl font-bebas text-gray-900 mb-3 text-center tracking-wide">
          Complete Range of Facial Tissue Products
        </p>
        <div className="grid grid-cols-2 gap-2 mt-5 md:grid-cols-4 lg:gap-4">
          {allProduct.map((item, idx) => (
            <div
              key={idx}
              className=" flex flex-col items-center overflow-hidden rounded-lg border shadow hover:shadow-xl duration-300"
            >
              <Image
                src={item?.image}
                width="1000"
                height="1000"
                alt={item?.title}
                className="h-auto w-full"
              />
              <h3 className="text-xl my-1 md:text-2xl text-center">
                {item?.title}
              </h3>

              <button className="my-3 text-xl bg-red-700 text-white px-10 py-2 rounded-lg hover:bg-red-800 ">
                Get Quote
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="px-5 py-12 md:py-20 lg:px-24 bg-white flex flex-col items-center lg:py-3">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bebas text-gray-900 mb-1 tracking-wide">
            Why Choose Matrix Tissue
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-red-700 mb-2">
            Premium Facial Tissue, Trusted Quality
          </p>
          <p className="max-w-4xl text-gray-600 text-lg md:text-xl leading-7">
            At Matrix Tissue, we go beyond just manufacturing facial tissue. We
            are committed to delivering exceptional value through quality,
            consistency, and a customer-first approach, making us a reliable
            facial tissue supplier in Delhi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full max-w-7xl">
          {whyChooseUs.map((feature, index) => (
            <div
              key={index}
              className="p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* ICON + TITLE SAME LINE */}
              <div className="flex items-center gap-3 mb-3">
                <div className="p-1 bg-white rounded-full shadow-sm">
                  {feature.icon}
                </div>

                <h4 className="text-lg md:text-xl font-bold text-gray-900">
                  {feature.title}
                </h4>
              </div>

              {/* DESCRIPTION */}
              <p className="text-gray-600 leading-6 md:leading-7 text-sm md:text-base">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* cta section  */}
      <section className="relative w-full py-20 md:py-32 flex items-center justify-center overflow-hidden lg:py-6">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/products/FT7-1-1.webp"
            alt="Premium Facial Tissue"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-red-900/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-5 max-w-5xl text-white">
          <h2 className="text-4xl md:text-7xl font-bebas mb-4  drop-shadow-md">
            Searching for the Best Facial Tissue in Delhi?
          </h2>
          <p className="text-lg md:text-3xl mb-6 font-medium text-gray-100 max-w-3xl mx-auto">
            Connect with Matrix Tissue for premium quality, competitive pricing,
            and reliable bulk supply.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-12 rounded-xl text-xl md:text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl">
            Get Free Quote
          </button>
        </div>
      </section>

      {/* why Buyer choose matrix tissue  */}
      <section className="px-5 py-12 md:py-20 lg:px-24 bg-gray-50 flex flex-col items-center lg:py-6">
        <h2 className="text-3xl md:text-5xl font-bebas text-gray-900 mb-7 text-center tracking-wide">
          Why Buyers Choose Matrix Tissue
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 w-full max-w-7xl">
          {whyBuyersChoose.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
            >
              {/* ICON + TITLE */}
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-red-50 p-1 rounded-full group-hover:bg-red-100 transition-colors">
                  {item.icon}
                </div>

                <h3 className="font-bold text-gray-900 text-base md:text-lg">
                  {item.title}
                </h3>
              </div>

              {/* DESCRIPTION */}
              <p className="text-gray-600 text-sm md:text-base leading-6 md:leading-6">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Also avaiable on  */}
      <section className="px-5 py-12 md:py-20 lg:px-24 bg-white flex flex-col items-center lg:py-8">
        <div className="text-center ">
          <h2 className="text-3xl md:text-5xl font-bebas text-gray-900  mb-3 tracking-wide">
            Also Available On
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-red-700 mb-5">
            Matrix Tissue is proudly listed on leading B2B platforms, making it
            easier for buyers to connect with a trusted facial tissue
            manufacturer in Delhi.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-7 md:items-center lg:gap-5">
          {[
            "/ecom2/logo1.webp",
            "/ecom2/logo2.webp",
            "/ecom2/logo4.webp",
            "/ecom2/logo5.webp",
            "/ecom2/logo8.webp",
            "/ecom2/logo.webp",
            "/ecom2/cropped-matrix-logo-Photoroom-2.png",
          ].map((feature, index) => (
            <Image
              src={feature}
              alt="image of ecom"
              width={1000}
              height={1000}
              key={index}
              className="h-28 w-28 "
            />
          ))}
        </div>
      </section>

      {/* premium facial tissue collection  */}
      <section className="px-5 py-12 md:py-20 lg:px-24 bg-gray-50 flex flex-col items-center lg:py-6">
        <h2 className="text-3xl md:text-5xl font-bebas text-gray-900 mb-6 text-center tracking-wide">
          Premium Facial Tissue Collection
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 w-full max-w-7xl">
          {[
            {
              title: "Facial Tissue in Delhi",
              desc: "Premium Box Facial Tissue – Soft & Absorbent Collection",
            },
            {
              title: "Facial Tissue Supplier in Delhi",
              desc: "Pocket Facial Tissue – Travel-Friendly Hygiene Pack",
            },
            {
              title: "Facial Tissue Manufacturer in Delhi",
              desc: "Ultra Soft Facial Tissue – Gentle Care Collection",
            },
            {
              title: "Facial Tissue",
              desc: "Multi-Ply Facial Tissue – Strong & Durable Range",
            },
            {
              title: "Facial Tissue in Delhi",
              desc: "Eco-Friendly Facial Tissue – Sustainable Collection",
            },
            {
              title: "Facial Tissue Manufacturer",
              desc: "Customized Facial Tissue Packs – Private Label Solutions",
            },
            {
              title: "Facial Tissue Supplier in Delhi",
              desc: "Premium Facial Tissue for Hotels & Offices",
            },
            {
              title: "Facial Tissue in Delhi",
              desc: "High Absorbency Facial Tissue – Commercial Use Pack",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-all group cursor-pointer"
            >
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-red-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-6 mb-4 md:text-lg">
                  {item.desc}
                </p>
              </div>
              <span className="text-red-600 font-semibold text-sm inline-flex items-center gap-0.5">
                View Collection →
              </span>
            </div>
          ))}
        </div>

        {/* Bulk Supply CTA */}
        <div className="mt-8 w-full max-w-5xl bg-gradient-to-r from-red-700 to-red-900 rounded-3xl p-6 md:p-8 text-center text-white shadow-xl">
          <h3 className="text-3xl md:text-5xl font-bebas mb-3 tracking-wide">
            Need Bulk Facial Tissue Supply?
          </h3>
          <p className="text-lg md:text-xl mb-7 text-red-50 max-w-3xl mx-auto">
            Partner with a reliable facial tissue manufacturer in Delhi NCR for
            consistent quality and timely delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto bg-white text-red-700 font-bold py-3 px-7 rounded-xl text-lg hover:bg-gray-100 transition-colors shadow-lg">
              Get Bulk Pricing
            </button>
            <a
              href="tel:8810540823"
              className="bg-red-400 hover:bg-red-500 px-5 py-1 rounded text-white text-xl md:scale-115"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* testimonial section  */}
      <section className="px-5 py-12 md:py-20 lg:px-24 bg-white flex flex-col items-center lg:py-6">
        <h2 className="text-3xl md:text-5xl font-bebas text-gray-900 mb-8 text-center tracking-wide">
          What Our Clients Say
        </h2>

        <div className="w-full max-w-7xl mx-auto px-4">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            centeredSlides={true}
            spaceBetween={20}
            autoplay={{ delay: 2000 }}
            breakpoints={{
              320: { slidesPerView: 1.2 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {[
              {
                quote:
                  "Matrix Tissue is a highly reliable facial tissue supplier in Delhi. The quality is consistently soft and perfect for our daily office use.",
                author: "Corporate Client",
              },
              {
                quote:
                  "We’ve been sourcing bulk facial tissue for our hotel chain, and their service is always on time with excellent pricing.",
                author: "Hotel Manager",
              },
              {
                quote:
                  "One of the best facial tissue manufacturers in Delhi NCR. The products are hygienic and ideal for healthcare environments.",
                author: "Hospital Administrator",
              },
              {
                quote:
                  "Their customized facial tissue packaging helped us build our brand presence. Highly professional team.",
                author: "Retail Distributor",
              },
              {
                quote:
                  "Premium quality facial tissue with great absorbency. Truly a dependable supplier for bulk requirements.",
                author: "Business Owner",
              },
              {
                quote:
                  "Fast delivery and consistent quality make Matrix Tissue our go-to facial tissue supplier in Delhi.",
                author: "Office Admin",
              },
              {
                quote:
                  "Soft, skin-friendly facial tissue products that meet our salon’s hygiene standards perfectly.",
                author: "Salon Owner",
              },
              {
                quote:
                  "Affordable pricing with top-notch quality. One of the most trusted facial tissue suppliers we’ve worked with.",
                author: "Wholesale Buyer",
              },
            ].map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative group h-50">
                  <Quote className="absolute top-4 right-4 text-red-200 w-6 h-6 opacity-50 group-hover:opacity-100 transition-opacity" />

                  <p className="text-gray-700 italic mb-6 leading-6 md:leading-7 text-sm md:text-base">
                    "{item.quote}"
                  </p>

                  <div className="border-t border-red-100 pt-3">
                    <p className="font-bold text-red-700 text-xs md:text-sm tracking-wide uppercase">
                      — {item.author}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Faq section  */}
      <section className="px-5 py-12 md:py-20 lg:px-24 bg-gray-50 flex flex-col items-center lg:py-6">
        <h2 className="text-3xl md:text-5xl font-bebas text-gray-900 mb-8  text-center tracking-wide">
          Frequently Asked Questions – Face Tissue
        </h2>

        <div className="w-full max-w-4xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm transition-all duration-300"
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 md:p-5 text-left hover:bg-red-50/30 transition-colors"
                >
                  <span className="font-bold text-gray-900 text-lg md:text-xl pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-red-600 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-5 md:p-5 pt-0 text-gray-600 leading-6 text-base md:text-lg border-t border-gray-100">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="px-5 py-12 md:py-20 lg:px-10 bg-white flex flex-col items-center lg:py-5">
        <div className="w-full max-w-7xl bg-gray-50 rounded-[2.5rem] border border-gray-200 shadow-sm transition-all hover:shadow-md overflow-hidden flex flex-col lg:flex-row">
          {/* Left Side: Image */}
          <div className="relative w-full lg:w-5/12 min-h-[300px] lg:min-h-[70vh]">
            <Image
              src="/products/FT7-1-1.webp"
              alt="Matrix Facial Tissue"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:hidden flex items-end p-5">
              <h2 className="text-3xl font-bebas text-white tracking-wide">
                Get a Free Quote
              </h2>
            </div>
          </div>

          {/* Right Side: Form Content */}
          <div className="w-full lg:w-7/12 p-4 md:p-8">
            <div className="text-left mb-3 md:mb-6">
              <h2 className="text-3xl md:text-5xl font-bebas text-gray-900 mb-2 tracking-wide">
                Get the Best Facial Tissue in Delhi Today
              </h2>
              <p className="text-xl md:text-2xl font-bold text-red-700 mb-2">
                Looking for a trusted facial tissue in Delhi?
              </p>
              <p className="text-gray-600 text-lg leading-6">
                Matrix Tissue offers premium quality, soft, and hygienic facial
                tissue products at competitive prices. Fill out the form below
                and get a quick quote.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-left">
              <div className="flex flex-col gap-0.5">
                <label className="font-bold text-gray-700 ml-1 text-lg">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all bg-white"
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <label className="font-bold text-gray-700 ml-1 text-lg">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your contact number"
                  className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all bg-white"
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <label className="font-bold text-gray-700 ml-1 text-lg">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all bg-white"
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <label className="font-bold text-gray-700 ml-1 text-lg">
                  Requirement
                </label>
                <input
                  type="text"
                  placeholder="Box / Pocket / Bulk"
                  className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all bg-white"
                />
              </div>
              <div className="flex flex-col gap-0.5 md:col-span-2">
                <label className="font-bold text-gray-700 ml-1 text-lg">
                  Message
                </label>
                <textarea
                  rows="3"
                  placeholder="Share your specific needs"
                  className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all resize-none bg-white"
                ></textarea>
              </div>

              <div className="md:col-span-2 flex flex-col items-center gap-3 mt-2">
                <button className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-3 rounded-xl text-xl transition-all shadow-lg active:scale-[0.98]">
                  Get Free Quote
                </button>
                <a
                  href="https://wa.link/rt47ko"
                  target="_blank"
                  className="text-green-600 font-bold text-base hover:text-green-700 transition-colors"
                >
                  “Get Instant Quote on WhatsApp”
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* {footer} */}
     <footer className="  relative text-gray-300 overflow-hidden"  >
       <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover"
  >
    <source src="https://vimeo.com/1048066271?fl=pl&fe=cm" type="video/mp4" />
  </video>

       <div className="flex flex-wrap items-center justify-evenly gap-2 px-4 py-5 border-b border-[#2a2a2a]">
 
        {/* Logo */}
        <div className="flex items-center gap-3  rounded-lg px-4 py-2">
          <div className="w-40 h-20  rounded-md flex items-center justify-center">
            <img src="/nav/nav-logo.png" alt="" />
          </div>
         
        </div>
 
        {/* Address */}
        <div className="flex items-center gap-3 text-xl text-gray-500">
          <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center shrink-0">
            <MapPin size={23} color="#ffffff" />
          </div>
          <span>I-237, Sec-3, Bawana Industrial Area, Delhi – 110039</span>
        </div>
 
        {/* Phone */}
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center shrink-0">
            <Phone size={23} color="#ffffff" />
          </div>
          <a
            href="tel:8810540823"
            className="text-gray-500 text-xl hover:text-white transition-colors"
          >
            +91-8810540823
          </a>
        </div>
               {/* className="w-8 h-8 rounded-full bg-[#1d1d1d] border border-[#333] flex items-center justify-center text-gray-500 hover:text-white hover:bg-[#2a2a2a] transition-all" */}

        {/* Social Icons */}
        <div className="flex gap-2">
          
        </div>
      </div>
 
      {/* ── LOWER ROW: explore | products | photos | subscribe ── */}
      <div className="flex flex-wrap gap-8 px-8 py-8 border-b border-[#2a2a2a]">
 
        {/* Explore */}
        <div className="flex-1 min-w-[130px]">
          <h4 className="text-xl font-semibold text-white uppercase tracking-widest mb-4 pb-2 border-b border-[#2a2a2a]">
            Explore
          </h4>
          <ul className="flex flex-col gap-2">
            {exploreLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="flex items-center gap-2 text-md text-gray-500 hover:text-white transition-colors group"
                >
                  <ChevronRight
                    size={11}
                    className="text-[#1d9e75] shrink-0 group-hover:translate-x-0.5 transition-transform"
                  />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
 
        {/* Products */}
        <div className="flex-1 min-w-[130px]">
          <h4 className="text-xl  font-semibold text-white uppercase tracking-widest mb-4 pb-2 border-b border-[#2a2a2a]">
            Products
          </h4>
          <ul className="flex flex-col gap-2">
            {productLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="flex items-center gap-2 text-md text-gray-500 hover:text-white transition-colors group"
                >
                  <ChevronRight
                    size={11}
                    className="text-[#1d9e75] shrink-0 group-hover:translate-x-0.5 transition-transform"
                  />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
 
        {/* Recent Photos */}
        <div className="flex-1 min-w-[150px]">
          <h4 className="text-xl  font-semibold text-white uppercase tracking-widest mb-4 pb-2 border-b border-[#2a2a2a]">
            Recent Photos
          </h4>
          <div className="grid grid-cols-3 gap-1.5">
            {recentPhotos.map((src, i) => (
              <div
                key={i}
                className="aspect-square rounded bg-[#1d1d1d] border  overflow-hidden flex items-center justify-center"
              >
                {
                  <img
                    src={src.src}
                    alt={`Product ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={() => setImgErrors((prev) => ({ ...prev, [i]: true }))}
                  />
                }
              </div>
            ))}
          </div>
        </div>
 
        {/* Subscribe */}
        <div className="flex-1 min-w-[180px] max-w-[240px]">
          <h4 className="text-xl font-semibold text-white uppercase tracking-widest mb-4 pb-2 border-b border-[#2a2a2a]">
            Subscribe
          </h4>
          <p className="text-md text-gray-600 mb-4 leading-relaxed">
            Stay updated with our latest products and offers.
          </p>
          <div className="flex items-center gap-2 bg-[#1d1d1d] border border-[#333] rounded-lg px-3 py-2 mb-3 focus-within:border-[#1d9e75] transition-colors">
            <Mail size={13} className="text-white shrink-0" />
            <input
              type="email"
              placeholder="Your email address"
              // value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
              className="bg-transparent text-[12px] text-gray-300 placeholder-white outline-none w-full"
            />
          </div>
          <button
            // onClick={handleSubscribe}
            className="w-full py-2 bg-red-500 hover:bg-[#ffffff] hover:text-red-500 active:scale-95 text-white text-[12px] font-medium rounded-lg transition-all"
          >
            Subscribe
          </button>
        </div>
      </div>
 
      {/* ── CITY TAGS ── */}
      <div className="flex flex-wrap items-center gap-2 px-8 py-4 border-b border-[#222]">
        <span className="text-xl  font-semibold text-gray-600 uppercase tracking-widest mr-1">
          
        </span>
        {cities.map((city) => (
          <span
            key={city}
            className="text-md text-gray-600 px-3 py-1 border rounded-full hover:text-gray-300 hover:border-[#444] cursor-pointer transition-all"
          >
            {city}
          </span>
        ))}
      </div>
 
      {/* ── BOTTOM BAR ── */}
      {/* <div className="flex flex-wrap justify-between items-center gap-3 px-8 py-4 text-[11px] text-gray-600">
        <span>Matrix Tissues Copyrights &copy; {new Date().getFullYear()}</span>
        <div className="flex gap-5">
          {bottomLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-gray-600 hover:text-gray-300 transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
        <span className="text-[#444]">Developed by Promozione Branding Pvt Ltd.</span>
      </div> */}
  

    </footer>
    </div>
  );
};

export default Home;
