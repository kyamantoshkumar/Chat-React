import {Routes, Route, BrowserRouter } from "react-router-dom"
import "./App.css";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Room from "./pages/Room";
import Counter from "./Search/effect";
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
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
