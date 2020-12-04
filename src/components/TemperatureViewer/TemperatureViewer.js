import PropTypes from "prop-types";

import useCityTemperature from "../../useCityTemperature";

import "./TemperatureViewer.css";

function isHot(temperature) {
  return temperature >= 15;
}

function getTemperatureClassName(temperature) {
  if (temperature == null) {
    return "";
  }
  return isHot(temperature) ? "hot" : "cold";
}

function getTemperatureText(isHot) {
  return isHot ? "Il fait chaud" : "Il fait froid";
}

function TemperatureViewer({ city, onReset }) {
  const { temperature, isLoading, error } = useCityTemperature(city);

  return (
    <div
      className={`TemperatureViewer ${getTemperatureClassName(temperature)}`}
    >
      {isLoading && "Vérification de la température en cours..."}
      {error ? error : `A ${city}, ${getTemperatureText(isHot(temperature))}`}
      <button className="resetCity" onClick={onReset}>
        recommencer
      </button>
    </div>
  );
}

TemperatureViewer.propTypes = {
  city: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default TemperatureViewer;
