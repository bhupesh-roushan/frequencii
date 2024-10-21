import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../redux/CartSlice";

import product1 from "../assets/images/product1.jpg";
import product2 from "../assets/images/product2.jpg";
import product3 from "../assets/images/product3.jpg";
import product4 from "../assets/images/product4.jpg";
import product5 from "../assets/images/product5.jpg";
import product6 from "../assets/images/product6.jpg";
import product7 from "../assets/images/product7.jpg";
import product8 from "../assets/images/product8.jpg";
import product9 from "../assets/images/product9.jpg";
import product10 from "../assets/images/product10.jpg";
import { Button } from "../components/ui/button";


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

const ProductDetail = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.product.products); // Access
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (products.length > 0) {
      const newProduct = products.find(
        (product) => product.id === Number(id) || product.id === id
      );
      setProduct(newProduct);
    }
  }, [id, products]);

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

            <div className="mr-20">
            <img
              src={imageMap[product.image]}
              alt={product.name}
              className=" min-w-[150px]  rounded-lg"
              
            />

            </div>
            <div className="flex min-w-[250px]  p-5 flex-col justify-evenly">
                <h1 className="text-2xl font-bold gradient-title">{product.name}</h1>
                <p className="text-xl font-semibold">Price: {product.price}</p>
            
                <p className="font-semibold">Rating: {product.stars} ⭐</p>
                </div>
            
           
            
          </div>
        ) : (
          <p>Product not found</p>
        )}
      </div>



      <div className="flex w-full flex-col gap-5 sm:flex-row justify-evenly items-center">
        {/* <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
        <label htmlFor="">Quantity</label>
        <Input
          type="number"
          min="1"
          id="quantity"

          className="border p-1 w-20 text-black shadow-lg shadow-blue-200 outline "
        />
        </div> */}
        <Button
          variant="outline"
          className="shadow-md shadow-blue-200"
          onClick={(e) => handleAddToCart(e, product)}
        >
          Add To Cart
        </Button>
      </div>



    </div>
  );
};

export default ProductDetail;
