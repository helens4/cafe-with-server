
import './App.css'
import Header from './components/Header'
import { itemImages } from './items';
import Home from './components/Home';
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {

  const [items, setItems] = useState([])

  const getItems = async () => {
    const response = await axios.get('http://localhost:3030/api/items')

    setItems(response.data)
  }

  useEffect(() => {
    getItems()
  }, [])

  return (
    <div className='app'>
      <Header />
      <Home items={items} />
    </div>
  )
}

export default App
