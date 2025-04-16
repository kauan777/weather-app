import WeatherSummaryCard from '@/components/Weather/WeatherSummaryCard';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

export function WeatherScreen() {
  return (
    <SafeAreaView className="flex-1 bg-gray-900 p-8">
      <WeatherSummaryCard />
    </SafeAreaView>
  );
}
