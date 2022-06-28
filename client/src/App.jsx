import './App.scss';
// import ReactDOM from "react-dom/client";
import Home from './Pages/home/Home'
import Login from './Pages/login/Login'
import Register from './Pages/register/Register'
import  Watch  from './Pages/watch/Watch';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />} />
            <Route path="/watch" element={<Watch />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
