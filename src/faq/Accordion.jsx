import React from "react";
import { useState } from "react";
import { ArrowDownOutline } from "react-ionicons";
import { ArrowUpOutline } from "react-ionicons";

const Accordion = ({ questions, answers }) => {
  const [show, setshow] = useState(false);

  return (
    <div onClick={()=>setshow(!show)} className="bg-gray-800 sm:p-6  p-3 rounded-lg shadow-lg">
      <div  className="flex flex-row sm:gap-6 gap-3">
     
<p  className="cursor-pointer">  {show ? <ArrowUpOutline  color={"#f2ec26"} height="30px" width="30px"/> :<ArrowDownOutline  color={"#f2ec26"} height="30px" width="30px"/>} </p>
        <h3  className="sm:text-2xl font-thin text-white  sm:mb-2 cursor-pointer">
         
          {questions}
        </h3>
      </div>
    {show &&  <p className="sm:ml-14 ml-10 text-yellow-300 text-lg">{answers}</p>
  }  

    </div> 
  );
};

export default Accordion;
{
  /* <icon>
            <ArrowDownOutline color={"#f2ec26"} height="30px" width="30px" />
          </icon> */
}
