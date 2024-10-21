import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import FeautureCard from "./FeautureCard";
import { FaShippingFast, FaHeadset, FaShieldAlt, FaTags, FaSyncAlt, FaBoxOpen, FaCreditCard, FaGift, FaTruck, FaMedal } from "react-icons/fa";
import cardDetails from "../../data/carddetails.json";
import Autoplay from "embla-carousel-autoplay";

const icons = [
  FaShippingFast,
  FaHeadset,
  FaShieldAlt,
  FaTags,
  FaSyncAlt,
  FaBoxOpen,
  FaCreditCard,
  FaGift,
  FaTruck,
  FaMedal,
];

const CardCarousel = () => {
  return (
    <Carousel 
    plugins={[
        Autoplay({
          delay: 1000,
        }),
      ]}
    >
      <CarouselContent>
        {cardDetails.map((card, index) => (
          <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={index}>
            <FeautureCard
              Icon={icons[index]}
              title={card.title}
              description={card.description}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CardCarousel;
