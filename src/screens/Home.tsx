import {Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Input} from '@/components/Input';
import {Button} from '@/components/Button';
import {useSearch} from '@/hooks/useSearch';
import {AutoCompleteBox} from '@/components/AutoComplete/Box';

export function HomeScreen() {
  const {search, handleSearch, setSearch, error, autoComplete} = useSearch();

  const isSameWord = autoComplete.some(item => item.name === search);

  return (
    <SafeAreaView className="flex-1 bg-gray-900 py-12 px-8 items-center ">
      <Text className="text-white font-bold text-2xl">WeatherAppK</Text>
      <View className="mt-72 gap-8 w-full">
        <View className="gap-1">
          <Text className="text-white text-center font-medium text-base text-xl">
            Boas vindas ao <Text className="text-blue-light">WeatherAppK</Text>{' '}
          </Text>
          <Text className="text-white text-center text-sm">
            Escolha um local para ver a previsão do tempo
          </Text>
        </View>
        <View className="gap-4">
          <View>
            <Input
              placeholder="Buscar local"
              value={search}
              onChangeText={setSearch}
            />
            {autoComplete.length > 0 && !isSameWord && (
              <AutoCompleteBox
                onPressItem={(text: string) => {
                  setSearch(text);
                }}
                items={autoComplete}
              />
            )}
          </View>

          {error && <Text className="text-red-500 text-sm">{error}</Text>}
          <Button label="Buscar" onPress={handleSearch} />
        </View>
      </View>
    </SafeAreaView>
  );
}
