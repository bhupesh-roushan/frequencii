import React, { useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../../components/ui/card";

import laptops from "../../data/laptops.json"

import { Button } from "../../components/ui/button";
import laptops1 from "../../assets/laptopsImages/laptops1.jpg";
import laptops2 from "../../assets/laptopsImages/laptops2.jpg";
import laptops3 from "../../assets/laptopsImages/laptops3.jpg";
import laptops4 from "../../assets/laptopsImages/laptops4.jpg";

// ... import all other images
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "@/redux/CartSlice";
import { setLaptopsProducts } from "@/redux/LaptopsProductSlice";

// Map the images to use dynamically
const imageMap = {
    "laptops1.jpg": laptops1,
    "laptops2.jpg": laptops2,
    "laptops3.jpg": laptops3,
    "laptops4.jpg": laptops4,
  
  };

function Laptops() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Set men products in Redux store
    dispatch(setLaptopsProducts(laptops));
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
        Laptops Collection
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {laptops.map((product) => (
          <Link to={`/laptops/product/${product.id}`} key={product.id} className="w-full h-full">
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

export default Laptops;
