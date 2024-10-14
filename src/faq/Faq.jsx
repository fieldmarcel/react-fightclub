import React from "react";
import Accordion from "./Accordion";
import questions from "./que";
import { useState } from "react";
import { ArrowForwardOutline } from 'react-ionicons'

const Faq = () => {
  const [data, setdata] = useState(questions);

  return (
    <div className="container sm:flex-row flex-col sm:mb-16 mx-auto  sm:px-6  sm:mt-16 flex">
      
     
      <div className="sm:w-1/3 sm:pr-10 sm:h-[80vh] h-[40vh] flex flex-col justify-center items-center">
  
        <div className="mb-4">
        <h1 className="sm:text-8xl text-5xl sm:font-bold text-transparent sm:text-stroke-2 text-stroke-2 text-stroke-yellow sm:mb-4">
  Questions<span className="text-transparent text-stroke-2 text-stroke-yellow">?</span>
</h1>

         
        </div>
        

        <div>
          <h2 className="sm:text-4xl text-xl font-thin text-white sm:mb-4">General Questions<span><ArrowForwardOutline
  color={'#fde047'} 
  className="hidden sm:block"
  height="50px"
  width="250px"
/></span></h2>
        </div>
      </div>

 
      <div className="sm:w-2/3 flex flex-col mx-6 space-y-6 sm:space-y-6">
        {data.map((item) => (
          <Accordion
            key={item.id}
            questions={item.question}
            answers={item.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default Faq;
