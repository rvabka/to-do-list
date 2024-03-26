import { FaPlus } from "react-icons/fa";
import PropTypes from "prop-types";

function Button({ clickHandler }) {
  return (
    <button
      onClick={clickHandler}
      className="flex items-center justify-center size-14 mt-1 border-2 bg-custom-purple rounded-full border-white rounded-fulltransition-colors duration-300"
    >
      <FaPlus size={24}/>
    </button>
  );
}

Button.propTypes = {
  clickHandler: PropTypes.func,
};

export default Button;
