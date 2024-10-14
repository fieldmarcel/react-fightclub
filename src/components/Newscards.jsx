import React from 'react';

const Newscards = ({ photo, story, date, title, link, source }) => {
  return (
    <>
      <div className="flex flex-col items-center p-4 cursor-pointer">
        <div className="bg-opacity-60 text-white shadow-lg w-full sm:w-80 sm:m-6 sm:p-2 transform transition-all hover:scale-105 hover:shadow-2xl">
          <img src={photo} alt="Article" className="min-w-full h-48 object-cover" />
          <div className="py-4">
            <h2 className="text-xl font-bold mb-2 text-yellow-400">{title}</h2>

            <p className="text-sm mb-4 line-clamp-3 overflow-hidden">
              {story}
            </p>
{/* //clamp */}
            <p className="text-gray-400 text-xs mb-2">{new Date(date).toLocaleDateString()}</p>

            <p className="text-gray-300 text-sm">
              Source: <span className="text-yellow-300">{source}</span>
            </p>
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline block mt-2"
            >
              Read full article
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newscards;
