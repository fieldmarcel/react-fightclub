import React from 'react';
import image from '../assets/9.jpeg';

const Titan = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white text-gray-900 rounded-xl shadow-lg">
      <h2 className="text-4xl font-semibold text-gray-800 mb-8 text-center">
        The Journey of Titan MMA Fight Club
      </h2>

      <div className="relative w-full h-96 mb-8 overflow-hidden rounded-lg shadow-md">
        <img
          src={image}
          alt="Titan Fight Club Journey"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="space-y-6 text-lg leading-relaxed">
        <p>
          From humble beginnings to becoming a dominant force in the world of MMA,
          Titan Fight Club has been a beacon of resilience, passion, and unyielding
          strength. What started as a small group of fighters with big dreams has
          evolved into a powerhouse of talent, producing champions and legends who
          have left their mark on the ring.
        </p>
        <p>
          Our journey is not just about the victories but the relentless pursuit of
          greatness, the blood, sweat, and tears shed in the pursuit of perfection.
          We have built a community where discipline meets determination, where
          warriors are forged through battles, and where every punch thrown is a
          step closer to personal glory.
        </p>
        <p>
          Welcome to Titan Fight Club, where the fight within is as fierce as the
          battle outside. We don’t just train champions; we craft legends. And now,
          you have the chance to be a part of this legendary journey, to step into
          the arena and write your own story of grit and triumph.
        </p>
      </div>
    </div>
  );
};

export default Titan;
