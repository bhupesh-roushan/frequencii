import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../../components/ui/card";
import topProducts from "../../data/topProducts.json";
import { Button } from "../../components/ui/button";
import imageMap from "../../pages/imageMap";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/CartSlice";

function Women() {
  const dispatch = useDispatch();
  const women = topProducts.filter(product => product.category === "women");

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product));
    alert("Product Added");
  };

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-4xl font-bold mb-6 text-center gradient-title">
        Women's Collection
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {women.map((product) => (
          <Link
          to={`/${product.category}/product/${product.id}`}
            key={product.id}
            className="w-full h-full"
          >
            <Card className="shadow-md shadow-blue-200 ">
              <CardHeader>
                <img
                  src={imageMap[product.image]}
                  alt={product.name}
                  className="w-full h-48 mb-6 object-cover rounded-lg shadow-sm shadow-blue-200"
                />
                <CardTitle>{product.name}</CardTitle>
                <CardDescription className="text-md font-medium pt-2">Price: ₹{product.price}</CardDescription>
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