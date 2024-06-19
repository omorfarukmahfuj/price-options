import './App.css'
import Navbar from './Components/Navbar/Navbar';
import PriceOptions from './Components/PriceOptions/PriceOptions';
import LineChart from './Components/LineChart/LineChart';

function App() {

  return (
    <div className='pb-12'>
      <Navbar></Navbar>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
    </div>
  )
}

export default App
