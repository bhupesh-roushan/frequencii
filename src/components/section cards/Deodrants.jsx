import React, { useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";

import deodrants from "../../data/deodrants.json"

import { Button } from "../ui/button";
import deodrants1 from "../../assets/deodrantsImages/deodrants1.jpg";
import deodrants2 from "../../assets/deodrantsImages/deodrants2.jpg";
import deodrants3 from "../../assets/deodrantsImages/deodrants3.jpg";
import deodrants4 from "../../assets/deodrantsImages/deodrants4.jpg";
import deodrants5 from "../../assets/deodrantsImages/deodrants5.jpg";


// ... import all other images
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "@/redux/CartSlice";
import { setDeodrantsProducts } from "@/redux/DeodrantsProductSlice";

// Map the images to use dynamically
const imageMap = {
    "deodrants1.jpg": deodrants1,
    "deodrants2.jpg": deodrants2,
    "deodrants3.jpg": deodrants3,
    "deodrants4.jpg": deodrants4,
    "deodrants5.jpg": deodrants5,
   

  };

function Deodrants() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Set men products in Redux store
    dispatch(setDeodrantsProducts(deodrants));
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
        Deodrants Perfumes Collection
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {deodrants.map((product) => (
          <Link to={`/deodrants/product/${product.id}`} key={product.id} className="w-full h-full">
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

export default Deodrants;
