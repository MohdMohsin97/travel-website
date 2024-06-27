// pages/index.tsx
import PictureCard, { CardProps } from "@/components/PictureCard";
import { Button } from "@/components/ui/button";
import Dates from "./Dates";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const Data: CardProps[] = [
  {
    title: "Moonlight Night",
    image: "/moonlight-night.jpg",
    location: "Canada",
    rating: "4.5",
  },
  {
    title: "Sahara Desert",
    image: "/sahara-desert.jpg",
    location: "Africa",
    rating: "4.9",
  },
  {
    title: "Night Camping",
    image: "/night-camping.avif",
    location: "New York",
    rating: "5.0",
  },
];

export default function Home() {
  return (
    <div className="container my-8 col-span-3">
      <div className="my-4">
        <h1 className="text-3xl mx-4 font-medium">Discover World</h1>
        <div className="my-4 text-muted-foreground">
          <ul className="flex gap-10">
            <li>
              <Button variant="ghost">Recommend</Button>
            </li>
            <li>
              <Button variant="ghost">Popular Places</Button>
            </li>
            <li>
              <Button variant="ghost">Trips</Button>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {Data.map((data, i) => (
            <PictureCard key={i} data={data} />
          ))}
        </div>
      </div>
      <div className="my-12">
        <div className="flex justify-between my-4">
          <h1 className="text-3xl font-medium">Event Dates</h1>
          <Button className="bg-inherit rounded-full" variant="outline">
            January 15 2024
          </Button>
        </div>
        <Dates />
        <div className="grid grid-cols-6 gap-6 my-12">
          <Button className="w-auto h-auto col-span-4 flex justify-between">
            <div className="w-12 h-12 relative ">
              <Image
                className="object-cover rounded-lg"
                src="/landsacpe.jpg"
                fill
                alt="landsacpe"
              />
            </div>
            <div>
              <p>Netherlands Travel Tour</p>
              <span
                className="flex gap-2 items-center">
                <FaStar className="text-foreground" />
                <p>4.7</p>
              </span>
            </div>
            <div>
              <Button className="bg-foreground p-1 h-8 text-primary hover:text-white">II</Button>
            </div>
          </Button>
          <div className="w-16 h-16 relative hover:scale-105">
            <Image className="object-cover rounded-lg" src="/sun.jpg" fill alt="sun" />
          </div>
          <div className="w-16 h-16 relative hover:scale-105">
            <Image className="object-cover rounded-lg" src="/deer.jpg" fill alt="deer" />
          </div>
        </div>
      </div>
    </div>
  );
}
