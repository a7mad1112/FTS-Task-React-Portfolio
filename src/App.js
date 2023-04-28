import Layout from "./component/layout/Layout";
import { languageContext } from "./component/Context/languageContext";
import { useState } from "react";
import { navContext } from "./component/Context/navContext";

import { showContactContext } from "./component/Context/showContactContext";
function App() {
  const value = localStorage.getItem("lang") || "en";
  const [lang, setLang] = useState(value);
  const [showNav, setShowNav] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  return (
    <div className="App">
      <languageContext.Provider value={{ lang, setLang }}>
        <navContext.Provider value={{ showNav, setShowNav }}>
          <showContactContext.Provider
            value={{ showContactForm, setShowContactForm }}
          >
            <Layout />
          </showContactContext.Provider>
        </navContext.Provider>
      </languageContext.Provider>
    </div>
  );
}

export default App;
