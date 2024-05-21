import AnimatedPage from "../Moleclues/AnimatedPage";
import StatBlock from "../Atoms/StatBlock";
import PropTypes from "prop-types";

function Stats({ taskArray }) {

  console.log(taskArray)

  function calculateCompletedTask() {
    let counter = 0;
    for (const task of taskArray) {
      if (task.finished) {
        counter++;
      }
    }
    return counter;
  }

  function getTodayTasks() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    let counter = 0;
    for (const task of taskArray) {
      const dateArray = task.date.split("-");
      if (
        year == parseInt(dateArray[0]) &&
        month == parseInt(dateArray[1]) &&
        day == parseInt(dateArray[2])
      ) {
        counter++;
      }
    }

    return counter;
  }

  return (
    <AnimatedPage>
      <div className="h-[75%] w-screen p-2 overflow-hidden grid place-items-center grid-cols-2 grid-rows-2 gap-4 -mt-5 text-center text-xl font-thin">
        <StatBlock number={taskArray.length} title="Total tasks" />
        <StatBlock
          number={calculateCompletedTask() >= 1 ? calculateCompletedTask() : 0}
          title="Completed tasks"
        />
        <StatBlock
          number={calculateCompletedTask() >= 1 ? calculateCompletedTask() : 0}
          title="Numbers of completions"
        />
        <StatBlock
          number={getTodayTasks() >= 1 ? getTodayTasks() : 0}
          title="Planned for today"
        />
      </div>
    </AnimatedPage>
  );
}

Stats.propTypes = {
  taskArray: PropTypes.array,
};

export default Stats;
