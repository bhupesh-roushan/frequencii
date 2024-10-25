import React from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";

// Import all images
import imageMap from "../../pages/imageMap";
import { addToCart } from "../../redux/CartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const TopProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product));
    alert("Product Added");
  };

  return (
    <Link to={`/product/${product.id}`} className="w-full h-full">
      <Card className="shadow-md shadow-blue-200 p-1 rounded-lg max-w-[200px] h-full flex flex-col cursor-pointer">
        {/* Card Header */}
        <CardHeader>
          <CardTitle className="text-xl sm:text-2xl text-center">
            {product.name}
          </CardTitle>
        </CardHeader>

        {/* Card Content */}
        <CardContent className="flex-grow flex flex-col items-center justify-center">
          <img
            src={imageMap[product.image]}
            alt={product.name}
            className="min-w-[100px] max-w-[100px] object-cover rounded-lg"
          />
        </CardContent>

        {/* Card Description */}
        <CardDescription className="flex justify-around items-center mb-3 mt-3 text-sm sm:text-base">
          <p className="font-bold text-black">₹{product.price}</p>
          <p>{`${product.stars} ⭐`}</p>
        </CardDescription>

        {/* Card Footer */}
        <CardFooter className="flex justify-center items-center mt-auto">
          <Button
            variant="outline"
            className="w-24 cursor-pointer"
            onClick={(e) => handleAddToCart(e, product)}
          >
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default TopProductCard;
