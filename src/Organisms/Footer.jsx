import { MdDoneAll } from "react-icons/md";
import { IoIosStats } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();
  const activePath = location.pathname;

  return (
    <div className="flex items-center justify-between p-6 w-full h-[10%] text-center text-custom-purple">
      <Link
        to="/"
        className="flex flex-col items-center p-3 -ml-2"
      >
        <MdDoneAll
          className={activePath === "/" ? "size-10" : "size-8"}
          color="#851AE6"
        />
        {activePath === "/" && <span className="">Tasks</span>}
      </Link>
      <Link
        to="/statistics"
        className="flex flex-col items-center p-3 -mr-2"
      >
        <IoIosStats
          className={activePath === "/statistics" ? "size-10" : "size-8"}
          color="#851AE6"
        />
        {activePath === "/statistics" && <span className="">Statistics</span>}
      </Link>
    </div>
  );
}

export default Footer;
