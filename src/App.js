import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
    </>
  );
}

export default App;
