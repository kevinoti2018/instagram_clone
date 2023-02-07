import './App.css';
import {BrowserRouter as Router,Routes ,Route} from 'react-router-dom'
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import MainLayout from './components/MainLayout/MainLayout'
import Home from './components/Home/Home';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/forgot-password' element={<ForgotPassword/>} />
          <Route element={<MainLayout/>}/>
          <Route exatct path='/home' element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
