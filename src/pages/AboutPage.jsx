import React from 'react';
import { Card, CardHeader, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import TeamMember from './TeamMember';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="container mx-auto p-8 space-y-12">
      {/* Title Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4 gradient-title">About Frequencii</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Welcome to Frequencii! We are a one-stop online marketplace dedicated to bringing you the finest selection of products across all categories, from electronics to fashion, home essentials, and more.
        </p>
      </section>

      {/* Mission Section */}
      <section className="space-y-6 text-center">
        <h2 className="text-3xl font-semibold gradient-title">Our Mission</h2>
        <Card className="max-w-3xl mx-auto p-10 shadow-md shadow-blue-200">
          <CardContent>
            <p className="text-gray-600">
              At Frequencii, our mission is to provide an easy, seamless, and enjoyable shopping experience for everyone. We aim to connect people with high-quality products and services that improve their lives, all under one platform.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Values Section */}
      <section className="space-y-6 text-center">
        <h2 className="text-3xl font-semibold gradient-title">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 shadow-md shadow-blue-200 p-10 rounded-lg">
          <Card className="shadow-md shadow-blue-200">
            <CardHeader>
              <h3 className="text-xl font-semibold">Customer Satisfaction</h3>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                We prioritize our customers by ensuring quality, reliability, and exceptional service at every step.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md shadow-blue-200">
            <CardHeader>
              <h3 className="text-xl font-semibold">Diversity in Choices</h3>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Our marketplace is filled with a wide range of products, giving customers the freedom to choose what fits their lifestyle best.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md shadow-blue-200">
            <CardHeader>
              <h3 className="text-xl font-semibold">Sustainability</h3>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                We strive to minimize our environmental footprint by encouraging sustainable practices and supporting eco-friendly brands.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Team Section */}
      <section className="space-y-6 text-center">
        <h2 className="text-3xl font-semibold gradient-title">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <TeamMember
            name="Bhupesh Roushan"
            role="CEO & Founder"
            description="With over a decade of experience, Jane leads Frequencii with passion and expertise."
          />
          <TeamMember
            name="John Smith"
            role="Chief Product Officer"
            description="John oversees product selection, ensuring a diverse and quality selection for our customers."
          />
          <TeamMember
            name="Emma Brown"
            role="Head of Marketing"
            description="Emma drives all marketing and branding efforts for Frequencii."
          />
        </div>
      </section>

      {/* Learn More Button */}
      <section className="text-center">
        <Link to={"/"}>
        <Button  variant="outline" className="mt-8">Shop</Button>
        </Link>
      </section>
    </div>
  );
};

export default AboutPage;
