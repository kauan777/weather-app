import {View, Text} from 'react-native';
import React from 'react';
import ErrorIllustration from '@/assets/illustrations/Error';
import {Button} from '../Button';
import {useNavigation} from '@react-navigation/native';

export function EmptyState() {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View className="flex-1 px-12 gap-8 bg-gray-900 items-center justify-center">
      <ErrorIllustration width={230} height={200} />
      <Text className="text-gray-300 text-center text-xl font-semibold">
        Não foi possível carregar as informações
      </Text>
      <Button className="w-full" label="Tentar novamente" onPress={goBack} />
    </View>
  );
}
