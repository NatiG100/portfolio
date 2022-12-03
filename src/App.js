import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import SideLinks from "./components/SideLinks";
import AboutSection from "./sections/AboutSection";

function App() {
  return (
    <>
      <SideLinks/>
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
    </>
  );
}

export default App;
