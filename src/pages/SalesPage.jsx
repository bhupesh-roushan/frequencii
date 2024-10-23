import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaPercentage, FaShoppingCart, FaTag } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";

function SalesPage() {
  return (
    <div className="container mx-auto p-8 space-y-8">
      {/* Page Header */}
      <div className="shadow-md shadow-blue-200 p-10 rounded-lg text-center">
        <h1 className="text-4xl font-bold gradient-title mb-4">Huge Sale on Frequencii!</h1>
        <p className="text-lg text-muted-foreground">
          Discover amazing discounts on your favorite products. Hurry up, limited time only!
        </p>
        <Button className="mt-6 bg-primary hover:bg-primary-dark text-white">
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
              Save on top categories including electronics, fashion, and home essentials.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="mt-4">Shop Deals</Button>
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
            <Button variant="outline" className="mt-4">See Offers</Button>
          </CardContent>
        </Card>
      </div>

      {/* Top Deals Section */}
      <div className="shadow-md shadow-blue-200 p-10 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-8">Top Deals of the Week</h2>
        
       
      </div>
    </div>
  );
}

export default SalesPage;
