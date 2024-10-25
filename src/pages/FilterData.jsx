import TopProductCard from "../components/Productcard/TopProductCard";
import React from "react";
import { useSelector } from "react-redux";

import notFound from "../assets/images/notfound.jpg";




const FilterData = () => {
  const filterProdcuts = useSelector((state) => state.product.filteredData);
  return (
    <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center gradient-title">Search Results</h2>

      {filterProdcuts.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 cursor-pointer">
            {filterProdcuts.map((product) => (
              <TopProductCard product={product} />
            ))}
          </div>
        </>
      ) : (
       <div className="flex flex-col justify-center items-center mt-20">
        <h1 className=" text-lg md:text-2xl font-bold">No Results Found</h1>
         <div className="flex justify-center items-center w-full shadow-lg shadow-blue-200 p-10 rounded-lg">
          <img
            src={notFound}
            alt=""
            className=" max-w-[800px] min-w-[150px] h-auto shadow-lg shadow-blue-200 m-10 rounded-lg "
          />
        </div>
       </div>
      )}
    </div>
  );
};

export default FilterData;
