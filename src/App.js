import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import SideLinks from "./components/SideLinks";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import { useEffect, useState } from "react";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./sections/Footer";
import {data} from './assets/data/data';

function App() {
  const [displayNav, setDisplayNav] = useState(true);
  const [isScrollAtTop, setIsScrollAtTop] = useState(window.scrollY<60);
  useEffect(()=>{
    let prevYPos = window.scrollY;
    const scrollHandler = (event)=>{
      let currentScrollPos = window.scrollY;
      setIsScrollAtTop(window.scrollY<60); // set isScrollAtTop to true when scroll pos Y is less than 20px
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
      <Navbar show={displayNav} showShadow={isScrollAtTop}/>
      <HeroSection data={data.personalInfo}/>
      <AboutSection data={data.personalInfo.about}/>
      <SkillSection data={data.skills}/>
      <ExperienceSection data={data.experience}/>
      <ProjectsSection data={data.projects}/>
      <ContactSection/>
      <Footer/>
    </>
  );
}

export default App;
