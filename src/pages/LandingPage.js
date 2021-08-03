import Header from "../components/sections/Header";
import Clinic from "../components/sections/Clinic.js";
import Services from "../components/sections/Services.js";
import Features from "../components/sections/Features.js";
import Doctors from "../components/sections/Doctors.js";
import Clients from "../components/sections/Clients.js";
import Faq from "../components/sections/Faq.js";

const LandingPage = () => {
  return (
    <>
      <Header />
      <Clinic />
      <Services />
      <Features />
      <Doctors />
      <Clients />
      <Faq />
    </>
  )
}

export default LandingPage;
