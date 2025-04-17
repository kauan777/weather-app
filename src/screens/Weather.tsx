import {EmptyState} from '@/components/States/Empty';
import {ErrorState} from '@/components/States/Error';
import {LoadingState} from '@/components/States/Loading';
import {WeatherDetails} from '@/components/Weather/WeatherDetails';
import {WeatherForecast} from '@/components/Weather/WeatherForecast';
import WeatherSummaryCard from '@/components/Weather/WeatherSummaryCard';
import {useWeather} from '@/hooks/useWeather';
import {formatFloatToInt} from '@/lib/utils';
import {useNavigation, useRoute} from '@react-navigation/native';
import moment from 'moment';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import 'moment/locale/pt';
import {Button} from '@/components/Button';
import {ScrollView, View} from 'react-native';

export function WeatherScreen() {
  const params = useRoute().params as {location: string};
  const location = params?.location;

  const {error, isLoading, weather, forecasts, getDetails} = useWeather();
  const navigation = useNavigation();

  useEffect(() => {
    if (location) {
      getDetails(location);
    }
  }, [location]);

  if (isLoading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState message={error} />;
  }

  if (!weather || !forecasts) {
    return <EmptyState />;
  }

  return (
    <ScrollView className="flex-1 w-full bg-gray-900">
      <SafeAreaView className="flex-1 bg-gray-900">
        <View className=" gap-3 bg-gray-900 p-8">
          <WeatherSummaryCard
            condition={weather.current.condition.text}
            date={
              moment().locale('pt').format('dddd') +
              ', ' +
              moment().locale('pt').format('DD [de] MMMM')
            }
            location={weather.location.name + ', ' + weather.location.region}
            maxTemperature={formatFloatToInt(forecasts[0].day.maxtemp_c)}
            minTemperature={formatFloatToInt(forecasts[0].day.mintemp_c)}
            temperature={formatFloatToInt(weather.current.temp_c)}
            isDay={weather.current.is_day === 1}
            condition_code={weather.current.condition.code}
          />
          <WeatherDetails
            humidity={weather.current.humidity}
            thermometer={formatFloatToInt(weather.current.temp_c)}
            rain={formatFloatToInt(weather.current.precip_mm)}
            wind={formatFloatToInt(weather.current.wind_kph)}
            uv={formatFloatToInt(weather.current.uv)}
          />
          <WeatherForecast
            isDay={weather.current.is_day === 1}
            items={forecasts}
          />
          <Button
            className="w-full"
            label="Voltar"
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
