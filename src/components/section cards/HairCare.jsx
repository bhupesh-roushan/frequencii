import React, { useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";

import hairCare from "../../data/hairCare.json";

import { Button } from "../ui/button";
import hairCare1 from "../../assets/hairCareImages/hairCare1.jpg";
import hairCare2 from "../../assets/hairCareImages/hairCare2.jpg";
import hairCare3 from "../../assets/hairCareImages/hairCare3.jpg";
import hairCare4 from "../../assets/hairCareImages/hairCare4.jpg";
import hairCare5 from "../../assets/hairCareImages/hairCare5.jpg";

// ... import all other images
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "@/redux/CartSlice";
import { setHairCareProducts } from "@/redux/HairCareProductSlice";

// Map the images to use dynamically
const imageMap = {
  "hairCare1.jpg": hairCare1,
  "hairCare2.jpg": hairCare2,
  "hairCare3.jpg": hairCare3,
  "hairCare4.jpg": hairCare4,
  "hairCare5.jpg": hairCare5,
};

function HairCare() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Set men products in Redux store
    dispatch(setHairCareProducts(hairCare));
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
        Hair Care Collection
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {hairCare.map((product) => (
          <Link
            to={`/hairCare/product/${product.id}`}
            key={product.id}
            className="w-full h-full"
          >
            <Card className="shadow-md shadow-blue-200 m-5">
              <CardHeader>
                <img
                  src={imageMap[product.image]}
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

export default HairCare;
