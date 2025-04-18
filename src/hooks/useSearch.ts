import {AutoCompleteItem} from '@/@types/Search';
import {AutoCompleteBoxProps} from '@/components/AutoComplete/Box';
import {handleMessageError} from '@/lib/utils';
import {api} from '@/services/axios';
import {StackActions, useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';

export const useSearch = () => {
  const [search, setSearch] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [autoComplete, setAutoComplete] = useState<AutoCompleteItem[]>([]);
  const navigation = useNavigation();
  const [enabled, setEnabled] = useState(false);

  const handleSearch = () => {
    navigation.dispatch(
      StackActions.push('Weather', {
        location: search,
      }),
    );
    setSearch('');
    setError(null);
    setAutoComplete([]);
    setEnabled(false);
  };

  const autoCompleteSearch = async (
    text: string,
  ): Promise<AutoCompleteBoxProps[] | undefined> => {
    try {
      const {data} = await api.get('/search.json', {
        params: {
          q: text,
          lang: 'pt',
        },
      });
      setAutoComplete(data);
      return data;
    } catch (error) {
      const message = handleMessageError(error);
      setError(message);
    }
  };

  useEffect(() => {
    if (search.length > 2 && enabled) {
      autoCompleteSearch(search);
    } else {
      setAutoComplete([]);
    }
  }, [search, enabled]);

  return {
    search,
    setSearch,
    handleSearch,
    error,
    setError,
    autoCompleteSearch,
    autoComplete,
    enabled,
    setEnabled,
  };
};
