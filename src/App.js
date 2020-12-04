import { useState } from "react";
import CityInput from "./components/CityInput";
import TemperatureViewer from "./components/TemperatureViewer";

import "./App.css";

function App() {
  const [city, setCity] = useState("");
  return (
    <div className="App">
      <header className="App-header">City Temp Viewer</header>
      {!city ? (
        <CityInput onSubmitCity={setCity} />
      ) : (
        <TemperatureViewer city={city} onReset={() => setCity("")} />
      )}
    </div>
  );
}

export default App;
