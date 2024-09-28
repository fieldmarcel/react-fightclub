import React from "react";
import img from '../assets/6.jpg';
import { useState } from "react";

const Team = () => {
const [index, setindex] = useState(0)


const data = [
  {
    id: "1",
    name: "Aliva Jardin",
    detail: "Jakarta Garden City Street, Cakung. Pulo Gadung,  Timur, DKI Jakarta",
    image: img,
    experience: "5 years",
    role: "Head Coach",
    specialty: "Muay Thai"
  },
  {
    id: "2",
    name: "Aliva Priva Jardin",
    detail: "Jakarta Garden City Street, Cakung. Pulo Gadung,  Timur, DKI Jakarta",
    image: img,
    experience: "3 years",
    role: "Assistant Coach",
    specialty: "Brazilian Jiu-Jitsu"
  },
  {
    id: "3",
    name: "Al",
    detail: "Jakarta Garden City Street, Cakung. Pulo Gadung,  Timur, DKI Jakarta",
    image: img,
    experience: "2 years",
    role: "Fitness Trainer",
    specialty: "Strength and Conditioning"
  },
  {
    id: "4",
    name: "John Doe",
    detail: "123 Main Street, Anytown, USA",
    image: img,
    experience: "4 years",
    role: "Nutritionist",
    specialty: "Sports Nutrition"
  },
  {
    id: "5",
    name: "Jane Smith",
    detail: "456 Elm Street, Somewhere, UK",
    image: img,
    experience: "6 years",
    role: "Mental Coach",
    specialty: "Sports Psychology"
  },
  {
    id: "6",
    name: "Emily Davis",
    detail: "789 Oak Street, Anycity, Canada",
    image: img,
    experience: "7 years",
    role: "Yoga Instructor",
    specialty: "Flexibility and Recovery"
  }
];
  
  const handleprev=()=>{
    setindex((index)=>{
if(index=== 0){
  return data.length;
}else {
  return previndex-1;
}
    })

    }

    const handlenext=()=>{
      setindex((index)=>{
if(index===data.length-1){
  return 0;
}
else {
 return  index+1;
}
      })
    }

    return (
      <>
        <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4 py-8 sm:py-16">
          <div className="text-3xl flex flex-row sm:text-5xl font-semibold mb-8 text-white">OUR TEAM</div>
          <button className="w-1/5 bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-600 transition duration-300 ease-in-out" onClick={handleprev}>Previous</button>
          <div className="sm:w-3/5 space-y-6 mt-6">
            <div className="flex flex-col sm:flex-row items-center bg-white rounded-lg shadow-md p-6">
              <div className="w-full  sm:px-3 sm:w-1/3 mb-4 sm:mb-0">
                <img
                  src={data[index].image}
                  alt={data[index].name}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
  
              <div className="flex flex-col text-center sm:text-left w-full sm:w-2/3 sm:px-3 space-y-3">
                <h1 className="text-2xl font-semibold text-gray-800">{data[index].name}</h1>
                <p className="text-gray-600">{data[index].detail}</p>
                <p className="text-gray-600">
                  <span className="font-semibold">Role:</span> {data[index].role}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Specialty:</span> {data[index].specialty}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Work Experience:</span> {data[index].experience}
                </p>
  
                <div className="flex space-x-4 mt-4">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">Trial Class</button>
                  <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition">Learn More</button>
                </div>
              </div>
            </div>
          </div>
          <button className="w-1/5 bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-600 transition duration-300 ease-in-out" onClick={handlenext}>Next</button>
        </div>
      </>
    );
  };
  

export default Team;
