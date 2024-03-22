import PropTypes from "prop-types";
import { motion } from "framer-motion";
import InputForm from "../Atoms/InputForm";

function ToDoForm({
  addTask,
  isOpen,
  emptyInput,
  setMainInputs,
  mainInputs,
}) {

  function handleChangeValue(event) {
    setMainInputs({ ...mainInputs, value: event.target.value });
  }

  function handleChangeDate(event) {
    setMainInputs({ ...mainInputs, date: event.target.value });
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
              handleChange={handleChangeValue}
              inputValue={mainInputs.value}
            />
            <InputForm
              isEmpty={emptyInput.emptyDate}
              inputType={"date"}
              handleChange={handleChangeDate}
              inputValue={mainInputs.date}
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
  addTask: PropTypes.func,
  isOpen: PropTypes.bool,
  emptyInput: PropTypes.object,
  setMainInputs: PropTypes.func,
  mainInputs: PropTypes.object,
};

export default ToDoForm;
