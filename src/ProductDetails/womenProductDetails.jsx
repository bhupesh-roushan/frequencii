import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../redux/CartSlice";

import women1 from "../assets/womenImages/women1.jpg";
import women2 from "../assets/womenImages/women2.jpg";
import women3 from "../assets/womenImages/women3.jpg";
import women4 from "../assets/womenImages/women4.jpg";
import women5 from "../assets/womenImages/women5.jpg";
import women6 from "../assets/womenImages/women6.jpg";
import women7 from "../assets/womenImages/women7.jpg";
import women8 from "../assets/womenImages/women8.jpg";
import women9 from "../assets/womenImages/women9.jpg";
import women10 from "../assets/womenImages/women10.jpg";
import women11 from "../assets/womenImages/women11.jpg";
import women12 from "../assets/womenImages/women12.jpg";
import women13 from "../assets/womenImages/women13.jpg";
import women14 from "../assets/womenImages/women14.jpg";
import women15 from "../assets/womenImages/women15.jpg";
import women16 from "../assets/womenImages/women16.jpg";
import women17 from "../assets/womenImages/women17.jpg";
import women18 from "../assets/womenImages/women18.jpg";
import women19 from "../assets/womenImages/women19.jpg";
import women20 from "../assets/womenImages/women20.jpg";
import women21 from "../assets/womenImages/women21.jpg";
import women22 from "../assets/womenImages/women22.jpg";
import { Button } from "@/components/ui/button";

const imageMap = {
    "women1.jpg": women1,
    "women2.jpg": women2,
    "women3.jpg": women3,
    "women4.jpg": women4,
    "women5.jpg": women5,
    "women6.jpg": women6,
    "women7.jpg": women7,
    "women8.jpg": women8,
    "women9.jpg": women9,
    "women10.jpg": women10,
    "women11.jpg": women11,
    "women12.jpg": women12,
    "women13.jpg": women13,
    "women14.jpg": women14,
    "women15.jpg": women15,
    "women16.jpg": women16,
    "women17.jpg": women17,
    "women18.jpg": women18,
    "women19.jpg": women19,
    "women20.jpg": women20,
    "women21.jpg": women21,
    "women22.jpg": women22
  };

const WomenProductDetails = () => {
  const { id } = useParams();
  const womenProducts = useSelector((state) => state.womenProducts.womenProducts);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (womenProducts.length > 0) {
      const newProduct = womenProducts.find(
        (product) => product.id === Number(id) || product.id === id
      );
      setProduct(newProduct);
    }
  }, [id, womenProducts]);

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

export default WomenProductDetails;
