import AppRouter from "./Components/AppRouter";
import Leaf1 from './images/leaf1.png'
import Leaf2 from './images/leaf2.png'
import Leaf3 from './images/leaf3.png'
import Leaf4 from './images/leaf4.png'
import './style.css';

function App() {

  return (
    <div className="App">
      <div className="leaf">
        <div><img src={Leaf1} height="75px" width="75px" alt="tf" /></div>
        <div><img src={Leaf2} height="75px" width="75px" alt="tf" /></div>
        <div><img src={Leaf3} height="75px" width="75px" alt="tf" /></div>
        <div><img src={Leaf4} height="75px" width="75px" alt="tf" /></div>
        <div><img src={Leaf1} height="75px" width="75px" alt="tf" /></div>
     </div>
      <AppRouter/>     
    </div>
  );
}

export default App;
