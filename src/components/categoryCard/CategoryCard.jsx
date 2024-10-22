import React from "react";
import categoryimg1 from "../../assets/images/category1.jpg";
import categoryimg2 from "../../assets/images/category2.jpg";
import categoryimg3 from "../../assets/images/category3.jpg";
import electronics1 from "../../assets/images/electronics1.jpg";
import electronics2 from "../../assets/images/electronics2.jpg";
import electronics3 from "../../assets/images/electronics3.jpg";
import beauty1 from "../../assets/images/beauty1.jpg";
import beauty2 from "../../assets/images/beauty2.jpg";
import beauty3 from "../../assets/images/beauty3.jpg";
import Home1 from "../../assets/images/Home1.jpg";
import Home2 from "../../assets/images/Home2.jpg";
import Home3 from "../../assets/images/Home3.jpg";
import sports1 from "../../assets/images/sports1.jpg";
import sports2 from "../../assets/images/sports2.jpg";
import sports3 from "../../assets/images/sports3.jpg";

const images1 = [categoryimg1, categoryimg2, categoryimg3];
const images2 = [electronics1, electronics2, electronics3];
const images3 = [Home1, Home2, Home3];
const images4 = [beauty1, beauty2, beauty3];
const images5 = [sports1, sports2, sports3];
const CategoryCard = () => {
  return (
    <div className="flex flex-col gap-20">
      {/* fashion */}

      <div className="shadow-sm shadow-blue-200 p-10 rounded-lg">
        <h1 className="text-4xl font-bold gradient-title text-center mt-5 mb-10">
          Explore in Fashion
        </h1>
        <div className="flex sm:flex-row pb-5 pt-5 flex-col w-full gap-8">
          {images1.map((imageUrl, index) => (
            <div
              key={index}
              className="rounded-lg shadow-lg min-w-[100px] shadow-blue-200 cursor-pointer hover:scale-105 transition-all ease-in-out delay-120"
            >
              <img src={imageUrl} alt="" className="min-w-[100px] h-full rounded-lg" />
            </div>
          ))}
        </div>
      </div>

      {/* electronics */}

      <div className="shadow-sm shadow-blue-200 p-10 rounded-lg">
        <h1 className="text-4xl font-bold gradient-title text-center mt-5 mb-10">
          Explore in Electronics
        </h1>
        <div className="flex sm:flex-row pb-5 bg-transparent pt-5 flex-col w-full gap-8">
          {images2.map((imageUrl, index) => (
            <div
              key={index}
              className="rounded-lg shadow-lg shadow-blue-200 cursor-pointer hover:scale-105 transition-all ease-in-out delay-120"
            >
              <img
                src={imageUrl}
                alt=""
                className="rounded-lg overflow-hidden h-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Home&Kitchen */}

      <div className="shadow-sm shadow-blue-200 p-10 rounded-lg">
        <h1 className="text-4xl font-bold gradient-title text-center mt-5 mb-10">
          Explore in Home & Kitchens
        </h1>
        <div className="flex sm:flex-row pb-5 bg-transparent pt-5 flex-col w-full gap-8">
          {images3.map((imageUrl, index) => (
            <div
              key={index}
              className="rounded-lg shadow-lg shadow-blue-200 cursor-pointer hover:scale-105 transition-all ease-in-out delay-120"
            >
              <img
                src={imageUrl}
                alt=""
                className="rounded-lg overflow-hidden h-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Beauty */}

      <div className="shadow-sm shadow-blue-200 p-10 rounded-lg">
        <h1 className="text-4xl font-bold gradient-title text-center mt-5 mb-10">
          Explore in Beauty
        </h1>
        <div className="flex sm:flex-row pb-5 bg-transparent pt-5 flex-col w-full gap-8">
          {images4.map((imageUrl, index) => (
            <div
              key={index}
              className="rounded-lg shadow-lg shadow-blue-200 cursor-pointer hover:scale-105 transition-all ease-in-out delay-120"
            >
              <img
                src={imageUrl}
                alt=""
                className="rounded-lg overflow-hidden h-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Sports */}

      <div className="shadow-sm shadow-blue-200 p-10 rounded-lg">
        <h1 className="text-4xl font-bold gradient-title text-center mt-5 mb-10">
          Explore in Sports
        </h1>
        <div className="flex sm:flex-row pb-5 bg-transparent pt-5 flex-col w-full gap-8">
          {images5.map((imageUrl, index) => (
            <div
              key={index}
              className="rounded-lg shadow-lg shadow-blue-200 cursor-pointer hover:scale-105 transition-all ease-in-out delay-120"
            >
              <img
                src={imageUrl}
                alt=""
                className="rounded-lg overflow-hidden h-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Automotive */}
    </div>
  );
};

export default CategoryCard;
