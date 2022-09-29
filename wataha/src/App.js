import logo from './logo.svg';
import './App.css';
import Simo from "./components/Simo";
import Krolik from "./components/Krolik";
import Kubsky from "./components/Kubsky";
import Seva from "./components/Seva";
import Szczurek from "./components/Szczurek";

function App() {
  return (
    <div className="App" style={{display: "grid", gridTemplateColumns:'repeat(6, 1fr)'}}>
        <div>
            <Simo/>
        </div>
        <div>
            <Krolik/>
        </div>
        <div>
            <Kubsky/>
        </div>
        <div>
            <Seva/>
        </div>
        <div>
            <Szczurek/>
        </div>
    </div>
  );
}

export default App;
