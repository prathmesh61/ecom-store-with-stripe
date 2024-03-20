import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import img1 from "@/public/images/holi.jpg";
import img2 from "@/public/images/banner1.jpg";
import img3 from "@/public/images/banner2.jpg";
import Image from "next/image";

type Props = {};

const Slider = (props: Props) => {
  return (
    <div>
      <Carousel>
        <CarouselContent className="relative ">
          <CarouselItem>
            <Image
              src={img1}
              className="object-cover  md:basis-1/2 lg:basis-1/3"
              alt="img1"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={img2}
              className="object-cover  md:basis-1/2 lg:basis-1/3"
              alt="img2"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={img3}
              className="object-cover  md:basis-1/2 lg:basis-1/3"
              alt="img3"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Slider;
