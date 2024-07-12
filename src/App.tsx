import { SearchInput } from '@components/Input/SearchInput/SearchInput';
import { useEffect, useState } from 'react';
import { Button } from '@components/button/Button';
import searchIcon from './assets/search.svg';
import errorIcon from './assets/error.svg';
import { CardList } from '@components/cardList/CardList';
import { useSearchFromLocalStorage } from './hooks/hooks';
import { fetchSearchResults } from './services/fetchSearchResults/fetchSearchResults';
import { Person } from '@components/card/ICardProps';

export const App: React.FC = () => {
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [results, setResults] = useState<Person[]>([]);
  const [search, setSearch, saveToLocalStorage] = useSearchFromLocalStorage();

  const handleSearchChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const newSearch = event.target.value.trim();
    setSearch(newSearch);
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();
    saveToLocalStorage(search); // Запись в локальное хранилище при отправке формы
    await fetchSearchResults(search, setResults, setError, setLoading);
  };

  useEffect(() => {
    fetchSearchResults(search, setResults, setError, setLoading);
  }, [search]); // Запускаем fetchSearchResults один раз при монтировании

  const handleThrowError = (): void => {
    console.error('Error caught in App: Test error');
    setError(true);
  };

  return (
    <div className="app">
      <h1>Star Wars</h1>
      {error ? (
        <p>Something went wrong...</p>
      ) : (
        <>
          <span>
            Here you can search some facts about persons from Star Wars by name.
          </span>
          <form onSubmit={handleSubmit}>
            <SearchInput
              placeholder="Type to search..."
              value={search}
              onChange={handleSearchChange}
              name="search"
            />
            <Button
              ariaLabel="Search"
              imgSrc={searchIcon}
              imgAlt="Search Icon"
              type="submit"
              className="search"
            />
          </form>
          <Button
            ariaLabel="Error"
            imgSrc={errorIcon}
            imgAlt="Error Icon"
            type="button"
            className="error"
            onClick={handleThrowError}
          />

          {isLoading ? (
            <div className="spinner">Loading...</div>
          ) : (
            <CardList results={results} />
          )}
        </>
      )}
    </div>
  );
};
