'use client';

import { useCallback, useState } from 'react';

export const useSearchFromLocalStorage = () => {
  const [search, setSearch] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const lastSearch = localStorage.getItem('lastSearch');
      return lastSearch ?? '';
    }
    return '';
  });

  const updateSearch = useCallback((newSearch: string) => {
    setSearch(newSearch);
  }, []);

  const saveToLocalStorage = useCallback((search: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('lastSearch', search);
    }
  }, []);

  return [search, updateSearch, saveToLocalStorage] as const;
};
