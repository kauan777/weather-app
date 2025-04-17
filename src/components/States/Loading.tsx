import {View, ActivityIndicator} from 'react-native';
import React from 'react';
import LoadingIllustration from '@/assets/illustrations/Loading';

export function LoadingState() {
  return (
    <View className="flex-1 bg-gray-900 gap-12 items-center justify-center">
      <LoadingIllustration height={200} />
      <ActivityIndicator size={'large'} color={'#8FB2F5'} />
    </View>
  );
}
