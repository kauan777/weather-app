import {View, Text, ViewProps} from 'react-native';
import React from 'react';
import {cn} from '@/lib/utils';

//extends view props
interface ItemDetailsProps extends ViewProps {
  label: string;
  value: string;
  icon: React.ReactNode;
}

export function ItemDetails({
  label,
  value,
  icon,
  className,
  ...props
}: Readonly<ItemDetailsProps>) {
  return (
    <View className={cn('flex-row justify-between py-5', className)} {...props}>
      <View className="flex-row gap-3 items-center">
        {icon}
        <Text className="text-gray-200 font-bold">{label}</Text>
      </View>
      <Text className="text-white font-bold text-base">{value}</Text>
    </View>
  );
}
