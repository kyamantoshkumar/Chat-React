import {Routes, Route, BrowserRouter } from "react-router-dom"
import "./App.css";
import RegistrationView from "./ChatFolder/RegestrationPage";
import Weather from "./Components/Newpage/NewFile";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Room from "./pages/Room";
import LoginPage1 from "./pages/Trial Page";
import Counter from "./Search/effect";
import Mantosh from "./Search/mantosh";
import GeeksforGeeks from "./Search/toast";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/room" element={<Room />} />
        <Route path="/geeksforgeeks" element={<GeeksforGeeks/>} />
        <Route path ="/counter" element={<Counter/>} />
        <Route path="registrationview" element={<RegistrationView/>} />
        <Route path ="/mantosh" element={<Mantosh/>} />
        <Route path="/login1" element={<LoginPage1/>}/>
        <Route path="/weather" element={<Weather/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
