import { useState } from "react";
import PropTypes from "prop-types";

import "./CityInput.css";

function CityInput({ onSubmitCity }) {
  const [currentCityValue, setCurrentCityValue] = useState("");
  return (
    <div className="CityInput">
      <label htmlFor="cityName">Entrez le nom d'une ville</label>
      <input
        type="text"
        id="cityName"
        value={currentCityValue}
        onChange={e => setCurrentCityValue(e.target.value)}
        placeholder="nom de ville"
      />
      <button onClick={() => onSubmitCity(currentCityValue)}>Valider</button>
    </div>
  );
}

CityInput.propTypes = {
  onSubmitCity: PropTypes.func.isRequired,
};

export default CityInput;
