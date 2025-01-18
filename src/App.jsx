import { Route, Routes } from "react-router-dom"
import { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Course from "./pages/Course/Course";
import Contact from "./pages/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import NotFound from "./pages/NotFound/NotFound";


function App() {

  const [sidebar , setSidebar] = useState(false);
  const [stickynav , setStickyNav] = useState(0);

  const show_sidebar = () => {

    setSidebar(true);
  }

  const close_sidebar = () => {

    setSidebar(false);
  }

  // scroll Y 
  const add_sticky_navbar= (e) => {

   let scroll_Y  = window.scrollY;

   let screen_width = window.innerWidth >= 992 ? 70 : 50;

   if(scroll_Y >= screen_width){

    setStickyNav(scroll_Y)
   }
   else{

    setStickyNav(0);
   }
  }

  useEffect(() => {

    // added scroll event
     window.addEventListener("scroll"  , add_sticky_navbar);


    // remove scroll event multiples
    return () => {

      window.removeEventListener("scroll"  , add_sticky_navbar);
    }
  },[stickynav])


  


  return (
    <>
    <Navbar stickynav={stickynav} show_sidebar={show_sidebar} />
    <Sidebar close_sidebar={ close_sidebar} sidebar={sidebar}/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={<About/>  } />
        <Route path="/courses" element={<Course/> } />
        <Route path="/contact" element={<Contact/> } />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
