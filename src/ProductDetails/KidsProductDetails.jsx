import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../redux/CartSlice";

import kids1 from "../assets/kidsImages/kids1.jpg";
import kids2 from "../assets/kidsImages/kids2.jpg";
import kids3 from "../assets/kidsImages/kids3.jpg";
import kids4 from "../assets/kidsImages/kids4.jpg";
import kids5 from "../assets/kidsImages/kids5.jpg";
import kids6 from "../assets/kidsImages/kids6.jpg";

import { Button } from "@/components/ui/button";

const imageMap = {
    "kids1.jpg": kids1,
    "kids2.jpg": kids2,
    "kids3.jpg": kids3,
    "kids4.jpg": kids4,
    "kids5.jpg": kids5,
    "kids6.jpg": kids6,
  };
  

const KidsProductDetails = () => {
  const { id } = useParams();
  const kidsProducts = useSelector((state) => state.kidsProducts.kidsProducts);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (kidsProducts.length > 0) {
      const newProduct = kidsProducts.find(
        (product) => product.id === Number(id) || product.id === id
      );
      setProduct(newProduct);
    }
  }, [id, kidsProducts]);

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

export default KidsProductDetails;
