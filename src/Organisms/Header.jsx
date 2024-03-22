import PropTypes from "prop-types";
import Button from "../Atoms/Button";

function Header({ userName, isOpenHandler }) {
  return (
    <div className="p-6 text-black bg-gradientBg ">
      <h2 className="text-2xl">
        Hi, <span className="font-bold">{userName}</span>{" "}
      </h2>
      <div className="flex items-center justify-between mt-1">
        <h1 className="text-2xl font-thin">Welcome to To do</h1>
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
