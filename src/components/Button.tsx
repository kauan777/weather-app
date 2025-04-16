import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import {cn} from '../lib/utils';

interface ButtonProps extends TouchableOpacityProps {
  label: string;
  className?: string;
  isLoading?: boolean;
}

function Button({
  label,
  className,
  isLoading,
  ...props
}: Readonly<ButtonProps>) {
  return (
    <TouchableOpacity
      className={cn('bg-blue-light py-5 rounded-md disabled:opacity-70', className)}
      {...props}>
      {isLoading && <ActivityIndicator className="text-white" />}
      {!isLoading && (
        <Text className="text-white text-center font-bold">{label}</Text>
      )}
    </TouchableOpacity>
  );
}

export {Button};
