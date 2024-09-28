import React, { useState } from "react";
import img from "../assets/5.jpg";
import Coachdetail from "../components/coachdetail";
import Titan from "../components/Titan";

const Coaches = () => {
  const [selectedcoach, setselectedcoach] = useState(null); // Tracks selected coach
  const [showMenu, setShowMenu] = useState(false); // Tracks menu visibility
  const [titan, settitan] = useState(false); // Tracks if TITAN is selected

  // Coach data
  const coach = [
    {
      id: "1",
      name: "shivanshu",
      detail:
        "Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta",
      image: img,
      coaching_style: "Aggressive",
      work_expereince: "10 years",
      qualifications: "Certified Personal Trainer",
    },
    {
      id: "2",
      name: "aryan",
      detail:
        "Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa Barat",
      image: img,
      coaching_style: "Endurance Training",
      work_expereince: "8 years",
      qualifications: "Strength Coach Certification",
    },
    {
      id: "3",
      name: "neta",
      detail:
        "Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten",
      image: img,
      coaching_style: "Flexibility and Mobility",
      work_expereince: "6 years",
      qualifications: "Sports Science Degree",
    },
  ];

  // Function to handle TITAN click
  const handletitan = () => {
    settitan(true); // Set TITAN state to true
    setselectedcoach(null); // Reset selected coach
  };

  // Function to handle coach click
  const handleclick = (coachId) => {
    setselectedcoach(coachId); // Set the selected coach
    settitan(false); // Hide the TITAN component
    setShowMenu(false); // Close the menu on small screens
  };

  // Filter the selected coach from the list
  const selectcoach = coach.filter((coach) => coach.id === selectedcoach);

  return (
    <div className="flex flex-col sm:flex-row">
      {/* Menu Button for small screens */}
      <div className="sm:hidden">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="bg-gray-800 text-white px-4 py-2 m-2 rounded-lg"
        >
          {showMenu ? "Close Menu" : "Open Menu"}
        </button>
      </div>

      {/* Sidebar Menu */}
      <div
        className={`${
          showMenu ? "block" : "hidden"
        } sm:block fixed sm:relative my-1 left-0 h-[calc(100vh-64px)] w-full sm:w-1/6 bg-gray-600 rounded-lg text-white`}
      >
        <ul className="space-y-4 p-4">
          {/* TITAN Menu Item */}
          <li
            className="cursor-pointer hover:bg-gray-700 hover:scale-105 transition-transform duration-200 p-3 rounded-lg bg-gray-800 text-yellow shadow-md"
            onClick={handletitan}
          >
            TITAN
          </li>
          {/* Coach Menu Items */}
          {coach.map((c) => (
            <li
              key={c.id}
              className="cursor-pointer hover:bg-gray-700 hover:scale-105 transition-transform duration-200 p-3 rounded-lg bg-gray-800 text-white shadow-md"
              onClick={() => handleclick(c.id)}
            >
              {c.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content Section */}
      <div className="w-3/4 p-6">
        {!selectedcoach ? (
          // Show Titan component if TITAN is selected
          <Titan />
        ) : (
          // Show Coach details if a coach is selected
          <div className="w-full sm:w-5/6 p-6">
            {selectcoach.map((data) => (
              <Coachdetail
                key={data.id}
                name={data.name}
                work={data.work_expereince}
                qualifications={data.qualifications}
                detail={data.detail}
                image={data.image}
                style={data.coaching_style}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Coaches;
