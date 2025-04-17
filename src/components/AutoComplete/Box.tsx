import {View} from 'react-native';
import React from 'react';
import {AutoCompleteItem} from '@/@types/Search';
import {Item} from './Item';

export interface AutoCompleteBoxProps {
  items: AutoCompleteItem[];
  onPressItem: (text: string) => void;
}

export function AutoCompleteBox({
  items,
  onPressItem,
}: Readonly<AutoCompleteBoxProps>) {
  return (
    <View className="absolute top-16 z-10 w-full">
      {items.map(item => (
        <Item
          key={item.id}
          name={item.name}
          region={item.region}
          onPress={() => {
            onPressItem(`${item.name}, ${item.region}`);
          }}
        />
      ))}
    </View>
  );
}
