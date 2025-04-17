import {View} from 'react-native';
import React from 'react';
import {ItemDetails} from './Item';
import TemparatureIcon from '@/assets/icons/Temperature';
import RainIcon from '@/assets/icons/Rain';
import WindIcon from '@/assets/icons/Wind';
import WaterIcon from '@/assets/icons/Water';
import SunIcon from '@/assets/icons/Sun';

interface WeatherDetailsProps {
  thermometer: number;
  wind: number;
  humidity: number;
  uv: number;
  rain: number;
}

export function WeatherDetails({
  humidity,
  rain,
  thermometer,
  uv,
  wind,
}: Readonly<WeatherDetailsProps>) {
  return (
    <View className="w-full overflow-hidden  px-4 bg-gray-700 rounded-lg">
      <ItemDetails
        label="Sensação térmica"
        value={`${thermometer}ºc`}
        className="border-b-[0.3px] border-gray-500"
        icon={<TemparatureIcon />}
      />
      <ItemDetails
        label="Probabilidade de chuva"
        value={`${rain}%`}
        className="border-b-[0.3px] border-gray-500"
        icon={<RainIcon />}
      />
      <ItemDetails
        label="Velocidade do vento"
        value={`${wind} km/h`}
        className="border-b-[0.3px] border-gray-500"
        icon={<WindIcon />}
      />
      <ItemDetails
        label="Umidade do ar"
        value={`${humidity}%`}
        className="border-b-[0.3px] border-gray-500"
        icon={<WaterIcon />}
      />
      <ItemDetails label="Índice UV" value={`${uv}`} icon={<SunIcon />} />
    </View>
  );
}
