import Header from "./components/Header";
import Clinic from "./components/ClinicSection.js";
import Services from "./components/Services.js";
import Features from "./components/Features.js";
import Doctors from "./components/Doctors.js";
import Clients from "./components/Clients.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Clinic />
      <Services />
      <Features />
      <Doctors />
      <Clients />
    </div>
  );
}

export default App;
