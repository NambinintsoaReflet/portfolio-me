import "./App.css";
import CertificationCard from "./components/CertificationCard ";
import ExperienceCard from "./components/ExperienceCard";
import Formations from "./components/Formations";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import PortfolioSlideshow from "./components/PortfolioSlideshow";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Navbar />
      <div className=" bg-gray-100 pt-16">
        <Header />
      </div>
      {/* <Projects /> */}
      {/* <PortfolioSlideshow /> */}
      <Formations />
      <ExperienceCard />
      <CertificationCard />
    </>
  );
}

export default App;
