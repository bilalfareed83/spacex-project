import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import LaunchListContainer from "./components/LaunchList";
import LaunchProfileCountainer from "./components/LaunchProfile";
// import LaunchList from "./components/LaunchList/LaunchList";

function App() {
  const [id, setId] = useState(42);

  const handleIdChange = React.useCallback((newId) => {
    setId(newId);
  }, []);
  return (
    <div className="App">
      <LaunchListContainer handleIdChange={handleIdChange} />
      <LaunchProfileCountainer id={id} />
    </div>
  );
}

export default App;
