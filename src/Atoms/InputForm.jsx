import PropTypes from "prop-types";
import "./ShakeAnimation.css";

function InputForm({ inputValue, inputType, handleChange, isEmpty }) {
  const defaultType = inputType || "text";

  return (
    <input
      className={
        isEmpty
          ? "shake-animation text-gray-600 w-full mx-auto rounded-xl p-3 border-2 text-lg mb-3 border-gray-300"
          : "w-full text-gray-600 mx-auto rounded-xl p-3 border-2 text-lg mb-3 border-gray-300"
      }
      type={defaultType}
      placeholder={"Task name..."}
      onChange={handleChange}
      defaultValue={inputValue}
    />
  );
}

InputForm.propTypes = {
  inputValue: PropTypes.string,
  inputType: PropTypes.string,
  handleChange: PropTypes.func,
  isEmpty: PropTypes.bool,
};

export default InputForm;
