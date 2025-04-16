import {cn} from '@/lib/utils';
import {forwardRef} from 'react';
import {Text, TextInput, View} from 'react-native';

export interface InputProps
  extends React.ComponentPropsWithoutRef<typeof TextInput> {
  label?: string;
  labelClasses?: string;
  inputClasses?: string;
}
const Input = forwardRef<React.ElementRef<typeof TextInput>, InputProps>(
  ({className, label, labelClasses, inputClasses, ...props}, ref) => (
    <View className={cn('flex flex-col gap-1.5', className)}>
      {label && <Text className={cn('text-base', labelClasses)}>{label}</Text>}
      <TextInput
        ref={ref}
        selectionColor={'#fff'}
        placeholderTextColor={'#7F7F98'}
        className={cn(inputClasses, 'bg-gray-600 text-white px-5 py-5 rounded-md')}
        {...props}
      />
    </View>
  ),
);

export {Input};
