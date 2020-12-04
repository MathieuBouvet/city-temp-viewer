import { useState, useEffect } from "react";

const apiUrl = "api.openweathermap.org/data/2.5/weather";
const apiKey = "REPLACE_WITH_REAL_API_KEY";

function useCityTemperature(city) {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://${apiUrl}?q=${city}&appid=${apiKey}&units=metric`)
      .then(response => {
        if (!response.ok) {
          throw response;
        }
        return response.json();
      })
      .then(parsedResponse => {
        setLoading(false);
        setError("");
        setTemperature(parsedResponse.main.temp);
      })
      .catch(error => {
        setLoading(false);
        if (error.status === 404) {
          setError("City not found");
        } else {
          setError("An error occured");
        }
      });
  }, [city]);

  return { temperature, isLoading, error };
}

export default useCityTemperature;
