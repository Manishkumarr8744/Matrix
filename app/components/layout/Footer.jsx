"use client"
import React from 'react'
import {
  BookCheck,
  ChevronDown,
  IndianRupee,
  MousePointerClick,
  Package,
  Quote,
  Wind,
} from "lucide-react";
import {
  
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
  
} from "lucide-react";

const Footer = () => {
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

const recentPhotos = [
  {src:"/recent/recent1.webp"},
  {src:"/recent/recent2.webp"},
  {src:"/recent/recent3.webp"},
  {src:"/recent/recent4.webp"},
  {src:"/recent/recent5.webp"},
  {src:"/recent/recent6.webp"},
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
  return (
    <div>
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
                      // onChange={(e) => setEmail(e.target.value)}
                      // onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
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
  )
}

export default Footer