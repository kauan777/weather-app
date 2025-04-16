import {WeatherCondition} from '../../@types/WeatherCondition';
import {ImageBackground} from 'react-native';

// Import background images
import ClearDay from '../../assets/background/ClearDay.png';
import ClearNight from '../../assets/background/ClearNight.png';
import CloudsDay from '../../assets/background/CloudsDay.png';
import CloudyDay from '../../assets/background/CloudyDay.png';
import CloudyNight from '../../assets/background/CloudyNight.png';
import FewCloudsNight from '../../assets/background/FewCloudsNight.png';
import RainDay from '../../assets/background/RainDay.png';
import StormDay from '../../assets/background/StormDay.png';

export interface WeatherSummaryBackgroundProps {
  condition_code: number;
  is_day: boolean;
}

export default function WeatherSummaryBackground({
  condition_code,
  is_day,
}: Readonly<WeatherSummaryBackgroundProps>) {
  const getBackgroundImage = () => {
    switch (condition_code) {
      case WeatherCondition.ENSOLARADO:
        return is_day ? ClearDay : ClearNight;

      case WeatherCondition.PARCIALMENTE_NUBLADO:
        return is_day ? CloudsDay : FewCloudsNight;

      case WeatherCondition.NUBLADO:
      case WeatherCondition.ENCOBERTO:
        return is_day ? CloudyDay : CloudyNight;

      case WeatherCondition.CHUVA_LEVE:
      case WeatherCondition.CHUVA_MODERADA:
      case WeatherCondition.CHUVA_FORTE:
      case WeatherCondition.CHUVISCO_LEVE:
        return RainDay;

      case WeatherCondition.CHUVA_LEVE_COM_TROVOADA:
      case WeatherCondition.CHUVA_MODERADA_FORTE_COM_TROVOADA:
      case WeatherCondition.POSSIBILIDADE_TROVOADA:
        return StormDay;

      default:
        return is_day ? CloudyDay : CloudyNight;
    }
  };

  return (
    <ImageBackground
      source={getBackgroundImage()}
      className="flex-1 bg-red-500 absolute top-0 left-0 right-0 bottom-0 "
      resizeMode="cover"
    />
  );
}
