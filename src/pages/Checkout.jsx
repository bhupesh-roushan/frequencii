import React, { useState } from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { useSelector } from "react-redux";

// Import images
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
import { useNavigate } from "react-router-dom";

// Create an image map to associate product image names with imports
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

const Checkout = ({ setOrder }) => {
  const [paymentMethod, setPaymentMethod] = useState("Cash On Delivery");
  const cart = useSelector((state) => state.cart);

  // Local state variables for the shipping details inputs
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pin, setPin] = useState("");

  const [shippingDetails, setShippingDetails] = useState({
    address: "",
    city: "",
    pin: "",
  });

  // State variable to show success message
  const [successMessage, setSuccessMessage] = useState("");

  // Function to handle saving shipping details
  const handleShippingDetails = () => {
    setShippingDetails({ address, city, pin });
    setSuccessMessage("Address saved!");
    setAddress("");
    setCity("");
    setPin("");
    setTimeout(() => {
      setSuccessMessage("");
    }, 2000);
  };


  const navigate = useNavigate();

  const handleOrder = () => {
    const newOrder = {
      products: cart.products,
      orderNumber: "1234",
      shippingDetails: shippingDetails,
      totalPrice: cart.totalPrice,
    };
    setOrder(newOrder);
    navigate("/orderConfirmation");
  };

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      <h3 className="text-2xl font-semibold mb-4">Checkout</h3>
      <div className="flex flex-col md:flex-row justify-between md:space-x-10 space-y-8 md:space-y-0 mt-8">
        <div className="md:w-2/3">
          <div>
            <Tabs defaultValue="account" className="w-full">
              <TabsList className="flex justify-between md:flex-row md:space-x-2 bg-gray-50 w-full shadow-md shadow-blue-200">
                <TabsTrigger
                  value="billing"
                  className="text-xs md:text-base px-4 py-2"
                >
                  <span className="block md:hidden">Billing</span>
                  <span className="hidden md:block">Billing Details</span>
                </TabsTrigger>
                <TabsTrigger
                  value="shipping"
                  className="text-xs md:text-base px-4 py-2"
                >
                  <span className="block md:hidden">Shipping</span>
                  <span className="hidden md:block">Shipping Details</span>
                </TabsTrigger>
                <TabsTrigger
                  value="payment"
                  className="text-xs md:text-base px-4 py-2"
                >
                  <span className="block md:hidden">Payment</span>
                  <span className="hidden md:block">Payment Method</span>
                </TabsTrigger>
              </TabsList>

              {/* Billing details */}
              <TabsContent value="billing">
                <Card className="shadow-md shadow-blue-200">
                  <CardHeader>
                    <CardTitle>Billing Details</CardTitle>
                    <CardDescription>Enter The Details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Name" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" placeholder="Email" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="mobile">Mobile Number</Label>
                      <Input id="mobile" placeholder="Mobile Number" />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-start">
                    <Button
                      variant="outline"
                      className="shadow-md shadow-blue-200"
                    >
                      Save
                    </Button>
                  </CardFooter>
                </Card>
                {/* Success Message */}
                {successMessage && (
                  <p className="text-green-500 mt-2">{successMessage}</p>
                )}
              </TabsContent>

              {/* Shipping Details */}

              <TabsContent value="shipping">
                <Card className="shadow-md shadow-blue-200">
                  <CardHeader>
                    <CardTitle>Shipping Details</CardTitle>
                    <CardDescription>Enter Shipping Details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        name="address"
                        placeholder="Enter Your Address"
                        value={address} // Bind the input to the state
                        onChange={(e) => setAddress(e.target.value)} // Update address state
                      />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        name="city"
                        placeholder="Enter Your City"
                        value={city} // Bind the input to the state
                        onChange={(e) => setCity(e.target.value)} // Update city state
                      />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="pin">Pin Code</Label>
                      <Input
                        id="pin"
                        name="pin"
                        placeholder="Enter Your Pin Code"
                        value={pin} // Bind the input to the state
                        onChange={(e) => setPin(e.target.value)} // Update pin state
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-start flex-col">
                    <Button
                      variant="outline"
                      className="shadow-md shadow-blue-200"
                      onClick={handleShippingDetails}
                    >
                      Save
                    </Button>
                    {/* Success Message */}
                    {successMessage && (
                      <p className="text-green-500 mt-2">{successMessage}</p>
                    )}
                  </CardFooter>
                </Card>
              </TabsContent>
              {console.log(shippingDetails)}
              {/* Payment method */}
              <TabsContent value="payment">
                <Card className="shadow-md shadow-blue-200">
                  <CardHeader>
                    <CardTitle>Payment Method</CardTitle>
                    <CardDescription>Enter Payment Details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center mb-2 gap-1">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === "Cash On Delivery"}
                        onChange={() => setPaymentMethod("Cash On Delivery")}
                      />
                      <label>Cash On Delivery</label>
                    </div>

                    <div className="flex items-center mb-2 gap-1">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === "Debit Card"}
                        onChange={() => setPaymentMethod("Debit Card")}
                      />
                      <label>Debit Card</label>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col justify-start items-start gap-2">
                    <Button
                      variant="outline"
                      className="shadow-md shadow-blue-200"
                    >
                      Save
                    </Button>
                    <div className="flex flex-col mt-5">
                      {paymentMethod === "Debit Card" ? (
                        <div className="bg-white p-4 rounded-lg mb-4 shadow-lg shadow-blue-300 min-w-[200px]">
                          <h3 className="text-xl font-semibold mb-4">
                            Debit Card Details
                          </h3>

                          <div className="flex flex-col gap-1 mb-4">
                            <label className="block text-gray-700 font-semibold mb-2">
                              Card Number
                            </label>
                            <input
                              type="text"
                              placeholder="Card Number"
                              className="border p-2 w-full rounded-lg"
                            />
                          </div>
                          <div className="flex flex-col gap-1 mb-5">
                            <label className="block text-gray-700 font-semibold mb-2">
                              Card Holder Name
                            </label>
                            <input
                              type="text"
                              placeholder="Card Holder Name"
                              className="border p-2 rounded-lg"
                            />
                          </div>
                          <div className="flex flex-col md:flex-row gap-4 mb-5">
                            <div className="flex flex-col gap-1 w-full">
                              <label className="block text-gray-700 font-semibold mb-2">
                                Expiration Date
                              </label>
                              <input
                                type="text"
                                placeholder="MM/YY"
                                className="border p-2 rounded-lg"
                              />
                            </div>
                            <div className="flex flex-col gap-1 w-full">
                              <label className="block text-gray-700 font-semibold mb-2">
                                CVV
                              </label>
                              <input
                                type="text"
                                placeholder="CVV"
                                className="border p-2 rounded-lg"
                              />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="text-gray-500">
                          Please select your payment method.
                        </div>
                      )}
                    </div>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Order Summary */}
        <div className="md:w-1/3">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          <Card className="shadow-md shadow-blue-200">
            <CardContent className="mt-5">
              {cart.products.map((item) => (
                <div key={item.id} className="flex items-center mb-4">
                  <img
                    src={imageMap[item.image]} // use imageMap for dynamic image import
                    alt={item.name}
                    className="h-16 w-16 rounded-md"
                  />
                  <div className="ml-4 flex-grow">
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-gray-500">Price: ₹{item.price}</p>
                    <p className="text-gray-500">Qty: {item.quantity}</p>
                  </div>
                  <span className="font-semibold">
                    ₹{item.price * item.quantity}
                  </span>
                </div>
              ))}
            </CardContent>
            <CardFooter className="flex justify-between flex-col gap-10">
              <div className="flex flex-row w-full justify-evenly">
                <h4 className="font-semibold">Total Price: </h4>
                <span className="font-semibold">
                  ₹
                  {cart.products.reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  )}
                </span>
              </div>

              <div>
                {/* Calculate the total price and conditionally render the button */}
                {cart.products.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0
                ) > 0 && (
                  <Button
                    variant="outline"
                    className="shadow-md shadow-blue-200"
                    onClick={handleOrder}
                  >
                    Place Order
                  </Button>
                )}
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Checkout;



