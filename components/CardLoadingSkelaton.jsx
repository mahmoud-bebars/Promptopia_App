const CardLoadingSkelaton = () => (
  <div className="w-full mb-4 p-4 border border-gray-200 rounded-2xl shadow animate-pulse md:p-6 ">
    <div className="flex items-center mt-4 space-x-3">
      <div className=" w-10 h-10 bg-gray-700 rounded-full"></div>
      <div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
        <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
      </div>
    </div>
    <div className="mt-4 mb-2">
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
    </div>
    <div className="mt-4 mb-2">
      <div className="h-2 w-32 bg-gray-200 rounded-full dark:bg-gray-700 mt-2 mb-2.5"></div>
    </div>
  </div>
);

export default CardLoadingSkelaton;
