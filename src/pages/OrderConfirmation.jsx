import { Button } from "../components/ui/button";
import React from "react";
import { useNavigate } from "react-router-dom";

const OrderConfirmation = ({ order }) => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24 bg-white shadow-blue-200 shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Thank You For Your Order</h2>
      <p>
        Your Order has been Placed, You will receive an Email confirmation
        Shortly.{" "}
      </p>
      <div className="mt-6 p-20  border rounded-lg bg-white shadow-lg shadow-blue-200 mb-20">
        <h3>Order Summary</h3>
        <p>Order Number : {order.orderNumber}</p>
        <div className="mt-4">
          <h2 className="text-md font-semibold mb-2">Shipping Details</h2>
          <p>{order.shippingDetails.address}</p>
          <p>{order.shippingDetails.city}</p>
          <p>{order.shippingDetails.pin}</p>
        </div>
        <div className="mt-4">
          <h3 className="text-md font-semibold mb-2">Prodcuts Ordered</h3>
          {order.products.map((product) => (
            <div key={product.id} className="flex justify-between mt-2">
              <p>
                {product.name} x {product.quantity}
              </p>
              <p>
                ₹ {product.price} x {product.quantity}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-between">
          <span>Total Price:</span>
          <span className="font-semibold"> ₹ {order.totalPrice}</span>
        </div>
        <div className="flex sm:flex-row  flex-col justify-between p-20">
          <Button variant="destructive" className=" w-36 shadow-md mb-5 shadow-blue-200">
            Order Tracking
          </Button>
          <Button
            onClick={() => navigate("/")}
            variant="outline"
            className="shadow-md w-36 shadow-blue-200"
          >
            Continue Shopping
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
