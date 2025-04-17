import {getImageWeather} from '@/lib/getImageWeather';
import {ImageBackground} from 'react-native';

export interface WeatherSummaryBackgroundProps {
  condition_code: number;
  isDay: boolean;
}

export default function WeatherSummaryBackground({
  condition_code,
  isDay,
}: Readonly<WeatherSummaryBackgroundProps>) {
  return (
    <ImageBackground
      source={getImageWeather(condition_code, isDay, true)}
      className="flex-1 bg-red-500 absolute top-0 left-0 right-0 bottom-0 "
      resizeMode="cover"
    />
  );
}
