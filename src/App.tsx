import { SearchInput } from '@components/Input/SearchInput/SearchInput';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Button } from '@components/button/Button';
import searchIcon from './assets/search.svg';
import errorIcon from './assets/error.svg';

interface Person {
  name: string;
  description: string;
  hair_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  height: string;
  mass: string;
  skin_color: string;
}

export const App: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const [results, setResults] = useState<Person[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const lastSearch = localStorage.getItem('lastSearch');
    if (lastSearch) {
      setSearch(lastSearch);
    }
    fetchSearchResults();
  }, []); // Пустой массив зависимостей для эмуляции componentDidMount

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearch(event.target.value.trim());
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();
    localStorage.setItem('lastSearch', search);
    fetchSearchResults();
  };

  const fetchSearchResults = async (): Promise<void> => {
    let apiUrl = 'https://swapi.dev/api/people/';

    if (search) {
      apiUrl += `?search=${encodeURIComponent(search)}`;
    }

    setLoading(true);

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const updatedResults = data.results.map((person: Person) => ({
        name: person.name,
        description: (
          <>
            Birth Year: {person.birth_year}, Eye Color: {person.eye_color},
            Gender: {person.gender},
            <br />
            Hair Color: {person.hair_color}, Height: {person.height}cm, Mass:{' '}
            {person.mass}kg, Skin Color: {person.skin_color}
          </>
        ),
      }));
      setResults(updatedResults);
      setError(false);
    } catch (error) {
      console.error('Error fetching search results:', error);
      setResults([]);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

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
            <div className="results">
              {results.map((result, index) => (
                <div key={index}>
                  <h2>{result.name}</h2>
                  <p>{result.description}</p>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};
