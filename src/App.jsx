 
import { useLoaderData } from 'react-router-dom'
import './App.css'

function App() {
 
      const coffees = useLoaderData();

  return (
    <>
      <h1 className='text-6xl text-purple-600'>Hot cold coffee {coffees.length}</h1>
    </>
  )
}

export default App
