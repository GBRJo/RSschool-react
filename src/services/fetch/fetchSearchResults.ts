// import { Person } from '@components/card/ICardProps';

// export const fetchSearchResults = async (
//   search: string,
//   page: number,
//   setResults: (results: Person[]) => void,
//   setError: (error: boolean) => void,
//   setLoading: (loading: boolean) => void,
//   setTotalCount: (count: number) => void,
// ): Promise<void> => {
//   let apiUrl = `https://swapi.dev/api/people/?page=${page}`;

//   if (search) {
//     apiUrl += `&search=${encodeURIComponent(search)}`;
//   }

//   setLoading(true);

//   try {
//     const response = await fetch(apiUrl);
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     const data = await response.json();
//     const updatedResults: Person[] = data.results;
//     setResults(updatedResults);
//     setTotalCount(data.count);
//     setError(false);
//   } catch (error) {
//     console.error('Error fetching search results:', error);
//     setResults([]);
//     setError(true);
//   } finally {
//     setLoading(false);
//   }
// };
