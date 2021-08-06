import { useRef } from "react";

import Navbar from "../components/Navbar";
import Header from "../components/sections/Header";
import Clinic from "../components/sections/Clinic.js";
import Services from "../components/sections/Services.js";
import Features from "../components/sections/Features.js";
import Doctors from "../components/sections/Doctors.js";
import Clients from "../components/sections/Clients.js";
import Faq from "../components/sections/Faq.js";
import DownloadApp from "../components/sections/DownloadApp.js";
import Footer from "../components/sections/Footer.js"

const LandingPage = () => {
  const servicesRef = useRef(null);
  return (
    <>
      <Navbar refs={servicesRef}/>
      <Header />
      <Clinic />
      <Services ref={servicesRef}/>
      <Features />
      <Doctors />
      <Clients />
      <Faq />
      <DownloadApp />
      <Footer />
    </>
  )
}

export default LandingPage;
