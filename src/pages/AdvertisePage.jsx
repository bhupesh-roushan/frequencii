import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { FaChartBar, FaBullhorn, FaEnvelope } from "react-icons/fa";
import { BarLoader } from "react-spinners"; // Import BarLoader
import emailjs from "@emailjs/browser";

function AdvertisePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // State for loading
  const [responseMessage, setResponseMessage] = useState(""); // State for response messages

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Start loading when form is submitted
    setResponseMessage(""); // Clear any previous messages

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      message: formData.message,
      reply_to: formData.email, // Reply-to email will be the user's email
    };

    emailjs
      .send(
        'service_jz6mfuo', // Your EmailJS service ID
        'template_2b0oxnl', // Your EmailJS template ID
        templateParams, // Parameters to include
        '4MdAfipzzfBYvJnUm' // Your EmailJS public key
      )
      .then((response) => {
        setResponseMessage("Message sent successfully!"); // Set success message
        setFormData({
          name: "",
          email: "",
          message: ""
        });
        setLoading(false); // Stop loading after success

        // Set timeout to clear the message after 3 seconds
        setTimeout(() => {
          setResponseMessage("");
        }, 3000);
      })
      .catch((error) => {
        setResponseMessage("Failed to send the message. Please try again."); // Set error message
        console.error("Error sending email:", error);
        setLoading(false); // Stop loading after failure

        // Set timeout to clear the message after 3 seconds
        setTimeout(() => {
          setResponseMessage("");
        }, 3000);
      });
  };

  return (
    <div className="container mx-auto p-8 space-y-8">
      {/* Page Header */}
      <div className="flex flex-col gap-20 shadow-md shadow-blue-200 p-10">
        <div className="shadow-md shadow-blue-200 p-10 rounded-lg text-center">
          <h1 className=" text-lg sm:text-3xl md:text-4xl font-bold gradient-title mb-4">
            Advertise with Frequencii
          </h1>
          <p className="text-lg text-muted-foreground">
            Reach thousands of potential customers by advertising your brand on Frequencii.
          </p>
        </div>

        {/* Advertising Options Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Option 1 */}
          <Card className="border-none shadow-md shadow-blue-200">
            <CardHeader>
              <FaChartBar className="text-primary text-xl sm:text-4xl mb-4" />
              <CardTitle className="text-lg sm:text-xl md:text-2xl">Banner Ads</CardTitle>
              <CardDescription>
                Promote your brand with eye-catching banner ads on our website.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Get maximum visibility with our high-traffic banner ad placements.</p>
            
            </CardContent>
          </Card>

          {/* Option 2 */}
          <Card className="border-none shadow-md shadow-blue-200">
            <CardHeader>
              <FaBullhorn className="text-primary text-4xl mb-4" />
              <CardTitle className="text-lg sm:text-xl md:text-2xl">Sponsored Products</CardTitle>
              <CardDescription>
                Highlight your products directly on our ecommerce platform.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Feature your products in front of thousands of active shoppers.</p>
              
            </CardContent>
          </Card>

          {/* Option 3 */}
          <Card className="border-none shadow-md shadow-blue-200">
            <CardHeader>
              <FaEnvelope className="text-primary text-4xl mb-4" />
              <CardTitle className="text-lg sm:text-xl md:text-2xl">Email Marketing</CardTitle>
              <CardDescription>
                Reach out to our subscriber list with targeted email campaigns.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Send promotional emails to our engaged and active subscribers.</p>
              
            </CardContent>
          </Card>
        </div>

        {/* Contact Form Section */}
        <div className="shadow-md shadow-blue-200 p-10 rounded-lg">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8">Get in Touch</h2>
          <p className="text-center text-muted-foreground mb-8">
            Interested in advertising with us? Fill out the form below and our team will get back to you.
          </p>
          
          <form className="space-y-4 max-w-xl mx-auto" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium">Your Name</label>
              <Input
                id="name"
                placeholder="Enter your name"
                className="mt-1"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium">Your Email</label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="mt-1"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium">Message</label>
              <Textarea
                id="message"
                placeholder="Tell us about your advertising needs"
                className="mt-1"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <Button
              type="submit"
              variant="outline"
              className="w-full shadow-md shadow-blue-200"
              disabled={loading} // Disable button while loading
            >
              Submit
            </Button>

            {/* Show loader while loading */}
            {loading && (
              <BarLoader
                className="mt-4"
                width={"100%"}
                color="grey"
                height={"1px"}
              />
            )}

            {/* Display success or error message */}
            {responseMessage && (
              <p className={`mt-4 text-center ${responseMessage.includes("successfully") ? "text-green-600" : "text-red-600"}`}>
                {responseMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdvertisePage;
