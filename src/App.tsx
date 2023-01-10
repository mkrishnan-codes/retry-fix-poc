import React, { useState } from "react";
import "./App.css";
import MainContent from "./components/Content/MainContent";


function App() {
  const [tryLoadComponents, setTryLoadComponents] = useState(false);
  return (
    <div className="App">
      <div className="content">
        <div>Lazy Retry POC</div>
        <p className="build-info">Built NODE_ENV - {process.env.NODE_ENV}</p>
        <button
          disabled={tryLoadComponents}
     
          onClick={() => setTryLoadComponents(true)}
        >Try Load</button>
        {tryLoadComponents && <MainContent />}
      </div>
    </div>
  );
}

export default App;
