// eslint-disable-next-line react/prop-types
function StatBlock({ number, title }) {
  return (
    <div className="flex items-center justify-center flex-col bg-custom-2bg p-4 h-[90%] w-full shadow-xl rounded-xl">
      <h1 className="text-custom-purple text-4xl font-bold mb-2">{number}</h1>
      <h2 className="">{title}</h2>
    </div>
  );
}

export default StatBlock;
