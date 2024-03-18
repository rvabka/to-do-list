import PropTypes from "prop-types";
import Button from "../Atoms/Button";

function Header({ userName, isOpenHandler }) {
  return (
    <div className="p-6 text-white bg-gradientBg ">
      <h2 className="text-xl">
        Welcome back, <span className="font-bold">{userName}</span>{" "}
      </h2>
      <div className="flex items-center justify-between mt-1">
        <h1 className="text-3xl mt-2 text font-bold">To-do list</h1>
        <Button clickHandler={isOpenHandler}/>
      </div>
    </div>
  );
}

Header.propTypes = {
  userName: PropTypes.string.isRequired,
  isOpenHandler: PropTypes.func,
};

export default Header;
