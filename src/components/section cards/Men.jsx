import React, { useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../../components/ui/card";

import men from "../../data/men.json"; // Ensure this path is correct

import { Button } from "../../components/ui/button";
import men1 from "../../assets/mens images/men1.jpg";
import men2 from "../../assets/mens images/men2.jpg";
import men3 from "../../assets/mens images/men3.jpg";
import men4 from "../../assets/mens images/men4.jpg";
import men5 from "../../assets/mens images/men5.jpg";
import men6 from "../../assets/mens images/men6.jpg";
import men7 from "../../assets/mens images/men7.jpg";
import men8 from "../../assets/mens images/men8.jpg";
import men9 from "../../assets/mens images/men9.jpg";
import men10 from "../../assets/mens images/men10.jpg";
import men11 from "../../assets/mens images/men11.jpg";
import men12 from "../../assets/mens images/men12.jpg";
// ... import all other images
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "@/redux/CartSlice";
import { setMenProducts } from "@/redux/menProductSlice";

// Map the images to use dynamically
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

function Men() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Set men products in Redux store
    dispatch(setMenProducts(men));
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
        {men.map((product) => (
          <Link to={`/men/product/${product.id}`} key={product.id} className="w-full h-full">
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

export default Men;
