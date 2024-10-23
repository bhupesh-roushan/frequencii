import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaPercentage, FaTag } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "@/redux/ProductSlice";
import topProducts from "../data/topProducts.json";
import TopProductCard from "@/components/Productcard/TopProductCard";

function SalesPage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(setProducts(topProducts));
  }, []);
  return (
    <div className="container mx-auto p-8 space-y-8">
      {/* Page Header */}
      <div className="shadow-md shadow-blue-200 p-10 rounded-lg text-center">
        <h1 className="text-4xl font-bold gradient-title mb-4">
          Huge Sale on Frequencii!
        </h1>
        <p className="text-lg text-muted-foreground">
          Discover amazing discounts on your favorite products. Hurry up,
          limited time only!
        </p>
        <Button variant="outline" className="mt-6 shadow-md shadow-blue-200 ">
          Shop Now
        </Button>
      </div>

      {/* Sale Banner Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Banner 1 */}
        <Card className="border-none shadow-md shadow-blue-200">
          <CardHeader>
            <FaPercentage className="text-primary text-5xl mb-4" />
            <CardTitle>Up to 50% Off</CardTitle>
            <CardDescription>
              Save on top categories including electronics, fashion, and home
              essentials.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="mt-4">
              Shop Deals
            </Button>
          </CardContent>
        </Card>

        {/* Banner 2 */}
        <Card className="border-none shadow-md shadow-blue-200">
          <CardHeader>
            <FaTag className="text-primary text-5xl mb-4" />
            <CardTitle>Exclusive Online Offers</CardTitle>
            <CardDescription>
              Check out special online-only discounts on select products.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="mt-4">
              See Offers
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Top Deals Section */}
      {/* <div className="shadow-md shadow-blue-200 p-10 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-8">
          Top Deals of the Week
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {products.products.slice(2, 7).map((product, index) => (
            <div key={index} className="w-full sm:w-auto">
              <TopProductCard
                product={product}
                className="p-1 sm:p-6 md:p-8" // Adjust padding based on screen size
              />
            </div>
          ))}
        </div>
      </div> */}



<div className="shadow-md shadow-blue-200 p-2 rounded-lg max-w-full overflow-hidden">
  <h2 className="text-3xl font-bold text-center mb-8">
    Top Deals of the Week
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
    {products.products.slice(2, 7).map((product, index) => (
      <div key={index} className="w-full max-w-full">
        <TopProductCard
          product={product}
          className="p-4" // Standard padding
        />
      </div>
    ))}
  </div>
</div>



    </div>
  );
}

export default SalesPage;
