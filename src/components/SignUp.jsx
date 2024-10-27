import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const SignUp = ({ openLoginForm }) => {
  return (
    <div className="m-5 shadow-lg shadow-blue-200 p-5 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 gradient-title text-center">Sign Up</h2>
      <form action="">
        <div className="mb-4">
          <Label htmlFor="" className="block text-gray-700 pb-2">
            Name
          </Label>
          <Input
            type="text"
            className="w-full px-3 py-2 border"
            placeholder="Enter Your Name"
          ></Input>
        </div>

        <div className="mb-4">
          <Label htmlFor="" className="block text-gray-700 pb-2">
            Email
          </Label>
          <Input
            type="email"
            className="w-full px-3 py-2 border"
            placeholder="Enter Email"
          ></Input>
        </div>

        <div className="mb-4">
          <Label htmlFor="" className="block text-gray-700 pb-2">
            Password
          </Label>
          <Input
            type="password"
            className="w-full px-3 py-2 border"
            placeholder="Enter Password"
          ></Input>
        </div>

        <div className="mb-4">
          <Button
            variant="outline"
            type="submit"
            className="w-full shadow-md shadow-blue-200 py-2"
          >
            Sign Up
          </Button>
        </div>
      </form>

      <div className="text-center">
        <span className="text-gray-700">Already have an Account?</span>
        <Button
          variant="outline"
          onClick={openLoginForm}
          className="ml-2 shadow-md shadow-blue-200"
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default SignUp;
