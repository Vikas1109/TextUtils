import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setTimeout(() => {
      setAlert();
    }, 1400);

    setAlert({
      msg: msg,
      type: type,
    });
  };

  // for the dark mode
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");

      document.body.style.background = "#002147";
      document.querySelector(".mb-6 h2").style.color = "white";
      document.querySelector(".fs-5").style.color = "white";
      showAlert(" Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.background = "white";
      document.querySelector(".mb-6 h2").style.color = "#002147";
      document.querySelector(".fs-5").style.color = "#002147";
      showAlert("  Light Mode has been enabled", "success");
    }
  };

  // for cyanMode

  const [cyan, setcyanMode] = useState("light");

  const cyanMode = () => {
    if (cyan === "light") {
      setcyanMode("cyan");
      document.body.style.background = "cyan";
    } else {
      setcyanMode("light");
      document.body.style.background = "white";
    }
  };

  return (
    <>

   
      {/* NAVBAR */}
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        cyanMode={cyanMode}
      />

      {/* Alert */}

      <Alert alert={alert} />

      {/* TEXTFORM */}
      <div className="container">
        <Textform heading="Enter the text to analyze" showAlert={showAlert} />
      </div>
      {/* About */}
      <About />
      {/* Contact */}
      <Contact />
      {/* FOOTER */}
      <Footer /> 
    
    </>
  );
}

export default App;
