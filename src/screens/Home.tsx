import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Switch,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Input} from '@/components/Input';
import {Button} from '@/components/Button';
import {useSearch} from '@/hooks/useSearch';
import {AutoCompleteBox} from '@/components/AutoComplete/Box';

export function HomeScreen() {
  const {
    search,
    handleSearch,
    setSearch,
    error,
    autoComplete,
    enabled,
    setEnabled,
  } = useSearch();

  const isSameWord = autoComplete.some(
    item => `${item.name}, ${item.region}` === search,
  );

  return (
    <KeyboardAvoidingView
      className="flex-1 w-full bg-gray-900"
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView className="flex-1 bg-gray-900 py-12 px-8 items-center">
          <Text className="text-white flex-1 font-bold text-2xl">
            WeatherAppK
          </Text>
          <View className="flex-1 gap-8 w-full">
            <View className="gap-1">
              <Text className="text-white text-center font-bold text-xl">
                Boas vindas ao{' '}
                <Text className="text-blue-light">WeatherAppK</Text>{' '}
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
              <View className="items-start w-full">
                <View className="flex-row items-center gap-3">
                  <Switch
                    value={enabled}
                    onValueChange={setEnabled}
                    trackColor={{false: '#767577', true: '#8FB2F5'}}
                  />
                  <Text className="text-gray-300 font-bold">
                    Habilitar Auto Complete
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View className="flex-1" />
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
