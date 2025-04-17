import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';

interface ItemProps extends TouchableOpacityProps {
  name: string;
  region: string;
}

export function Item({name, region, ...props}: Readonly<ItemProps>) {
  return (
    <TouchableOpacity className="px-5 py-4 bg-gray-500" {...props}>
      <Text className="text-white text-base font-medium ">
        {name}, {region}
      </Text>
    </TouchableOpacity>
  );
}
