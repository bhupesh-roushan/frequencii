import React from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

const Login = ({ openSignUpForm }) => {
  return (
    <div className="m-5 shadow-lg shadow-blue-200 p-5 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center gradient-title">Login</h2>
      <form className="p-5">
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
        <div className="mb-4 flex flex-col gap-2 sm:flex-row items-center justify-between">
          <Label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox"></input>
            <span className="ml-2 text-gray-700">Remember me</span>
          </Label>
          <a href="#" className="text-red-600">
            Forgot Password
          </a>
        </div>

        <div className="mb-4">
          <Button
            variant="outline"
            type="submit"
            className="w-full shadow-md shadow-blue-200 py-2 "
          >
            Login
          </Button>
        </div>
      </form>

      <div className="text-center">
        <span className="text-gray-700">Don't have an Account?</span>
        <Button
          variant="outline"
          className="ml-2 shadow-md shadow-blue-200"
          onClick={openSignUpForm}
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default Login;
