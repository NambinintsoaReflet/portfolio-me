import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import PortfolioSlideshow from "./components/PortfolioSlideshow";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 pt-16">
        <Header />
      </div>
      {/* <Projects /> */}
      {/* <PortfolioSlideshow /> */}
    </>
  );
}

export default App;
