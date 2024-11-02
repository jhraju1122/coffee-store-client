 
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
    <div>
      <h1 className='text-6xl text-purple-600'>Hot cold coffee {coffees.length}</h1>
    
    <div>
    {
      coffee?.map (coffee => <CoffeeCard key={coffee} coffee={coffee}></CoffeeCard>)
     }
     
    </div>
     
      
    </div>
  )
}

export default App
