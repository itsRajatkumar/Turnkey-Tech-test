import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from './components/Headers/Header';
import Landing from './components/Landing/Landing';
import Slider from './components/Slider/Slider';


function App() {
  
  return (
    <>
      <Header />
      <Landing/>
      <Slider/>
    </>
  );
}

export default App;
