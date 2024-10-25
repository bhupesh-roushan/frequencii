import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import emptyCart from "../assets/images/emptyCart.jpg";
import { FaTrashAlt } from "react-icons/fa";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/CartSlice";

// Import all images
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
import men1 from "../assets/mens images/men1.jpg"
import men2 from '../assets/mens images/men2.jpg';
import men3 from '../assets/mens images/men3.jpg';
import men4 from '../assets/mens images/men4.jpg';
import men5 from '../assets/mens images/men5.jpg';
import men6 from '../assets/mens images/men6.jpg';
import men7 from '../assets/mens images/men7.jpg';
import men8 from '../assets/mens images/men8.jpg';
import men9 from '../assets/mens images/men9.jpg';
import men10 from '../assets/mens images/men10.jpg';
import men11 from '../assets/mens images/men11.jpg';
import men12 from '../assets/mens images/men12.jpg';
import women1 from "../assets/womenImages/women1.jpg";
import women2 from "../assets/womenImages/women2.jpg";
import women3 from "../assets/womenImages/women3.jpg";
import women4 from "../assets/womenImages/women4.jpg";
import women5 from "../assets/womenImages/women5.jpg";
import women6 from "../assets/womenImages/women6.jpg";
import women7 from "../assets/womenImages/women7.jpg";
import women8 from "../assets/womenImages/women8.jpg";
import women9 from "../assets/womenImages/women9.jpg";
import women10 from "../assets/womenImages/women10.jpg";
import women11 from "../assets/womenImages/women11.jpg";
import women12 from "../assets/womenImages/women12.jpg";
import women13 from "../assets/womenImages/women13.jpg";
import women14 from "../assets/womenImages/women14.jpg";
import women15 from "../assets/womenImages/women15.jpg";
import women16 from "../assets/womenImages/women16.jpg";
import women17 from "../assets/womenImages/women17.jpg";
import women18 from "../assets/womenImages/women18.jpg";
import women19 from "../assets/womenImages/women19.jpg";
import women20 from "../assets/womenImages/women20.jpg";
import women21 from "../assets/womenImages/women21.jpg";
import women22 from "../assets/womenImages/women22.jpg";




import { Button } from "../components/ui/button";
import Modal from "../components/Modal";
import ChangeAddress from "../components/ChangeAddress";
import { useNavigate } from "react-router-dom";

// Create an object to map image names to imports
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
  'men1.jpg': men1,
  'men2.jpg': men2,
  'men3.jpg': men3,
  'men4.jpg': men4,
  'men5.jpg': men5,
  'men6.jpg': men6,
  'men7.jpg': men7,
  'men8.jpg': men8,
  'men9.jpg': men9,
  'men10.jpg': men10,
  'men11.jpg': men11,
  'men12.jpg': men12,
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




// import all the images...




const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [address, setAddress] = useState("Avalahahlli,Bengaluru,560064");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate=useNavigate()

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24 shadow-lg shadow-blue-200 rounded-lg">
      {cart.products.length > 0 ? (
        <div>
          <h3 className="text-2xl font-semibold mb-4">SHOPPING CART</h3>
          <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
            <div className="md:w-2/3 mb-10">
              <div className="flex justify-between border-b items-center mb-4 text-xs font-bold">
                <p className="mb-2">Products</p>
                <div className="flex space-x-8">
                  <p>Price</p>
                  <p>Quantity</p>
                  <p>Sub Total</p>
                  <p>Remove</p>
                </div>
              </div>

              <div>
                {cart.products.map((products) => (
                  <div
                    key={products.id}
                    className="flex items-center justify-between p-3 border-b"
                  >
                    <div className="md:flex items-center space-x-4">
                      <img
                        src={imageMap[products.image]}
                        alt={products.name}
                        className="w-16 h-16 object-contain rounded-2xl"
                      />

                      <div className="flex ml-4">
                        <h3 className="text-lg font-semibold">
                          {products.name}
                        </h3>
                      </div>
                    </div>
                    <div className="flex space-x-8 items-center">
                      <p>{products.price} </p>
                      <div className="flex items-center justify-center border">
                        <button
                          className="text-xl font-bold px-1.5 border-r"
                          onClick={() =>
                            dispatch(decreaseQuantity(products.id))
                          }
                        >
                          -
                        </button>
                        <p className="text-xl px-2">{products.quantity}</p>

                        <button
                          className="text-xl px-1 border-l"
                          onClick={() =>
                            dispatch(increaseQuantity(products.id))
                          }
                        >
                          +
                        </button>
                      </div>

                      <p>
                        {(typeof products.price === "string"
                          ? parseFloat(products.price.replace(/,/g, ""))
                          : products.price) * parseInt(products.quantity, 10)}
                        ₹
                      </p>

                      <button className="text-red-500 hover:text-red-600 hover:scale-105 transition-all ease-in-out delay-120">
                        <FaTrashAlt
                          onClick={() => dispatch(removeFromCart(products.id))}
                        />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md shadow-blue-200 border">
              <h3 className="text-sm font-semibold mb-5">Cart Total</h3>
              <div className="flex justify-between mb-5 border-b pb-1">
                <span className="text-sm">Total Items:</span>
                <span>{cart.totalQuantity}</span>
              </div>

              <div className="mb-4 border-b pb-2">
                <p className="font-semibold text-sm">Shipping</p>
                <p>Shipping To:</p>
                <span className="text-xs font-bold">{address}</span>
                <Button
                  className="mt-2 ml-2"
                  variant="outline"
                  onClick={() => setIsModalOpen(true)}
                >
                  Change Address
                </Button>
              </div>
              <div className="flex justify-between mb-4">
                <span>Total Price:</span>
                <span> {cart.totalPrice} ₹</span>
              </div>
              <Button
                className="w-full shadow-sm shadow-blue-200 hover:animate-pulse"
                variant="outline"
                onClick={()=>navigate('/checkout')}
              >
                Proceed To Checkout
              </Button>
            </div>
          </div>

          <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
            <ChangeAddress
              setAddress={setAddress}
              setIsModalOpen={setIsModalOpen}
            />
          </Modal>
        </div>
      ) : (
        <div className="flex flex-col gap-5 justify-center items-center  p-5">
          <h1 className="font-extrabold gradient-title text-xl sm:text-2xl md:text-3xl lg:text-5xl mt-5">
            Your Cart Is Empty
          </h1>
          <img
            src={emptyCart}
            alt="Empty Cart Image"
            className="container rounded-lg max-h-[700px] max-w-[1000px] m-5 shadow-lg shadow-blue-300"
          />
        </div>
      )}
    </div>
  );
};

export default Cart;
