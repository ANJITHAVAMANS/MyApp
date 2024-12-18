import './App.css';
import {Route,BrowserRouter, Routes} from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import Profile from './Profile';
function App() {
  return (
    <BrowserRouter><div>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
      </div></BrowserRouter>
    
  );
}

export default App;
