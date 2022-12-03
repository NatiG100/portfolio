import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import SideLinks from "./components/SideLinks";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";

function App() {
  return (
    <>
      <SideLinks/>
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <SkillSection/>
    </>
  );
}

export default App;
