import './App.css'
import Navbar from './Components/Navbar/Navbar';
import PriceOptions from './Components/PriceOptions/PriceOptions';
import LineChart from './Components/LineChart/LineChart';
import Phones from './Components/Phones/Phones';

function App() {

  return (
    <div className='pb-12'>
      <Navbar></Navbar>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
    </div>
  )
}

export default App
