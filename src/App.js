import {Routes, Route, BrowserRouter } from "react-router-dom"
import "./App.css";
import RegistrationView from "./ChatFolder/RegestrationPage";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Room from "./pages/Room";
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
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
