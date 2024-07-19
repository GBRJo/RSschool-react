// import { Person } from '@components/card/ICardProps';

// export interface FetchDataProps {
//   url: string;
//   setData: (data: Person | Person[]) => void;
//   setError: (error: boolean) => void;
//   setLoading: (loading: boolean) => void;
// }

// export const fetchData = async ({
//   url,
//   setData,
//   setError,
//   setLoading,
// }: FetchDataProps): Promise<void> => {
//   setLoading(true);

//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     const data = await response.json();

//     if (Array.isArray(data)) {
//       setData(data);
//     } else {
//       setData(data as Person);
//     }

//     setError(false);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     setData([]);
//     setError(true);
//   } finally {
//     setLoading(false);
//   }
// };
