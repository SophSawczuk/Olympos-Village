import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Activities from "./components/Activities";
import Contact from "./components/Contact";
import Restaurant from "./components/Restaurant";
import Rooms from "./components/Rooms";
import Room1 from "./components/Room1";
import ScrollToTop from "./assets/ScrollToTop";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Room2 from "./components/Room2";
import Room3 from "./components/Room3";

function App() {
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/room-1" element={<Room1 />} />
        <Route path="/room-2" element={<Room2 />} />
        <Route path="/room-3" element={<Room3 />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
