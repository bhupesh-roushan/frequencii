import React, { useEffect } from "react";
import { Categories } from "../assets/MockData";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../components/ui/carousel";

import hero1 from "../assets/images/hero1.jpg";
import hero2 from "../assets/images/hero2.jpg";
import hero3 from "../assets/images/hero3.jpg";
import hero4 from "../assets/images/hero4.jpg";
import hero5 from "../assets/images/hero5.jpg";
import InfoSection from "../components/featureCard/InfoSection";
import "../App.css";
import CategoryCard from "../components/categoryCard/CategoryCard";
const images = [hero1, hero2, hero3, hero4, hero5];
import topProducts from "../data/topProducts.json";

// Redux
import { setProducts } from "../redux/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import TopProductCard from "../components/Productcard/TopProductCard";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  useEffect(() => {
    dispatch(setProducts(topProducts));
  }, []);

  return (
    <div className="flex flex-col space-y-10 container-new mx-auto my-10 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center m-10">
        <h1 className="gradient-title text-3xl sm:text-4xl  md:text-5xl lg:text-7xl font-extrabold text-center drop-shadow-lg">
          Find Your Perfect Frequency
        </h1>
        <p className="text-center mt-5">
          Discover Premium Products in Electronics, Fashion, Home Goods, and
          More.
        </p>
      </div>

      {/* Select Category */}
      <div className="w-full">
        <Select>
          <SelectTrigger className="w-full py-2 px-2 shadow-sm shadow-blue-200 hover:shadow-blue-300 delay-120 transition-all ease-in focus:outline-none focus:ring-0 border-0 rounded-lg">
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent>
            {Categories.map((category, index) => (
              <SelectItem key={index} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Image carousel section */}
      <div className="shadow-md shadow-blue-300 bg-blue-100 rounded-lg overflow-hidden">
        <div className="flex items-center justify-center mx-auto">
          <Carousel
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <img
                    rel="preload"
                    src={image}
                    className="w-full h-auto max-h-[300px] sm:max-h-[400px] lg:max-h-[400px] xl:max-h-[600px] object-fill rounded-lg transition-all duration-300"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      {/* Info Section */}
      <InfoSection />

      {/* Categories */}
      <CategoryCard />

      {/* Top Products Section in Carousel */}
      <div className="flex flex-col justify-center items-center gap-10 overflow-hidden shadow-md shadow-blue-200 rounded-lg pb-10">
        <h1 className="gradient-title text-5xl font-bold">Top Products</h1>
        <Carousel
          plugins={[plugin.current]}
          className="w-full mr-10 p-10 "
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <div>
          <CarouselContent className="flex space-x-4 gap-5">
            {products.products.map((product, index) => (
              <CarouselItem
                key={index}
                className="basis-1/1 sm:basis-1/2 md:basis-1/2 lg:basis-1/4"
              >
                <TopProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
