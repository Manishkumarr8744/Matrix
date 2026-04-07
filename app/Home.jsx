"use client";

import { allProduct, products, whyChooseUs, whyBuyersChoose } from "@/data";
import { BookCheck, IndianRupee, Package } from "lucide-react";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      {/* hero  */}
      <section className="bg-[#F2A99B] flex flex-col gap-1 items-center px-2 py-5 lg:py-10">
        <p className="font-bebas text-2xl text-white md:text-4xl">
          Need Reliable Supply of
        </p>
        <p className="font-teko text-4xl text-white md:text-6xl">
          FACIAL TISSUE PRODUCTS?
        </p>
        <p className=" text-center text-white md:text-xl">
          Connect directly with Matrix Tissue – your trusted face tissue
          manufacturer in Delhi for bulk and wholesale requirements.
        </p>

        <div className="grid grid-cols-3 mt-5 gap-3 text-white md:gap-8 md:mt-10">
          <div className="flex flex-col items-center gap-1 ">
            <BookCheck className="md:h-9 md:w-9" />
            <p className="md:text-xl">SUBMIT ENQUIRY</p>
          </div>
          <div className="flex flex-col items-center gap-1 text-center">
            <IndianRupee className="md:h-9 md:w-9" />
            <p className="md:text-xl">RECEIVE BEST PRICES</p>
          </div>
          <div className="flex flex-col items-center gap-1 ">
            <Package className="md:h-9 md:w-9" />
            <p className="md:text-xl">GET QUICK DELIVERY</p>
          </div>
        </div>

        <div className="flex gap-5 mt-3 md:gap-14 pb-4">
          <button className="bg-red-500 hover:bg-red-600 px-5 py-1 rounded-xl text-white text-xl md:scale-115">
            Request Quote
          </button>
          <button className="bg-red-400 hover:bg-red-500 px-5 py-1 rounded-xl text-white text-xl md:scale-115">
            Call Now
          </button>
        </div>
      </section>

      {/* product section  */}
      <section className="px-3 py-10 md:py-14 lg:px-20 flex flex-col items-center">
        <p className="text-3xl md:text-5xl font-bebas text-gray-900 mb-8 text-center tracking-wide">
          Send Your Enquiry Directly to Matrix Tissue
        </p>
        <div className="grid grid-cols-2 gap-2 mt-5 md:grid-cols-4 lg:gap-6">
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
              <h3 className="text-xl my-2 md:text-2xl text-center">
                {item?.title}
              </h3>
              <p className="px-2 md:text-xl">{item?.desc}</p>

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

      {/* third section  */}
      <section className="px-5 py-12 md:py-20 lg:px-24 bg-gray-50 flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bebas text-gray-900 mb-8 text-center tracking-wide">
          Leading Facial Tissue in Delhi
        </h2>
        <div className="max-w-5xl text-center space-y-6">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
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
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
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
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Our commitment to innovation and consistent quality allows us to
            provide soft facial tissue, premium facial tissue, and customized
            solutions that meet modern hygiene standards. We continue to focus
            on delivering the best facial tissue products in Delhi, making us a
            preferred choice for customers seeking quality and value.
          </p>
        </div>
      </section>

      {/* fouth section  */}
      <section className="px-3 py-10 md:py-14 lg:px-20 flex flex-col items-center">
        <p className="text-3xl md:text-5xl font-bebas text-gray-900 mb-8 text-center tracking-wide">
          Complete Range of Facial Tissue Products
        </p>
        <div className="grid grid-cols-2 gap-2 mt-5 md:grid-cols-4 lg:gap-6">
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
              <h3 className="text-xl my-2 md:text-2xl text-center">
                {item?.title}
              </h3>

              <button className="my-4 text-xl bg-red-700 text-white px-10 py-2 rounded-lg hover:bg-red-800 ">
                Get Quote
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="px-5 py-12 md:py-20 lg:px-24 bg-white flex flex-col items-center">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bebas text-gray-900 mb-2 tracking-wide">
            Why Choose Matrix Tissue
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-red-700 mb-6">
            Premium Facial Tissue, Trusted Quality
          </p>
          <p className="max-w-4xl text-gray-600 text-lg md:text-xl leading-relaxed">
            At Matrix Tissue, we go beyond just manufacturing facial tissue. We
            are committed to delivering exceptional value through quality,
            consistency, and a customer-first approach, making us a reliable
            facial tissue supplier in Delhi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {whyChooseUs.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4 p-3 bg-white rounded-full shadow-sm">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-600 leading-relaxed md:text-xl">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* cta section  */}
      <section className="relative w-full py-20 md:py-32 flex items-center justify-center overflow-hidden lg:py-10">
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
          <h2 className="text-4xl md:text-7xl font-bebas mb-6 tracking-wider drop-shadow-md">
            Searching for the Best Facial Tissue in Delhi?
          </h2>
          <p className="text-lg md:text-3xl mb-10 font-medium text-gray-100 max-w-3xl mx-auto">
            Connect with Matrix Tissue for premium quality, competitive pricing,
            and reliable bulk supply.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-12 rounded-xl text-xl md:text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl">
            Get Free Quote
          </button>
        </div>
      </section>

      {/* why Buyer choose matrix tissue  */}
      <section className="px-5 py-12 md:py-20 lg:px-24 bg-gray-50 flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bebas text-gray-900 mb-12 text-center tracking-wide">
          Why Buyers Choose Matrix Tissue
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl">
          {whyBuyersChoose.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow group"
            >
              <div className="mb-4 bg-red-50 p-3 rounded-full group-hover:bg-red-100 transition-colors">
                {item.icon}
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed md:text-xl">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Also avaiable on  */}
      <section className="px-5 py-12 md:py-20 lg:px-24 bg-white flex flex-col items-center">
        <div className="text-center ">
          <h2 className="text-3xl md:text-5xl font-bebas text-gray-900  tracking-wide">
            Also Available On
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-red-700 mb-6">
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
            "/ecom2/cropped-matrix-logo-Photoroom-2.png"
          ].map((feature, index) => (
            <Image
              src={feature}
              alt="image of ecom"
              width={1000}
              height={1000}
              key={index}
              className="h-auto w-28 "
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
