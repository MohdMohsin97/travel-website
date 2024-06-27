import Image from "next/image";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { FaHeart } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { FaStar } from "react-icons/fa";

export interface CardProps {
  title: string;
  image: string;
  location: string;
  rating: string;
}

interface PictureCardProps {
  data: CardProps;
}

const PictureCard: React.FC<PictureCardProps> = ({ data }) => {
  return (
    <div>
      <Card className="h-64 relative rounded-3xl hover:scale-105">
        <Image
          className="object-cover rounded-3xl"
          src={data.image}
          fill
          alt={data.title}
        />
        <Button
          className="absolute z-10 p-0 m-0 size-8 rounded-full top-4 right-4"
          variant="secondary"
        >
          <FaHeart className="size-5" />
        </Button>
      </Card>
      <div className="font-medium mt-4 space-y-2 text-sm">
        <p>{data.title}</p>
        <div className="flex gap-4">
          <span className="flex gap-2">
            <MdLocationOn className="size-4 text-gray-400" />
            <p className="text-sm">{data.location}</p>
          </span>
          <span className="flex gap-2">
            <FaStar className=" size-4 text-foreground" />
            <p>{data.rating} </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PictureCard;
