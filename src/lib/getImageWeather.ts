// Background clearImages
import {WeatherCondition} from '@/@types/Weather';
import ClearDayBackground from '@/assets/background/ClearDay.png';
import ClearNightBackground from '@/assets/background/ClearNight.png';
import CloudsDayBackground from '@/assets/background/CloudsDay.png';
import CloudyDayBackground from '@/assets/background/CloudyDay.png';
import CloudyNightBackground from '@/assets/background/CloudyNight.png';
import FewCloudsNightBackground from '@/assets/background/FewCloudsNight.png';
import RainDayBackground from '@/assets/background/RainDay.png';
import StormDayBackground from '@/assets/background/StormDay.png';

// Icons
import ClearDayIcon from '@/assets/icons/ClearDay.png';
import ClearNightIcon from '@/assets/icons/ClearNight.png';
import CloudsDayIcon from '@/assets/icons/FewCloudsDay.png';
import CloudyDayIcon from '@/assets/icons/CloudyDay.png';
import CloudyNightIcon from '@/assets/icons/CloudyNight.png';
import FewCloudsNightIcon from '@/assets/icons/FewcloudsNight.png';
import RainDayIcon from '@/assets/icons/RainDay.png';
import StormDayIcon from '@/assets/icons/StormDay.png';

export const getImageWeather = (
  condition_code: number,
  isDay: boolean,
  isBackground: boolean = false,
) => {
  if (isBackground) {
    switch (condition_code) {
      case WeatherCondition.ENSOLARADO:
        return isDay ? ClearDayBackground : ClearNightBackground;

      case WeatherCondition.PARCIALMENTE_NUBLADO:
        return isDay ? CloudsDayBackground : FewCloudsNightBackground;

      case WeatherCondition.NUBLADO:
      case WeatherCondition.ENCOBERTO:
        return isDay ? CloudyDayBackground : CloudyNightBackground;

      case WeatherCondition.CHUVA_LEVE:
      case WeatherCondition.CHUVA_MODERADA:
      case WeatherCondition.CHUVA_FORTE:
      case WeatherCondition.CHUVISCO_LEVE:
        return RainDayBackground;

      case WeatherCondition.CHUVA_LEVE_COM_TROVOADA:
      case WeatherCondition.CHUVA_MODERADA_FORTE_COM_TROVOADA:
      case WeatherCondition.POSSIBILIDADE_TROVOADA:
        return StormDayBackground;

      default:
        return isDay ? CloudyDayBackground : CloudyNightBackground;
    }
  }

  switch (condition_code) {
    case WeatherCondition.ENSOLARADO:
      return isDay ? ClearDayIcon : ClearNightIcon;

    case WeatherCondition.PARCIALMENTE_NUBLADO:
      return isDay ? CloudsDayIcon : FewCloudsNightIcon;

    case WeatherCondition.NUBLADO:
    case WeatherCondition.ENCOBERTO:
      return isDay ? CloudyDayIcon : CloudyNightIcon;

    case WeatherCondition.CHUVA_LEVE:
    case WeatherCondition.CHUVA_MODERADA:
    case WeatherCondition.CHUVA_FORTE:
    case WeatherCondition.CHUVISCO_LEVE:
      return RainDayIcon;

    case WeatherCondition.CHUVA_LEVE_COM_TROVOADA:
    case WeatherCondition.CHUVA_MODERADA_FORTE_COM_TROVOADA:
    case WeatherCondition.POSSIBILIDADE_TROVOADA:
      return StormDayIcon;
    default:
      return isDay ? CloudyDayIcon : CloudyNightIcon;
  }
};
