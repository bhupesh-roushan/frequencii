import React from "react";
import { Link } from "react-router-dom";
import categoryimg1 from "../../assets/images/category1.jpg";
import categoryimg2 from "../../assets/images/category2.jpg";
import categoryimg3 from "../../assets/images/category3.jpg";
import electronics1 from "../../assets/images/electronics1.jpg";
import electronics2 from "../../assets/images/electronics2.jpg";
import electronics3 from "../../assets/images/electronics3.jpg";
import beauty1 from "../../assets/images/beauty1.jpg";
import beauty2 from "../../assets/images/beauty2.jpg";
import beauty3 from "../../assets/images/beauty3.jpg";

const images1 = [
  { url: categoryimg1, link: "/fashion/men" },
  { url: categoryimg2, link: "/fashion/women" },
  { url: categoryimg3, link: "/fashion/kids" }
];
const images2 = [
  { url: electronics1, link: "/electronics/mobiles" },
  { url: electronics2, link: "/electronics/laptops" },
  { url: electronics3, link: "/electronics/home-goods" }
];
const images4 = [
  { url: beauty1, link: "/beauty/bodycare" },
  { url: beauty2, link: "/beauty/haircare" },
  { url: beauty3, link: "/beauty/deodrants" }
];


const CategoryCard = () => {
  return (
    <div className="flex flex-col gap-20">
      {/* fashion */}
      <div className="shadow-sm shadow-blue-200 p-10 rounded-lg">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold gradient-title text-center mt-5 mb-10">
          Fashion
        </h1>
        <div className="flex sm:flex-row pb-5 pt-5 flex-col w-full gap-8">
          {images1.map((image, index) => (
            <Link key={index} to={image.link}>
              <div className="rounded-lg shadow-lg min-w-[100px] shadow-blue-200 cursor-pointer hover:scale-105 transition-all ease-in-out delay-120">
                <img src={image.url} alt="" className="min-w-[100px] h-full rounded-lg" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* electronics */}
      <div className="shadow-sm shadow-blue-200 p-10 rounded-lg">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold gradient-title text-center mt-5 mb-10">
          Electronics
        </h1>
        <div className="flex sm:flex-row pb-5 bg-transparent pt-5 flex-col w-full gap-8">
          {images2.map((image, index) => (
            <Link key={index} to={image.link}>
              <div className="rounded-lg shadow-lg shadow-blue-200 cursor-pointer hover:scale-105 transition-all ease-in-out delay-120">
                <img src={image.url} alt="" className="rounded-lg overflow-hidden h-full" />
              </div>
            </Link>
          ))}
        </div>
      </div>


      {/* Beauty */}
      <div className="shadow-sm shadow-blue-200 p-10 rounded-lg">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold gradient-title text-center mt-5 mb-10">
          Beauty
        </h1>
        <div className="flex sm:flex-row pb-5 bg-transparent pt-5 flex-col w-full gap-8">
          {images4.map((image, index) => (
            <Link key={index} to={image.link}>
              <div className="rounded-lg shadow-lg shadow-blue-200 cursor-pointer hover:scale-105 transition-all ease-in-out delay-120">
                <img src={image.url} alt="" className="rounded-lg overflow-hidden h-full" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Sports */}
    </div>
  );
};

export default CategoryCard;
