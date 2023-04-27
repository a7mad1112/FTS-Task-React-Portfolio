import Layout from "./component/layout/Layout";
import { languageContext } from "./component/Context/languageContext";
import { useState } from "react";

function App() {
  const value = localStorage.getItem("lang") || "en";
  const [lang, setLang] = useState(value)

  return (
    <div className="App">
      <languageContext.Provider value={{ lang, setLang }} >
        <Layout />
      </languageContext.Provider>
    </div>
  );
}

export default App;
