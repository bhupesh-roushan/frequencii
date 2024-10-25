import React, { useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../../components/ui/card";

import mobiles from "../../data/mobiles.json"

import { Button } from "../../components/ui/button";
import mobiles1 from "../../assets/mobilesImages/mobiles1.jpg";
import mobiles2 from "../../assets/mobilesImages/mobiles2.jpg";
import mobiles3 from "../../assets/mobilesImages/mobiles3.jpg";
import mobiles4 from "../../assets/mobilesImages/mobiles4.jpg";

// ... import all other images
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "@/redux/CartSlice";
import { setMobilesProducts } from "@/redux/MobilesProductSlice";

// Map the images to use dynamically
const imageMap = {
    "mobiles1.jpg": mobiles1,
    "mobiles2.jpg": mobiles2,
    "mobiles3.jpg": mobiles3,
    "mobiles4.jpg": mobiles4,
  
  };

function Mobiles() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Set men products in Redux store
    dispatch(setMobilesProducts(mobiles));
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
        Mobiles Collection
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {mobiles.map((product) => (
          <Link to={`/mobiles/product/${product.id}`} key={product.id} className="w-full h-full">
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

export default Mobiles;
