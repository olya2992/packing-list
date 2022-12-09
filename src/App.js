
import './App.css';
import image from "./travel.webp"
import { TravelList } from './TravelList';

function App() {
  return (
    <div className="app">

      <div className='travel'>
    <img src={image} width="300px" alt='pic' />
    </div>

<div className='container'>
<h1>My packing list </h1>
</div>

<div>
  <TravelList/>
</div>

    </div>
  );
}

export default App;
