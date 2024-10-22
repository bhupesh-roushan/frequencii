import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const FeautureCard = ({ Icon, title, description }) => {
  return (
    <div className="p-10 mb-5 mt-5 shadow-md shadow-blue-200 rounded-xl">
      <Card className="min-h-[160px]  max-h-[160px] sm:min-h-[200px] sm:max-h-[200px] mt-5 mb-5  flex flex-col items-center justify-center shadow-md shadow-blue-200 hover:scale-105 transition-all ease-in delay-130 rounded-xl cursor-grabbing">
        <CardHeader>
          <CardTitle>
            <Icon className="text-3xl text-blue-600" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <h1 className="text-xl font-bold">{title}</h1>
        </CardContent>
        <CardFooter>
          <p className="text-center">{description}</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default FeautureCard;