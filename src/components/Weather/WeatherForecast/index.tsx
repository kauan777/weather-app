import {Text, View} from 'react-native';
import React from 'react';
import {WeatherForecastItem} from './Item';
import {ForecastItem} from '@/@types/Weather';
import moment from 'moment';
import {formatFloatToInt} from '@/lib/utils';

interface WeatherForecastProps {
  items: ForecastItem[];
  isDay: boolean;
}

export function WeatherForecast({
  items,
  isDay,
}: Readonly<WeatherForecastProps>) {
  //slice the first item
  const restItems = (items = items.slice(1));

  return (
    <View className="w-full flex-row items-center p-3 bg-gray-700">
      {items.length > 0 && (
        <>
          {restItems.map(item => (
            <WeatherForecastItem
              key={item.date_epoch}
              condition_code={item.day.condition.code}
              isDay={isDay}
              temperature_max={formatFloatToInt(item.day.maxtemp_c)}
              temperature_min={formatFloatToInt(item.day.mintemp_c)}
              weekday={moment(item.date).locale('pt-br').format('ddd')}
            />
          ))}
        </>
      )}
      {items.length === 0 && (
        <View className="p-3 bg-gray-700 items-center">
          <Text className="text-gray-200 text-center font-bold">
            Sem previsões
          </Text>
        </View>
      )}
    </View>
  );
}
