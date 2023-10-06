import Navbar from "@/scenes/Navbar";
import Home from "@/scenes/Home";
import { useState, useEffect } from "react";
import { SelectedPage } from "@/shared/types";
import Benefits from "./scenes/Benefits";
import OurClasses from "./scenes/OurClasses";
import ContactUs from "./scenes/ContactUs";
import Footer from "./scenes/Footer";

function App() {
  // const [selectedPage, setSelectedPage] = useState<string>("home");
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home,
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    // anytime we're handling window type objects, we always want to add the event listener
    return () => window.removeEventListener("scroll", handleScroll); //to avoid memory leaks
  }, []);
  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

export default App;
