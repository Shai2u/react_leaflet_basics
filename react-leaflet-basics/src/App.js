import './App.css';

import "./styles.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon, marker } from 'leaflet';
import { useState } from "react";


//IDeas
// Add icons from a form
// change basemap - Done
// change icon style
// Add costum basemap style - Done
// look up more examples on the internet

const initalBasemaps = [
  {
    id: 1,
    key: 1,
    shortname: 'osm',
    longname: 'Open Street Map',
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  },
  {
    id: 2,
    key: 2,
    shortname: 'carto',
    longname: 'Carto Dark',
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    url: "http://basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
  },
]

const initalMarkers = [
  {
    key: 10,
    label: 'תחנת רכבת יצחק נבון',
    position: [31.7882, 35.20252],
    color: 'red'
  },
  {
    key: 11,
    label: 'אונרה',
    position: [31.7971, 35.2257],
    color: 'blue'
  }

]
function App() {
  const [baseMap, setBaseMap] = useState("osm");
  const [baseMapList, setBaseMapList] = useState(initalBasemaps)
  const [showAddBaseMap, setShowAddBaseMap] = useState(false)
  const [showAddMarkers, setShowAddMarkers] = useState(false)
  const [markerPoints, setMarkerPoints] = useState(initalMarkers)
  const position = [31.784722, 35.204722]


  // create custom icon
  const customIcon = new Icon(
    {
      iconUrl: require("leaflet/dist/images/marker-icon.png"),
      iconSize: [24, 32]
    }
  )


  function handleAddBaseMap(basemap) {
    setBaseMapList((basemaps) => [...basemaps, basemap]);
    setShowAddBaseMap(false);
  }

  function handleShowBaseMap() {
    setShowAddBaseMap((show) => !show);
  }

  function handleAddMarkers(newMarker) {
    console.log('in handel add markers')
    setMarkerPoints((markers) => [...markers, newMarker]);
  }
  function handleShowAddMarkers() {
    setShowAddMarkers((show) => !show);
  }

  const selectedBaseMap = baseMapList.filter(obj => obj['shortname'] === baseMap)

  return (
    <div className="App">
      {/* http://basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png */}
      <MapContainer center={position} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={selectedBaseMap[0].url}
        />

        {
          markerPoints.map((markerData) => (
            <Marker position={markerData.position} icon={customIcon} key={markerData.key}>
              <Popup>
                {markerData.label}
              </Popup>
            </Marker>
          ))
        }
      </MapContainer>
      <div>

        <ChangeBaseMap baseMapValue={baseMap} updateBaseMap={setBaseMap} baseMapList={baseMapList} />
        {showAddBaseMap &&
          <AddBaseMap onAddBaseMap={handleAddBaseMap} />}
        <br />


        <Button onClick={handleShowBaseMap}>
          {showAddBaseMap ? "Close" : "Add Basemap"}

          <br />

        </Button>
        {showAddMarkers &&
          <AddMarkers onAddMarkers={handleAddMarkers} />
        }

        <br />

        <Button onClick={handleShowAddMarkers}>
          {showAddMarkers ? "close" : "Add new poitns"}
        </Button>
      </div>

    </div>
  );
}

export default App;



function ChangeBaseMap({ baseMapValue, updateBaseMap, baseMapList }) {

  return (
    <form className="change-base-map">

      <label>Change Base Map</label>

      <select
        value={baseMapValue}
        onChange={(e) => {

          updateBaseMap(e.target.value)
        }
        }
      >
        {baseMapList.map((basemap) => (
          <option key={basemap.key} value={basemap.shortname}>{basemap.longname}</option>
        ))}
      </select>

    </form>
  );
}
function AddBaseMap({ onAddBaseMap }) {
  // function AddBaseMap() {
  const [shortName, setShortName] = useState("");
  const [longName, setLongName] = useState("");
  const [attribution, setAttribution] = useState("");
  const [url, setUrl] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const id = crypto.randomUUID();
    const newBaseMap = {
      key: id,
      id,
      shortname: shortName,
      longname: longName,
      attribution,
      url
    };
    onAddBaseMap(newBaseMap);
    setShortName("");
    setLongName("");
    setAttribution("");
    setUrl("");
  }





  return (
    <form className="add-base-map" onSubmit={handleSubmit}>
      <label>Short name</label>
      <input
        type="text"
        value={shortName}
        onChange={(e) => setShortName(e.target.value)}
      />

      <label>Long Name</label>
      <input
        type="text"
        value={longName}
        onChange={(e) => setLongName(e.target.value)}
      />

      <label>Attribution</label>
      <input
        type="text"
        value={attribution}
        onChange={(e) => setAttribution(e.target.value)}
      />

      <label>URL</label>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <Button>Add</Button>

    </form>
  )
}

function AddMarkers({ onAddMarkers }) {
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [popup, setPopup] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const id = crypto.randomUUID();
    const newPopup = {
      key: id,
      position: [lat, long],
      label: popup,
      color: 'blue'
    };
    onAddMarkers(newPopup);
    setLat("");
    setLong("");
    setPopup("");
  }
  return (
    <form className="add-marker" onSubmit={handleSubmit}>
      <label>Lat</label>
      <input
        type="text"
        value={lat}
        onChange={(e) => setLat(e.target.value)}
      />
      <label>Long</label>
      <input
        type="text"
        value={long}
        onChange={(e) => setLong(e.target.value)}
      />
      <label>popup message</label>
      <input
        type="text"
        value={popup}
        onChange={(e) => setPopup(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}


function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
