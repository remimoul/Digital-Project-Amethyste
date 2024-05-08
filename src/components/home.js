import React from 'react';
import Navbar from './navbar.js';
import IMG90 from '../assets/90.png';

function Home() {
  return (
   <>
   <Navbar />
    <div className='w-full h-full'>
      <div  className='mx-56'> 
      <div className='flex ml-auto items-center'>
        <img src={IMG90} className="" alt="90"/>
        <div className='flex flex-col mb-60 mr-60'>
  <p className='mb-6 font-bold font-inter text-4xl'>
        S’accordent à dire que la santé mentale est la priorité pour 2024
        </p>
        <button className="bg-custom-purple py-2 px-2 rounded-lg font-inter w-48">Lire le rapport d'étude</button>
        </div>
      </div>
        

      </div>
    </div>
   </>
  );
} export default Home;