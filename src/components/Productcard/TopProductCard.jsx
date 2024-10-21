import React from "react";
import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/card";

// Import all images
import product1 from "../../assets/images/product1.jpg";
import product2 from "../../assets/images/product2.jpg";
import product3 from "../../assets/images/product3.jpg";
import product4 from "../../assets/images/product4.jpg";
import product5 from "../../assets/images/product5.jpg";
import product6 from "../../assets/images/product6.jpg";
import product7 from "../../assets/images/product7.jpg";
import product8 from "../../assets/images/product8.jpg";
import product9 from "../../assets/images/product9.jpg";
import product10 from "../../assets/images/product10.jpg";
const imageMap = {
  "product1.jpg": product1,
  "product2.jpg": product2,
  "product3.jpg": product3,
  "product4.jpg": product4,
  "product5.jpg": product5,
  "product6.jpg": product6,
  "product7.jpg": product7,
  "product8.jpg": product8,
  "product9.jpg": product9,
  "product10.jpg": product10,
};

import { addToCart } from "../../redux/CartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const TopProductCard = ({ product }) => {
  const dispatch=useDispatch()
  const handleAddToCart=(e,product)=>{
    e.stopPropagation()
    e.preventDefault()
    dispatch(addToCart(product))
    alert("Product Added")
  }
  return (
    <Link to={`/product/${product.id}`}>
    <Card className="shadow-sm shadow-blue-200 p-3 rounded-lg w-full flex flex-col  min-w-[250px] max-w-[250px] min-h-[360px] max-h-[360px] m-5 cursor-pointer">
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
      </CardHeader>

      <CardContent className="flex-grow p-0 flex flex-col gap-3">
        <img
          src={imageMap[product.image]}
          alt={product.name}
          className="w-full min-h-[150px] max-h-[150px] h-auto rounded-lg"
        />
      </CardContent>
      
      <CardDescription className="flex justify-around items-center mb-3 mt-3">
        <p className="font-bold text-black">{product.price}</p>
        <p>{`${product.stars} ⭐`}</p>
      </CardDescription>

      <CardFooter className="flex justify-center items-center mt-auto">
        <Button variant="outline" className="w-full cursor-pointer"
        onClick={(e)=>handleAddToCart(e,product)}
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
    </Link>
  );
};

export default TopProductCard;
