import React from "react";
import PictureCard from "./PictureCard";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import Image from "next/image";
import { FaHeart } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

const RightComponent = () => {
  return (
    <div className="container col-span-2">
      <Card className="h-64 relative rounded-3xl">
        <Image
          className="object-cover rounded-3xl"
          src="/illustration-4377408_1280.webp"
          fill
          alt="winter"
        />
        <Button
          className="absolute z-1 p-0 m-0 size-8 rounded-full top-4 right-4"
          variant="secondary"
        >
          <FaHeart className="size-5 text-red-400" />
        </Button>
        <div className="w-4/5 p-2 justify-evenly grid grid-cols-4 gap-2 right-8 bottom-6 rounded-lg absolute bg-white bg-opacity-50 z-1">
          <ImageCard src="/deer.jpg" />
          <ImageCard src="/landsacpe.jpg" />
          <ImageCard src="/sahara-desert.jpg" />
          <ImageCard src="/sun.jpg" />
        </div>
      </Card>
      <div className="my-4">
        <h1 className="text-3xl mx-4 font-medium">Brazil Forest</h1>
        <p className="mx-4 my-2 text-sm  text-gray-400">
          I spend ten minutes or so doing a couple of Douling lessones in Brazil
        </p>
      </div>
      <div className="my-12 mx-4 flex justify-between items-center">
        <span>
          <p>per/person</p>
          <h1 className="text-4xl font-semibold">$1540</h1>
        </span>
        <Button className="rounded-full mt-4 font-semibold px-6">
          Book Travel
        </Button>
      </div>
      <div className="grid grid-rows-3 gap-4">
        <LocationCard
          src="/illustration-4377408_1280.webp"
          place="Nature Lake"
          location="Afganistan"
        />
        <LocationCard
          src="/sahara-desert.jpg"
          place="Savana "
          location="Africa"
        />
        <LocationCard src="/sun.jpg" place="Amazon" location="Nort America" />
      </div>
    </div>
  );
};

const ImageCard = ({ src }: { src: string }) => {
  return (
    <div className="w-auto h-10 relative">
      <Image className="object-cover rounded-sm" src={src} fill alt="winter" />
    </div>
  );
};

const LocationCard = ({
  src,
  place,
  location,
}: {
  src: string;
  place: string;
  location: string;
}) => {
  return (
    <div className="flex gap-4 items-center hover:scale-105">
      <div className="w-48 h-20 relative">
        <Image
          className="object-cover rounded-lg"
          src={src}
          fill
          alt="winter"
        />
      </div>
      <div className="w-full flex justify-between items-center">
        <div>
          <h2 className="text-2xl">{place}</h2>
          <span className="flex items-center gap-2">
            <FaLocationDot className="text-gray-400 size-4" />
            <p className="text-gray-400 text-sm">{location}</p>
          </span>
        </div>
        <Button className="p-0 m-0 size-8 rounded-full" variant="secondary">
          <FaHeart className="size-5 " />
        </Button>
      </div>
    </div>
  );
};
export default RightComponent;
