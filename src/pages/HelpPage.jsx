// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
// } from "@/components/ui/accordion";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { AccordionHeader } from "@radix-ui/react-accordion";
// import React from "react";
// import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

// function HelpPage() {
//   return (
//     <div className="container mx-auto p-8 space-y-8 ">
//       {/* Page Heading */}
//       <div className="shadow-md shadow-blue-200 p-10 rounded-lg flex flex-col gap-10">
//         <h1 className="text-4xl font-bold text-center mb-8 gradient-title">
//           Help & Support
//         </h1>

//         {/* FAQ Section */}
//         <div className="shadow-md shadow-blue-200 rounded-lg p-10 ">
//           <Card className="border-none  shadow-sm shadow-blue-200">
//             <CardHeader>
//               <CardTitle className="text-md sm:text-xl">
//                 Frequently Asked Questions
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <Accordion type="single" collapsible className="space-y-5">
//                 <AccordionItem value="item-1">
//                   <AccordionHeader>
//                     <h2 className=" text-sm sm:text-lg font-semibold">
//                       How do I track my order?
//                     </h2>
//                   </AccordionHeader>
//                   <AccordionContent>
//                     <p>
//                       Once your order has shipped, you will receive an email
//                       with a tracking link. You can also log in to your account
//                       to check the status of your order at any time.
//                     </p>
//                   </AccordionContent>
//                 </AccordionItem>

//                 <AccordionItem value="item-2">
//                   <AccordionHeader>
//                     <h2 className="text-sm sm:text-lg  font-semibold">
//                       Can I return or exchange an item?
//                     </h2>
//                   </AccordionHeader>
//                   <AccordionContent>
//                     <p>
//                       Yes, we have a 30-day return policy. Please make sure the
//                       item is in its original condition and packaging. For
//                       exchanges, contact our support team for further
//                       assistance.
//                     </p>
//                   </AccordionContent>
//                 </AccordionItem>

//                 <AccordionItem value="item-3">
//                   <AccordionHeader>
//                     <h2 className="text-sm sm:text-lg  font-semibold">
//                       How can I contact customer support?
//                     </h2>
//                   </AccordionHeader>
//                   <AccordionContent>
//                     <p>
//                       You can contact us via email or phone. See the Contact
//                       section below for more details.
//                     </p>
//                   </AccordionContent>
//                 </AccordionItem>

//                 <AccordionItem value="item-4">
//                   <AccordionHeader>
//                     <h2 className="text-sm sm:text-lg  font-semibold">
//                       What payment methods do you accept?
//                     </h2>
//                   </AccordionHeader>
//                   <AccordionContent>
//                     <p>
//                       We accept Visa, MasterCard, PayPal, and other major credit
//                       cards. For more details, visit our payment methods page.
//                     </p>
//                   </AccordionContent>
//                 </AccordionItem>
//               </Accordion>
//             </CardContent>
//           </Card>
//         </div>
//         {/* Contact Section */}
//         <div className="shadow-md shadow-blue-200 rounded-lg p-10">
//           <Card className="border-none shadow-sm shadow-blue-200">
//             <CardHeader>
//               <CardTitle className="text-md sm:text-xl">
//                 Need More Help?
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p className="text-justify sm:text-start">
//                 If you can't find the answer you're looking for, feel free to
//                 reach out to us through any of the methods below:
//               </p>

//               <div className="space-y-4 mt-4">
//                 <div className="flex items-center flex-col sm:flex-row ">
//                   <FaPhoneAlt className="text-primary mr-3" />
//                   <p>+91-792303851</p>
//                 </div>
//                 <div className="flex items-center flex-col sm:flex-row">
//                   <FaEnvelope className="text-primary mr-3" />
//                   <p className="text-center text-sm sm:text-lg">
//                     roushan.bhupesh <span>@gmail.com</span>
//                   </p>
//                 </div>
//               </div>

//               <div className="mt-8">
//                 <a
//                   href="mailto:roushan.bhupesh@gmail.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <Button
//                     variant="outline"
//                     className="hover:bg-primary-dark shadow-md shadow-blue-200"
//                   >
//                     Contact Us
//                   </Button>
//                 </a>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HelpPage;



import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function HelpPage() {
  return (
    <div className="container mx-auto p-8 space-y-8">
      {/* Page Heading */}
      <div className="shadow-md shadow-blue-200 p-10 rounded-lg flex flex-col gap-10">
        <h1 className="text-4xl font-bold text-center mb-8 gradient-title">
          Help & Support
        </h1>

        {/* FAQ Section */}
        <div className="shadow-md shadow-blue-200 rounded-lg p-10">
          <Card className="border-none shadow-sm shadow-blue-200">
            <CardHeader>
              <CardTitle className="text-md sm:text-xl">
                Frequently Asked Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="space-y-5">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <h2 className="text-sm sm:text-lg font-semibold">
                      How do I track my order?
                    </h2>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Once your order has shipped, you will receive an email
                      with a tracking link. You can also log in to your account
                      to check the status of your order at any time.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    <h2 className="text-sm sm:text-lg font-semibold">
                      Can I return or exchange an item?
                    </h2>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Yes, we have a 30-day return policy. Please make sure the
                      item is in its original condition and packaging. For
                      exchanges, contact our support team for further
                      assistance.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    <h2 className="text-sm sm:text-lg font-semibold">
                      How can I contact customer support?
                    </h2>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>
                      You can contact us via email or phone. See the Contact
                      section below for more details.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    <h2 className="text-sm sm:text-lg font-semibold">
                      What payment methods do you accept?
                    </h2>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>
                      We accept Visa, MasterCard, PayPal, and other major credit
                      cards. For more details, visit our payment methods page.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* Contact Section */}
        <div className="shadow-md shadow-blue-200 rounded-lg p-10">
          <Card className="border-none shadow-sm shadow-blue-200">
            <CardHeader>
              <CardTitle className="text-md sm:text-xl">
                Need More Help?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-justify sm:text-start">
                If you can't find the answer you're looking for, feel free to
                reach out to us through any of the methods below:
              </p>

              <div className="space-y-4 mt-4">
                <div className="flex items-center flex-col sm:flex-row">
                  <FaPhoneAlt className="text-primary mr-3" />
                  <p>+91-792303851</p>
                </div>
                <div className="flex items-center flex-col sm:flex-row">
                  <FaEnvelope className="text-primary mr-3" />
                  <p className="text-center text-sm sm:text-lg">
                    roushan.bhupesh <span>@gmail.com</span>
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="mailto:roushan.bhupesh@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="hover:bg-primary-dark shadow-md shadow-blue-200"
                  >
                    Contact Us
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default HelpPage;
