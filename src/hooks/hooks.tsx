import { useCallback, useState } from 'react';

export const useSearchFromLocalStorage = () => {
  const [search, setSearch] = useState<string>(() => {
    const lastSearch = localStorage.getItem('lastSearch');
    return lastSearch ?? '';
  });

  const updateSearch = useCallback((newSearch: string) => {
    setSearch(newSearch);
  }, []);

  const saveToLocalStorage = useCallback((search: string) => {
    localStorage.setItem('lastSearch', search);
  }, []);

  return [search, updateSearch, saveToLocalStorage] as const;
};
