import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import React from 'react';
import { FaPhoneAlt,  FaMapMarkerAlt, FaInstagram, FaGithub, FaLinkedin} from 'react-icons/fa';


function ContactPage() {
  return (
    <div className="container mx-auto p-8 space-y-8">
      {/* Page Heading */}
      <h1 className="text-4xl gradient-title font-bold text-center">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className='shadow-md shadow-blue-200 rounded-lg p-10'>
        <Card className="shadow-md shadow-blue-200">
          <CardHeader>
            <CardTitle className="text-md sm:text-xl">Send Us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">Name</label>
                <Input type="text" id="name" name="name" placeholder="Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">Email</label>
                <Input type="email" id="email" name="email" placeholder="Email" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium">Message</label>
                <Textarea id="message" name="message" rows="4" placeholder="Message" />
              </div>
              <Button type="submit" variant="outline" className="w-full shadow-md shadow-blue-200">Submit</Button>
            </form>
          </CardContent>
        </Card>
        </div>

        {/* Contact Info */}
<div className='shadow-md shadow-blue-200 p-5'>
        <Card className="shadow-md shadow-blue-200">
          <CardHeader>
            <CardTitle className="text-xl mt-5 p-2">Contact Details</CardTitle>
          </CardHeader>
          <CardContent className="shadow-lg shadow-blue-200 m-5 p-5 rounded-lg">
            <div className=' p-5 '>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaPhoneAlt className="text-sm mr-1" />
                <p className='text-sm'>7992302851</p>
              </div>
              
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-primary mr-1" />
                <p className='text-sm'>Bangalore</p>
              </div>
            </div>
            </div>

            {/* Social Media Links */}

            <div className="mt-2">
            <div className='pl-5 pr-5'>
              <h3 className=" text-md sm:text-lg font-semibold">Follow Me</h3>
              <div className="flex space-x-4 mt-4">
                <a href="https://www.linkedin.com/in/roushanb" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-gray-500 text-2xl hover:text-blue-700 transition" />
                </a>
                <a href="https://github.com/bhupesh-roushan" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-gray-500 text-2xl hover:text-black transition" />
                </a>
                <a href="https://www.instagram.com/roushanwa" target="_blank">
                  <FaInstagram className="text-gray-500 text-2xl hover:text-pink-400 transition" />
                </a>
              </div>
            </div>
            </div>
          </CardContent>
        </Card>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
