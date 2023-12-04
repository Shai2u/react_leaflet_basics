import './App.css';

import "./styles.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from 'leaflet';
import { useState } from "react";


//IDeas
// Add icons from a form
// change basemap
// change icon style
// Add costum basemap style
// look up more examples on the internet

const initalBasemaps = [
  {
    id: 1,
    shortname: 'osm',
    longname: 'Open Street Map',
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  },
  {
    id: 2,
    shortname: 'carto',
    longname: 'Carto Dark',
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    url: "http://basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
  },
]
function App() {
  const [baseMap, setBaseMap] = useState("osm");
  const [baseMapList, setBaseMapList] = useState(initalBasemaps)
  const position = [51.505, -0.09]
  // create custom icon
  const customIcon = new Icon (
    {
      iconUrl: require("leaflet/dist/images/marker-icon.png"),
      iconSize: [24,32]
    }
  )

  // function handleSetBaseMap(updatedBaseMap) {
  //   setBaseMap((basemap) => updatedBaseMap);
  // }

  return (
    <div className="App">


      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        
        {baseMap ==='osm' && <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />}
        {baseMap ==='carto' && <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="http://basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
      /> }
        <Marker position={position} icon={customIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      <ChangeBaseMap baseMapValue = {baseMap} updateBaseMap={setBaseMap} baseMapList={baseMapList}/>


    </div>
  );
}

export default App;



function ChangeBaseMap({baseMapValue, updateBaseMap, baseMapList}) {

  return (
    <form className="change-base-map">

      <label>Change Base Map</label>
      
      <select
        value={baseMapValue}
        onChange={(e) => updateBaseMap(e.target.value)}
      >
        {baseMapList.map((basemap) => (
          <option value ={basemap.shortname}>{basemap.longname}</option>
        ))}
      </select>

    </form>
  );
}