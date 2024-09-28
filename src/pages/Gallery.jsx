import React from 'react';
import img8 from '../assets/8.jpg';
import img1 from '../assets/1.jpg';
import img2 from '../assets/3.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/8.jpg';
import img5 from '../assets/8.jpg';

const GallerySection = ({ year, title, images }) => {

  return (
    
    <div className='flex flex-col items-center px-4 py-8 bg-gray-900 text-white'>

      <div className='flex flex-col items-center w-full max-w-4xl mb-8'>
        
        <p className='text-lg sm:text-xl font-light text-yellow-400'>{year}</p>

        <div className='w-12 sm:w-16 h-1 bg-yellow-400 mt-1 mb-4'></div>
        
        <p className='text-xl sm:text-2xl lg:text-3xl font-semibold text-white text-center'>{title}</p>

        <div className='w-40 sm:w-64 h-1 bg-yellow-400 mt-1'></div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-6xl'>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery Image ${index + 1}`}
            className='rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl'
          />
        ))}
      </div>
    </div>
  );
};

const Gallery = () => {
  const images2024 = [img1, img2, img3, img4, img5, img8];
  const images2021 = [img8, img1, img2, img3, img4, img5];
  const images2019 = [img5, img4, img3, img2, img1, img8];

  return (
    <div className='space-y-12 sm:space-y-16'>
    
      <GallerySection 
        year="2024" 
        title="YOUTH WORLD CHAMPIONSHIP" 
        images={images2024} 
      />

      <GallerySection 
        year="2021" 
        title="SENIOR AND JUNIOR EUROPEAN CHAMPIONSHIP" 
        images={images2021} 
      />

      <GallerySection 
        year="2019" 
        title="WORLD AND JUNIOR WORLD CHAMPIONSHIP" 
        images={images2019} 
      />

    </div>
  );
};

export default Gallery;
