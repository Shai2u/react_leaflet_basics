import './App.css';
import TitleNav from './TitleNav';
import Map from './map';

function App() {
  return (
    <div className="App">
    <TitleNav init_title={"What a map!"}/>
    <Map init_lat={32.78} init_lng={35.01} init_zoom={16}/>
    </div>
  );
}

export default App;