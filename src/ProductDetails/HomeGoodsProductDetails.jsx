import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../redux/CartSlice";

import homeGoods1 from "../assets/HomeGoodsImages/homeGoods1.jpg";
import homeGoods2 from "../assets/HomeGoodsImages/homeGoods2.jpg";
import homeGoods3 from "../assets/HomeGoodsImages/homeGoods3.jpg";
import homeGoods4 from "../assets/HomeGoodsImages/homeGoods4.jpg";

import { Button } from "@/components/ui/button";

const imageMap = {
  "homeGoods1.jpg": homeGoods1,
  "homeGoods2.jpg": homeGoods2,
  "homeGoods3.jpg": homeGoods3,
  "homeGoods4.jpg": homeGoods4,
};

const HomeGoodsProductDetails = () => {
  const { id } = useParams();
  const homeGoodsProducts = useSelector((state) => state.homeGoodsProducts.homeGoodsProducts);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (homeGoodsProducts.length > 0) {
      const newProduct = homeGoodsProducts.find(
        (product) => product.id === Number(id) || product.id === id
      );
      setProduct(newProduct);
    }
  }, [id, homeGoodsProducts]);

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

export default HomeGoodsProductDetails;
