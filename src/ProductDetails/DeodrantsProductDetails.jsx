import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../redux/CartSlice";

import deodrants1 from "../assets/deodrantsImages/deodrants1.jpg";
import deodrants2 from "../assets/deodrantsImages/deodrants2.jpg";
import deodrants3 from "../assets/deodrantsImages/deodrants3.jpg";
import deodrants4 from "../assets/deodrantsImages/deodrants4.jpg";
import deodrants5 from "../assets/deodrantsImages/deodrants5.jpg";



import { Button } from "@/components/ui/button";

const imageMap = {
  "deodrants1.jpg": deodrants1,
  "deodrants2.jpg": deodrants2,
  "deodrants3.jpg": deodrants3,
  "deodrants4.jpg": deodrants4,
  "deodrants5.jpg": deodrants5,


};

const DeodrantsProductDetails = () => {
  const { id } = useParams();
  const deodrantsProducts = useSelector((state) => state.deodrantsProducts.deodrantsProducts);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (deodrantsProducts.length > 0) {
      const newProduct = deodrantsProducts.find(
        (product) => product.id === Number(id) || product.id === id
      );
      setProduct(newProduct);
    }
  }, [id, deodrantsProducts]);

  const dispatch = useDispatch();
  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product));
    alert("Product Added");
  };

  return (
    <div className="flex flex-col items-center justify-center gap-20 m-10">
      <div className="flex flex-col w-full items-center shadow-lg shadow-blue-200 rounded-lg">
        {product ? (
          <div className="flex flex-col sm:flex-row w-[90%] gap-5 shadow-lg shadow-blue-200 p-10 m-10 rounded-lg justify-evenly">
            <div className="flex justify-center items-center">
              <img
                src={imageMap[product.image]}
                alt={product.name}
                className="min-w-[100px] max-w-[400px] rounded-lg shadow-md shadow-blue-200"
              />
            </div>
            <div className="flex min-w-[120px] gap-5 ml-5 flex-col justify-evenly items-center">
              <h1 className="text-lg sm:text-2xl font-bold gradient-title">
                {product.name}
              </h1>
              <p className="text-md sm:text-xl font-semibold">Price: ₹{product.price}</p>
              <p className="font-semibold text-sm sm:text-xl">Rating: {product.stars} ⭐</p>
              <Button
                variant="outline"
                className="shadow-md w-[100px] sm:w-full mt-5 shadow-blue-200"
                onClick={(e) => handleAddToCart(e, product)}
              >
                Add To Cart
              </Button>
            </div>
          </div>
        ) : (
          <p>Product not found</p>
        )}
      </div>
    </div>
  );
};

export default DeodrantsProductDetails;
