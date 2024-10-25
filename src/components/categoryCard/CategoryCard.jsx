import React from "react";
import { Link } from "react-router-dom";
import { images1, images2, images4 } from "../../components/categoryCard/categoryImages";

const CategoryCard = () => {
  return (
    <div className="flex flex-col gap-20">
      {/* Fashion */}
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

      {/* Electronics */}
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
    </div>
  );
};

export default CategoryCard;
