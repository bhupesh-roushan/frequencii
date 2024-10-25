import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../redux/CartSlice";

import mobiles1 from "../assets/mobilesImages/mobiles1.jpg";
import mobiles2 from "../assets/mobilesImages/mobiles2.jpg";
import mobiles3 from "../assets/mobilesImages/mobiles3.jpg";
import mobiles4 from "../assets/mobilesImages/mobiles4.jpg";

import { Button } from "@/components/ui/button";

const imageMap = {
  "mobiles1.jpg": mobiles1,
  "mobiles2.jpg": mobiles2,
  "mobiles3.jpg": mobiles3,
  "mobiles4.jpg": mobiles4,
};

const MobilesProductDetails = () => {
  const { id } = useParams();
  const mobilesProducts = useSelector((state) => state.mobilesProducts.mobilesProducts);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (mobilesProducts.length > 0) {
      const newProduct = mobilesProducts.find(
        (product) => product.id === Number(id) || product.id === id
      );
      setProduct(newProduct);
    }
  }, [id, mobilesProducts]);

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

export default MobilesProductDetails;
