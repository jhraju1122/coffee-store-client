 
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useEffect, useState } from 'react';
import { data } from 'autoprefixer';
 
function App() {
    
  const [coffee, setCoffee] = useState();
      useEffect(() =>{
        fetch('http://localhost:5000/coffee')
        .then(res =>res.json())
        .then(data => setCoffee(data));
      })
      const coffees = useLoaderData({coffee});

  return (
    <div className='m-20 '>
      <h1 className='text-6xl text-white mb-7' >Our Popular Products</h1>
    
    <div className='grid grid-cols-2 gap-4'>
    {
      coffee?.map (coffee => <CoffeeCard key={coffee} coffee={coffee}></CoffeeCard>)
     }
     
    </div>
     
      
    </div>
  )
}

export default App
