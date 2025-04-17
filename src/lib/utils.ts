import axios from 'axios';

export const cn = (...inputs: (string | undefined)[]) => {
  return inputs.filter(Boolean).join(' ');
};

export const handleMessageError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    return error?.response?.data?.error?.message ?? 'Erro desconhecido';
  }
  return 'Erro desconhecido';
};

export function formatFloatToInt(value: number): number {
  return Math.trunc(value);
}

