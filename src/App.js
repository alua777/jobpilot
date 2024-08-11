import logo from './logo.svg';
import './App.css';
import Header from './common/Header/Header';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header/>
      <Outlet/>
      
    </div>
  );
}

export default App;
