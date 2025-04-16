import {View, Text} from 'react-native';
import React from 'react';
import FewCloudsNightIcon from '@/assets/icons/FewCloudsNight';
import WeatherSummaryBackground from './Background';

export interface WeatherSummaryCardProps {
  location: string;
  date: string;
  temperature: number;
  minTemperature: number;
  maxTemperature: number;
  condition: string;
}

export default function WeatherSummaryCard() {
  return (
    <View className="pt-5 px-4 bg-gray-500 rounded-md w-full overflow-hidden">
      <View className="z-10">
        <Text className="text-white text-2xl font-bold">Porto Alegre, RS</Text>
        <Text className="text-white">Segunda-feira, 15 de maio de 2023</Text>
      </View>
      <View className="flex-row items-center mt-20 justify-between z-10">
        <View>
          <Text className="text-white font-bold text-6xl">28ºc</Text>
          <Text className="text-white font-bold ">26ºc / 32ºc</Text>
          <Text className="text-white font-bold ">Poucas nuvens</Text>
        </View>
        <FewCloudsNightIcon />
      </View>
      <WeatherSummaryBackground condition_code={1000} is_day={true} />
    </View>
  );
}
