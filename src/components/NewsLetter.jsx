import React, { useState } from "react";
import emailjs from "@emailjs/browser"; // Corrected import
import { Input } from "./ui/input";
import { BarLoader } from "react-spinners";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function Newsletter() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false); // Loading state

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const sendNewsletter = (e) => {
    e.preventDefault();

    setLoading(true);

    const templateParams = {
      to_email: email,
      to_name: name,
      from_name: "Cubekit Connect",
      message: "🎉 Welcome to the Cubekit Newsletter!",
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Subscription successful! Check your inbox.");

          setEmail("");
          setName("");

          // Hide status message after 3 seconds
          setTimeout(() => {
            setStatus("");
          }, 3000);
        },
        (error) => {
          console.log("FAILED...", error);
          setStatus("Subscription failed. Please try again.");

          // Hide error message after 3 seconds
          setTimeout(() => {
            setStatus("");
          }, 3000);
        }
      )
      .finally(() => {
        setLoading(false); // Stop loader
      });
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="pb-4 text-gray-500 text-center">
        Subscribe to Our Newsletter
      </p>
      <form
        onSubmit={sendNewsletter}
        className="flex flex-col md:flex-row gap-5 items-center"
      >
        <div className="flex flex-col gap-5 justify-center items-center">
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <Input
              type="text"
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
              required
              className=" text-black w-full md:w-1/2 shadow-md hover:shadow-blue-300 shadow-blue-200 transition-all ease-in delay-110"
            />
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              required
              className=" text-black w-full md:w-1/2 shadow-md hover:shadow-blue-300 shadow-blue-200 transition-all ease-in delay-110"
            />
          </div>
          <div className="w-full">
            {/* Change the button's layout based on screen size */}
            <button
              type="submit"
              className="bg-white text-black opacity-95 hover:opacity-100 p-2 rounded-lg shadow-lg shadow-blue-200 hover:shadow-lg hover:shadow-blue-300 transition-all delay-130 ease-in hover:translate-y-1 w-full mb-4"
            >
              Subscribe
            </button>
          </div>
        </div>
      </form>

      {/* Show the BarLoader while loading */}
      {loading && (
        <BarLoader
          className="mt-4"
          width={"100%"}
          color="grey"
          height={"1px"}
        />
      )}

      {/* Show the status message and it disappears after 3 seconds */}
      {status && <p className="mt-2">{status}</p>}
    </div>
  );
}

export default Newsletter;
