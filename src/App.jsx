import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LastSection from "./components/LastSection/LastSection";
import Navbar from "./components/Navbar/Navbar";
import Overlay from "./components/Overlay/Overlay";
import Portfolio from "./components/Portfolio/Portfolio";
import SingleProject from "./components/SingleProject/SingleProject";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Portfolio />

      <About />
      <Contact />
      <SingleProject />
      <LastSection />

      <Footer />
    </div>
  );
};

export default App;
