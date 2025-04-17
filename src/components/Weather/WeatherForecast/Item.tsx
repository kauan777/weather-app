import {Image, Text, View} from 'react-native';
import React from 'react';
import {getImageWeather} from '@/lib/getImageWeather';

interface WeatherForecastItemProps {
  condition_code: number;
  isDay: boolean;
  temperature_max: number;
  temperature_min: number;
  weekday: string;
}

export function WeatherForecastItem({
  condition_code,
  isDay,
  temperature_max,
  temperature_min,
  weekday,
}: Readonly<WeatherForecastItemProps>) {
  return (
    <View className=" flex-1 items-center px-1">
      <Text className="text-gray-200 font-bold">{weekday}</Text>
      <Image
        source={getImageWeather(condition_code, isDay)}
        className="w-[56px] h-[56px]"
      />
      <Text className="text-white font-bold">{temperature_max}ºc</Text>
      <Text className="text-gray-400 font-bold">{temperature_min}ºc</Text>
    </View>
  );
}
