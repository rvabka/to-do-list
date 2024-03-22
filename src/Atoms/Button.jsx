import { FaPlus } from "react-icons/fa";
import PropTypes from "prop-types";

function Button({ clickHandler }) {
  return (
    <button
      onClick={clickHandler}
      className="flex items-center justify-center size-12 mt-1 border-2 bg-buttonBg border-white rounded-full text-white transition-colors duration-300"
    >
      <FaPlus />
    </button>
  );
}

Button.propTypes = {
  clickHandler: PropTypes.func,
};

export default Button;
