import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Sarah from "./components/Sarah";
import Footer from "./components/Footer"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className=" max-w-screen-2xl mx-auto"></div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sarah" element={<Sarah />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
