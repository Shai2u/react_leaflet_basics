import { useState } from 'react'
import AutoComplete from './AutoComplete'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AutoComplete/>
    </>
  )
}

export default App
