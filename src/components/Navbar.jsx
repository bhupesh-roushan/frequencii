import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../components/ui/input";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { Button } from "../components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import Login from "./Login";
import SignUp from "./SignUp";
import { setSearchTerm } from "../redux/ProductSlice";

import frequencii from "../assets/images/frequencii.svg"


const Navbar = () => {
  const[isModalOpen,setIsModalOpen]=useState(false)
  const[isLogin,setIsLogin]=useState(true)
  const [search,setSearch]=useState()
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const handleSearch=(e)=>{
    e.preventDefault()
    dispatch(setSearchTerm(search))
    navigate("")
  }

  const openSignUpForm=()=>{
    setIsLogin(false)
    setIsModalOpen(true)
  }

  const openLoginForm=()=>{
    setIsLogin(true)
    setIsModalOpen(true)
  }

  const products = useSelector((state) => state.cart.products);
  return (
    <nav className="bg-white shadow-md shadow-blue-200  min-w-full max-w-full mb-5 rounded-sm pb-2">
      <div className="flex flex-row justify-center items-center pt-0 pb-0">
        <div>
          <Link to="/">
            <img
              className=" hover:scale-105 transition-all ease-in delay-120 min-w-[50px] w-[60px]  mr-5 ml-5 sm:w-[80px] md:w-[90px] lg:w-[100px]"
              src={frequencii}
              alt="Flora & Fauna"
            />
          </Link>
        </div>
        <div className="container mx-auto  px-1 md:px-4 lg:px-5 py-4 flex justify-between items-center">
          {/* Search bar */}
          <div className="relative flex-1 mx-4">
            <form className="flex flex-row justify-center items-center gap-5" onSubmit={handleSearch}>
              <Input
                placeholder="Search"
                className="w-full min-w-24 py-2 px-2 shadow-sm shadow-blue-200 hover:shadow-blue-200 delay-120 transition-all ease-in focus:outline-none rounded-lg ring-0 border-0 focus-visible:ring-offset-0 focus-visible:ring-0 text-sm"
                onChange={(e)=>setSearch(e.target.value)}
              />
              <FaSearch className="absolute text-sm sm:text-lg top-3 right-3 hover:scale-125 hover:text-gray-600 transition-all delay-120 ease-in text-gray-500 " />
            </form>
          </div>

          {/* cart login register */}

          <div className="flex  flex-row justify-center items-center space-x-5 ">
            {/* <Link to="/cart">
              <FaShoppingCart className="text-3xl text-gray-600 hover:scale-105 transition-all delay-120 ease-in "
              {products.length>0?products.length:}
              />
            </Link> */}
            <Link to="/cart">
              <div className="relative">
                <FaShoppingCart className=" text-xl sm:text-3xl text-gray-600 hover:scale-105 transition-all delay-120 ease-in" />
                {products.length > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
                    {products.length}
                  </span>
                )}
              </div>
            </Link>

            <Button
              variant="outline"
              className="hidden md:block bg-gray-500 text-white transition-all ease-in delay-110 hover:scale-105 hover:bg-blue-600 hover:text-white rounded-lg"
              onClick={()=>setIsModalOpen(true)}
            >
              Login
            </Button>
            <Button
              variant="outline"
              className="block md:hidden mr-2 hover:bg-gray-800 text-gray-700 hover:text-white transition-all ease-in delay-110 hover:scale-105"
              onClick={()=>setIsModalOpen(true)}
            >
              <FaUser />
            </Button>
          </div>
        </div>
      </div>
      {/* links below  */}


        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>

          {isLogin?<Login openSignUpForm={openSignUpForm}/>:<SignUp openLoginForm={openLoginForm}/>}
        </Modal>



    </nav>
  );
};

export default Navbar;
