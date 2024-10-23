import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaChartBar, FaBullhorn, FaEnvelope } from "react-icons/fa";

function AdvertisePage() {
  return (
    <div className="container mx-auto p-8 space-y-8">
      {/* Page Header */}
      <div className="flex flex-col gap-20 shadow-md shadow-blue-200 p-10">
      <div className="shadow-md shadow-blue-200 p-10 rounded-lg text-center">
        <h1 className=" text-lg sm:text-3xl md:text-4xl  font-bold gradient-title mb-4">Advertise with Frequencii</h1>
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
            <Button variant="outline" className="mt-4 shadow-md shadow-blue-200">Learn More</Button>
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
            <Button variant="outline" className="mt-4 shadow-md shadow-blue-200">Learn More</Button>
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
            <Button variant="outline" className="mt-4 shadow-md shadow-blue-200">Learn More</Button>
          </CardContent>
        </Card>
      </div>

      {/* Contact Form Section */}
      <div className="shadow-md shadow-blue-200 p-10 rounded-lg">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8">Get in Touch</h2>
        <p className="text-center text-muted-foreground mb-8">
          Interested in advertising with us? Fill out the form below and our team will get back to you.
        </p>
        
        <form className="space-y-4 max-w-xl mx-auto">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Your Name
            </label>
            <Input id="name" placeholder="Enter your name" className="mt-1" />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Your Email
            </label>
            <Input id="email" type="email" placeholder="Enter your email" className="mt-1" />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <Textarea id="message" placeholder="Tell us about your advertising needs" className="mt-1" />
          </div>

          <Button variant="outline" className="w-full shadow-md shadow-blue-200">Submit</Button>
        </form>
      </div>
      </div>
    </div>
  );
}

export default AdvertisePage;
