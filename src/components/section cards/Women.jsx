import React, { useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import women from "../../data/women.json"; 

import women1 from "../../assets/womenImages/women1.jpg";
import women2 from "../../assets/womenImages/women2.jpg";
import women3 from "../../assets/womenImages/women3.jpg";
import women4 from "../../assets/womenImages/women4.jpg";
import women5 from "../../assets/womenImages/women5.jpg";
import women6 from "../../assets/womenImages/women6.jpg";
import women7 from "../../assets/womenImages/women7.jpg";
import women8 from "../../assets/womenImages/women8.jpg";
import women9 from "../../assets/womenImages/women9.jpg";
import women10 from "../../assets/womenImages/women10.jpg";
import women11 from "../../assets/womenImages/women11.jpg";
import women12 from "../../assets/womenImages/women12.jpg";
import women13 from "../../assets/womenImages/women13.jpg";
import women14 from "../../assets/womenImages/women14.jpg";
import women15 from "../../assets/womenImages/women15.jpg";
import women16 from "../../assets/womenImages/women16.jpg";
import women17 from "../../assets/womenImages/women17.jpg";
import women18 from "../../assets/womenImages/women18.jpg";
import women19 from "../../assets/womenImages/women19.jpg";
import women20 from "../../assets/womenImages/women20.jpg";
import women21 from "../../assets/womenImages/women21.jpg";
import women22 from "../../assets/womenImages/women22.jpg";


import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "@/redux/CartSlice";
import { setWomenProducts } from "@/redux/WomenProductSlice";

// Map the images to use dynamically
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
  

function Women() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Set men products in Redux store
    dispatch(setWomenProducts(women));
  }, [dispatch]);

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product));
    alert("Product Added");
  };

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-4xl font-bold mb-6 text-center gradient-title">
        Men's Collection
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {women.map((product) => (
          <Link to={`/women/product/${product.id}`} key={product.id} className="w-full h-full">
            <Card className="shadow-md shadow-blue-200 m-5">
              <CardHeader>
                <img
                  src={imageMap[product.image]} // Use the image map
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg shadow-sm shadow-blue-200"
                />
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>Price: ₹{product.price}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Rating: {product.stars} ⭐</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  className="shadow-md shadow-blue-200"
                  onClick={(e) => handleAddToCart(e, product)}
                >
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Women;
