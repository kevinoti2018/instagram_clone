import './App.css';
import {BrowserRouter as Router,Routes ,Route} from 'react-router-dom'
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import MainLayout from './components/MainLayout/MainLayout'
import Home from './components/Home/Home';
import ResetPassword from './components/ResetPassword/ResetPassword';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/forgotpassword' element={<ForgotPassword/>} />
          <Route path='/reset/:token' element={<ResetPassword/>} />
          <Route element={<MainLayout/>}/>
          <Route exatct path='/home' element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
