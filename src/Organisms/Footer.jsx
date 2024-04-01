import { MdDoneAll } from "react-icons/md";
import { IoIosStats } from "react-icons/io";

function Footer() {
  return (
    <div className="flex items-center justify-between p-6 w-full h-[10%] text-center">
      <div className="flex flex-col items-center">
        <MdDoneAll className="size-10" color="#851AE6" />
        <span className="">Tasks</span>
      </div>
      <div className="flex flex-col items-center">
        <IoIosStats className="size-10" color="#851AE6" />
        <span className="">Statistics</span>
      </div>
    </div>
  );
}

export default Footer;
