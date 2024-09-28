import React from "react";

const Coachdetail = ({ name, work, qualifications, image, detail, style }) => {
  return (
    <>
      <div className="flex flex-col sm:flex-row w-full p-4 bg-gray-900 text-white rounded-lg shadow-lg">
        {/* Image Section */}
        <div className="w-full sm:w-1/3 flex-shrink-0 mb-4 sm:mb-0">
          <div className="relative">
            <img
              src={image}
              alt="Coach"
              className="w-full h-auto rounded-t-lg sm:rounded-lg shadow-md"
            />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-500"></div>
          </div>
        </div>

        {/* Details Section */}
        <div className="sm:ml-6 flex flex-col justify-center w-full sm:w-2/3 bg-gray-800 p-4 rounded-lg">
          {/* Name */}
          <div className="text-2xl sm:text-3xl font-thin text-white mb-4 py-6 sm:py-0">{name}</div>

          {/* Details */}
          <div className="mb-4 space-y-3">
            <p className="text-gray-300">
              <span className="font-semibold text-white">Location: </span>
              {detail}
            </p>
            <p className="text-gray-300">
              <span className="font-semibold text-white">Coaching Style: </span>
              {style}
            </p>
            <p className="text-gray-300">
              <span className="font-semibold text-white">Experience: </span>
              {work}
            </p>
            <p className="text-gray-300">
              <span className="font-semibold text-white">Qualifications: </span>
              {qualifications}
            </p>
            <p className="text-gray-300">
              <span className="font-semibold text-white">Training Philosophy: </span>
              Empowering clients to push their limits, focusing on technique and safety while reaching personal goals.
            </p>
            <p className="text-gray-300">
              <span className="font-semibold text-white">Specialized Programs: </span>
              Weight loss, muscle gain, strength conditioning, and endurance training for athletes.
            </p>
            <p className="text-gray-300">
              <span className="font-semibold text-white">Client Achievements: </span>
              Helped over 50 clients transform their health and achieve top fitness goals, including competitive athletes.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coachdetail;
