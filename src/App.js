import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import SideLinks from "./components/SideLinks";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import { useEffect, useState } from "react";

function App() {
  const [displayNav, setDisplayNav] = useState(true);
  useEffect(()=>{
    let prevYPos = window.scrollY;
    const scrollHandler = (event)=>{
      let currentScrollPos = window.scrollY;
      let delta = currentScrollPos - prevYPos;
      prevYPos = currentScrollPos;
      if(delta<0){
        setDisplayNav(true);
      }else if(delta>0){
        setDisplayNav(false);
      }
    }
    document.addEventListener('scroll',scrollHandler);
    return ()=>document.removeEventListener('scroll', scrollHandler);
  },[])
  return (
    <>
      <SideLinks/>
      <Navbar show={displayNav}/>
      <HeroSection/>
      <AboutSection/>
      <SkillSection/>
    </>
  );
}

export default App;
