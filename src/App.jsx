import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoffeCard from './components/CoffeCard';

const App = () => {
  const coffes = useLoaderData()
  console.log(coffes)
  return (
    <div className='m-20'>
      <h1 className='text-3xl text-center text-purple-800'>Coffe : {coffes.length}</h1>
      <div className='grid md:grid-cols-2 gap-4'>
        {
          coffes.map(coffe => <CoffeCard
            key={coffe._id}
            coffe={coffe}
          ></CoffeCard>)
        }
      </div>
    </div>
  );
};

export default App;