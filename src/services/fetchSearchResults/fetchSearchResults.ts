import { Person } from '@components/card/ICardProps';

export const fetchSearchResults = async (
  search: string,
  setResults: (results: Person[]) => void,
  setError: (error: boolean) => void,
  setLoading: (loading: boolean) => void,
): Promise<void> => {
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
    const updatedResults: Person[] = data.results;
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
