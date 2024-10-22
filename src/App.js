import logo from './logo.svg';
import './App.css';
import Header from './common/Header/Header';
import { Outlet } from 'react-router-dom';
import HeaderSearch from './components/HeaderSearch/HeaderSearch';
function App() {
  return (
    <div className="App">
      <Header/>
      <HeaderSearch/>
      <Outlet/>
      
    </div>
  );
}

export default App;
