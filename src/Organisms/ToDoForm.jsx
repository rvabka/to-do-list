import PropTypes from "prop-types";
import { motion } from "framer-motion";
import InputForm from "../Atoms/InputForm";

function ToDoForm({
  setInput,
  input,
  addTask,
  isOpen,
  emptyInput,
}) {
  function handleChange(event) {
    setInput({...input, value: event.target.value});
  }

  function handleGetDate(event) {
    setInput({...input, date: event.target.value});
  }

  return (
    <>
      {isOpen && (
        <motion.div
          className="absolute w-svw h-[150px] gradient p-4 bottom-14"
          initial={{ y: "100%" }}
          animate={{ y: isOpen ? 0 : "100%" }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-center flex-col p-5 bg-gradientBg text-white rounded-xl">
            <InputForm
              isEmpty={emptyInput.emptyValue}
              handleChange={handleChange}
              inputValue={"Type new task"}
            />
            <InputForm
              isEmpty={emptyInput.emptyDate}
              inputType={"date"}
              handleChange={handleGetDate}
            />
            <button
              className="bg-white text-lg text-black w-3/5 up mx-auto rounded-xl p-3 border-2 border-purple-900"
              onClick={addTask}
            >
              Add new task
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}

ToDoForm.propTypes = {
  setInput: PropTypes.func,
  input: PropTypes.object,
  addTask: PropTypes.func,
  isOpen: PropTypes.bool,
  emptyInput: PropTypes.object,
};

export default ToDoForm;
