import "./App.css";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/NavBar/Navbar";
import Passions from "./components/Passions/Passions";
import Portfolio from "./components/Porfolio/Portfolio";

function App() {
  return (
    <div className="w-[95%] md:w-[screen]">
      <Navbar />
      <Header />
      <Passions />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
