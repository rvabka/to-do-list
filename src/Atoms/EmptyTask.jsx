import arrow from "../Images/arrow.png";

function EmptyTask() {
  return (
    <div className="flex flex-col items-center justify-center min-h-90 w-4/5 mx-auto">
      <img src={arrow} className="origin-center rotate-[215deg] z-0" />
      <h1 className="text-center font-thin text-2xl text-wrap block mt-6 z-10">
        Tap to create your first task or set a goal!
      </h1>
    </div>
  );
}

export default EmptyTask;
