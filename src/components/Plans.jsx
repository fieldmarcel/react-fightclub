import React from "react";

const Plans = () => {
  return (
    <>
      <div className="flex flex-col items-center px-4 py-8 bg-black text-white space-y-8">
        {/* Title */}
        <div className="text-3xl font-bold uppercase mb-4 text-center sm:text-white sm:border-l-4  sm:border-yellow-300 sm:px-2">
          Our Training Plans
        </div>

        {/* Plans Section */}
        <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-6 sm:space-y-0 w-full justify-center">
          {/* Plan Card 1 */}
          <div className="flex flex-col bg-gray-800 p-6 rounded-lg shadow-lg w-full sm:w-1/4">
            <div className="flex flex-col items-center justify-center border-b border-orange-200 pb-4 mb-4">
              <p className="text-xl font-semibold">Group Training</p>
              <p className="text-yellow-300 font-bold">1500$ Per Hour</p>
            </div>
            <div className="text-sm text-gray-400 space-y-2">
              <ol className="list-disc list-inside">
                <li>Flexible timing</li>
                <li>Personalized guidance</li>
                <li>Focus on technique</li>
                <li>Group motivation</li>
                <li>Access to all equipment</li>
              </ol>
            </div>
          </div>

          {/* Plan Card 2 */}
          <div className="flex flex-col bg-yellow-300 p-6 rounded-lg shadow-lg w-full sm:w-1/3">
            <div className="flex flex-col items-center justify-center text-black border-b border-black pb-4 mb-4">
              <p className="text-xl  font-semibold">Personal Coaching</p>
              <p className="font-bold">99$ Per Hour</p>
            </div>
            <div className="text-sm space-y-2 text-gray-600">
              <ol className="list-disc list-inside text-black">
                <li>Tailored program</li>
                <li>One-on-one focus</li>
                <li>Custom goals</li>
                <li>Diet & nutrition advice</li>
                <li>Private training environment</li>
              </ol>
            </div>
          </div>

          {/* Plan Card 3 */}
          <div className="flex flex-col bg-gray-800 p-6 rounded-lg shadow-lg w-full sm:w-1/4">
            <div className="flex flex-col items-center justify-center border-b border-orange-200 pb-4 mb-4">
              <p className="text-xl font-semibold">Advanced Training</p>
              <p className="text-yellow-300 font-bold">2000$ Per Hour</p>
            </div>
            <div className="text-sm text-gray-400 space-y-2">
              <ol className="list-disc list-inside">
                <li>High-intensity workouts</li>
                <li>Advanced techniques</li>
                <li>Performance monitoring</li>
                <li>Elite trainer guidance</li>
                <li>Exclusive access to gear</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Trial Class Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
          <div className="text-xl font-semibold">
            Experience a Trial Workout
          </div>
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-md hover:bg-yellow-500 transition text-lg font-bold">
            Trial Class
          </button>
        </div>
      </div>
    </>
  );
};

export default Plans;
