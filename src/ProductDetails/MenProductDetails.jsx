import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../redux/CartSlice";

import men1 from "../assets/mens images/men1.jpg";
import men2 from "../assets/mens images/men2.jpg";
import men3 from "../assets/mens images/men3.jpg";
import men4 from "../assets/mens images/men4.jpg";
import men5 from "../assets/mens images/men5.jpg";
import men6 from "../assets/mens images/men6.jpg";
import men7 from "../assets/mens images/men7.jpg";
import men8 from "../assets/mens images/men8.jpg";
import men9 from "../assets/mens images/men9.jpg";
import men10 from "../assets/mens images/men10.jpg";
import men11 from "../assets/mens images/men11.jpg";
import men12 from "../assets/mens images/men12.jpg"
import { Button } from "@/components/ui/button";

const imageMap = {
  "men1.jpg": men1,
  "men2.jpg": men2,
  "men3.jpg": men3,
  "men4.jpg": men4,
  "men5.jpg": men5,
  "men6.jpg": men6,
  "men7.jpg": men7,
  "men8.jpg": men8,
  "men9.jpg": men9,
  "men10.jpg": men10,
  "men11.jpg": men11,
  "men12.jpg": men12,
};

const MenProductDetails = () => {
  const { id } = useParams();
  const menProducts = useSelector((state) => state.menProducts.menProducts);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (menProducts.length > 0) {
      const newProduct = menProducts.find(
        (product) => product.id === Number(id) || product.id === id
      );
      setProduct(newProduct);
    }
  }, [id, menProducts]);

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

export default MenProductDetails;
