import { Routes } from 'react-router-dom';
import './App.css';
import Head from  './components/Head';
import Menu from './components/Products/Menu';
import CatergoryHeader from './components/Products/Productnav';
function App() {
  return (
    <div className="App">
     <Head/>
     <Menu/>
     <CatergoryHeader/>
    </div>
  );
}

export default App;
