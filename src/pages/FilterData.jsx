import TopProductCard from "../components/Productcard/TopProductCard";
import React from "react";
import { useSelector } from "react-redux";
import notFound from "../assets/images/notfound.jpg";

const FilterData = () => {
  const filterProdcuts = useSelector((state) => state.product.filteredData);

  const bodyCareFilteredProducts = useSelector(
    (state) => state.bodyCareProducts.bodyCarefilteredData
  );
  const deodrantsFilteredProducts = useSelector(
    (state) => state.deodrantsProducts.deodrantsfilteredData
  );

  const hairCareFilteredProducts = useSelector(
    (state) => state.hairCareProducts.hairCarefilteredData
  );
  const homeGoodsFilteredProducts = useSelector(
    (state) => state.homeGoodsProducts.homeGoodsfilteredData
  );
  const kidsFilteredProducts = useSelector(
    (state) => state.kidsProducts.kidsfilteredData
  );
  const laptopsFilteredProducts = useSelector(
    (state) => state.laptopsProducts.laptopsfilteredData
  );
  const menFilteredProducts = useSelector(
    (state) => state.menProducts.menfilteredData
  );

  const mobilesFilteredProducts = useSelector(
    (state) => state.mobilesProducts.mobilesfilteredData
  );
  const womenFilteredProducts = useSelector(
    (state) => state.womenProducts.womenfilteredData
  );
  // Combine filtered products from both slices
  const combinedFilteredProducts = [
    ...filterProdcuts,
    ...bodyCareFilteredProducts,
    ...deodrantsFilteredProducts,
    ...hairCareFilteredProducts,
    ...homeGoodsFilteredProducts,
    ...kidsFilteredProducts,
    ...laptopsFilteredProducts,
    ...menFilteredProducts,
    ...mobilesFilteredProducts,
    ...womenFilteredProducts,
  ];

  return (
    <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center gradient-title">
        Search Results
      </h2>

      {combinedFilteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 cursor-pointer">
          {combinedFilteredProducts.map((product, index) => (
            <TopProductCard key={index} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center mt-20">
          <h1 className="text-lg md:text-2xl font-bold">No Results Found</h1>
          <div className="flex justify-center items-center w-full shadow-lg shadow-blue-200 p-10 rounded-lg">
            <img
              src={notFound}
              alt="Not Found"
              className="max-w-[800px] min-w-[150px] h-auto shadow-lg shadow-blue-200 m-10 rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterData;
