import {View, Text, Image} from 'react-native';
import React from 'react';
import WeatherSummaryBackground from './Background';
import {getImageWeather} from '@/lib/getImageWeather';

export interface WeatherSummaryCardProps {
  location: string;
  date: string;
  temperature: number;
  minTemperature: number;
  maxTemperature: number;
  condition: string;
  condition_code: number;
  isDay: boolean;
}

export default function WeatherSummaryCard({
  condition,
  date,
  location,
  maxTemperature,
  minTemperature,
  temperature,
  isDay,
  condition_code,
}: Readonly<WeatherSummaryCardProps>) {
  return (
    <View className="pt-5 pl-4 bg-gray-500 rounded-lg w-full overflow-hidden">
      <View className="z-10">
        <Text className="text-white text-2xl font-bold">{location}</Text>
        <Text className="text-white">{date}</Text>
      </View>
      <View className="flex-row items-center mt-20 justify-between z-10">
        <View>
          <Text className="text-white font-bold text-6xl">{temperature}ºc</Text>
          <Text className="text-white font-bold ">
            {minTemperature}ºc / {maxTemperature}ºc
          </Text>
          <Text className="text-white font-bold ">{condition}</Text>
        </View>
        <Image
          source={getImageWeather(condition_code, isDay)}
          className="w-[160px] h-[160px]"
        />
      </View>
      <WeatherSummaryBackground condition_code={condition_code} isDay={isDay} />
    </View>
  );
}
