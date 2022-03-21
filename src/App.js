import logo from './logo.svg';
import './App.css';
import Cosmetics from './Components/Cosmetics/Cosmetics';
import Shoes from './Components/Shoes/Shoes';
import Ornaments from './Components/Ornaments/Ornaments';

function App() {
  return (
    <div className="App">
      <Cosmetics></Cosmetics>
      <Shoes></Shoes>
      <Ornaments></Ornaments>
    </div>
  );
}

export default App;
