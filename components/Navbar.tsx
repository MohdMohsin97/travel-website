import { MdHome } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import { IoMdMoon } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { IoTelescope } from "react-icons/io5";
import { AiFillPieChart } from "react-icons/ai";
import { IoMdMailUnread } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { HiOutlineLogout } from "react-icons/hi";
import NavComponent from "./NavComponent";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="col-span-1 flex-row justify-between my-10 space-y-24">
      <ul>
        <NavComponent title="Dashborad" href="/">
          <MdHome className="size-5" />
        </NavComponent>
        <NavComponent title="Note's" href="/notes">
          <CgNotes className="size-5" />{" "}
        </NavComponent>
        <NavComponent title="Theme" href="/theme">
          <IoMdMoon className="size-5" />
        </NavComponent>
        <NavComponent title="Account" href="/account">
          <IoPersonSharp className="size-5" />{" "}
        </NavComponent>
        <NavComponent title="Explore" href="/explore">
          <IoTelescope className="size-5" />{" "}
        </NavComponent>
        <NavComponent title="Graph" href="/graph">
          <AiFillPieChart className="size-5" />{" "}
        </NavComponent>
        <NavComponent title="Messages" href="/messages">
          <IoMdMailUnread className="size-5" />
        </NavComponent>
        <NavComponent title="Setting" href="/setting">
          <IoSettingsSharp className="size-5" />
        </NavComponent>
      </ul>
      <div className="flex justify-center items-center">
      <Button variant="secondary" className="space-x-4 m-auto">
        <HiOutlineLogout className="size-5 text-red-500"/>
        <span>Sign out</span>
      </Button>
      </div>
    </div>
  );
};

export default Navbar;
