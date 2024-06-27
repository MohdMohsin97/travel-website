import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { CgOptions } from "react-icons/cg";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RiSearch2Fill } from "react-icons/ri";

const Header = () => {
  return (
    <div className="container my-4 grid grid-cols-6 gap-4">
      <div className="col-span-1 flex place-content-center">
        <span>
          <Image src="/mountain.svg" alt="Logo" width={75} height={75} />
        </span>
      </div>

      <div className="col-span-3 flex justify-center items-center gap-6 ">
        <Button
          variant="outline"
          className="w-2/3 m-0 p-0 flex justify-center items-center border-1 bg-secondary"
        >
          <label className="cursor-pointer pl-4" htmlFor="search">
            <RiSearch2Fill className="w-6 h-6" />
          </label>
          <Input
            className="border-none"
            id="search"
            type="search"
            placeholder="Search for places"
          />
        </Button>

        <Button className="m-0 p-0 w-10 h-10 rounded-full">
          <CgOptions className="bg-primary text-background w-9 h-9 p-2 rounded-full" />
        </Button>
      </div>

      <div className=" col-span-2 flex justify-around items-center border-l-2">
        <div className="flex gap-6 justify-center items-center">
          <FaLocationDot className="mt-1 text-secondary-foreground" />
          <span>New York/Dc</span>
        </div>
        <div className="flex gap-8 justify-center items-center">
          <Button
            className="m-0 p-0 w-auto h-auto rounded-full"
            variant={"outline"}
          >
            <IoIosNotifications className="w-5 h-5 m-2" />
          </Button>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default Header;
