import {ForecastItem, WeatherDetails} from '@/@types/Weather';
import {handleMessageError} from '@/lib/utils';
import {api} from '@/services/axios';
import moment from 'moment';
import {useState} from 'react';

export const useWeather = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [weather, setWeather] = useState<WeatherDetails | null>(null);
  const [forecasts, setForecasts] = useState<ForecastItem[] | null>(null);

  async function getCurrentWeather(location: string) {
    try {
      const {data} = await api.get('/current.json', {
        params: {
          q: location,
          lang: 'pt',
        },
      });
      setWeather(data);
    } catch (error) {
      const message = handleMessageError(error);
      setError(message);
    } finally {
    }
  }

  async function getWeatherForecast(location: string) {
    try {
      const {data} = await api.get('/forecast.json', {
        params: {
          q: location,
          days: 6,
          lang: 'pt',
        },
      });
      setForecasts(data.forecast.forecastday);
    } catch (error) {
      const message = handleMessageError(error);
      setError(message);
    }
  }

  async function getDetails(location: string) {
    setIsLoading(true);
    await Promise.all([
      getCurrentWeather(location),
      getWeatherForecast(location),
    ]);
    setIsLoading(false);
  }

  return {
    isLoading,
    error,
    weather,
    forecasts,
    getDetails,
  };
};
