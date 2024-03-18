import PropTypes from "prop-types";
import "./ShakeAnimation.css";

function InputForm({ inputValue, inputType, handleChange, isEmpty }) {
  const defaultType = inputType || "text";

  return (
    <input
      className={
        isEmpty
          ? "shake-animation bg-white text-center text-black w-4/5 mx-auto rounded-xl p-3 border-2 text-lg mb-3 border-purple-900"
          : "bg-white text-center text-black w-4/5 mx-auto rounded-xl p-3 border-2 text-lg mb-3 border-purple-900"
      }
      type={defaultType}
      placeholder={inputValue}
      onChange={handleChange}
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
