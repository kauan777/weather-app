import {getImageWeather} from '@/lib/getImageWeather';
import {ImageBackground} from 'react-native';

export interface WeatherSummaryBackgroundProps {
  condition_code: number;
  is_day: boolean;
}

export default function WeatherSummaryBackground({
  condition_code,
  is_day,
}: Readonly<WeatherSummaryBackgroundProps>) {
  return (
    <ImageBackground
      source={getImageWeather(condition_code, is_day, true)}
      className="flex-1 bg-red-500 absolute top-0 left-0 right-0 bottom-0 "
      resizeMode="cover"
    />
  );
}
