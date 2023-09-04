import { useState } from 'react'
import AutoComplete from './AutoComplete'
import DisplayCoordinate from './assets/DisplayCoordinate'
import './App.css'
import getLatLng from "./getLatLng"

function App() {
  const [coordinate, setCoordinate] = useState("No Coordinate");


  const updateDisplayCoordinate = async (new_coordinat) => {
    console.log('update coordinates!');
    console.log('PathID');
    console.log(new_coordinat);
    // const newCoord = await getLatLng(new_coordinat);
    // console.log('after promise')
    // console.log(newCoord)
    // const new_coord = await(getLatLng(new_coordinat))
    console.log('after await')
    const newCoordinate = await(getLatLng(new_coordinat))
    console.log(newCoordinate)
    setCoordinate(newCoordinate)
}
  return (
    <>
      <DisplayCoordinate coordinate={coordinate}/>
      <AutoComplete displayCoordinate ={updateDisplayCoordinate}/>
    </>
  )
}

export default App
