import { Person } from '@components/card/ICardProps';

export interface FetchDataProps {
  url: string;
  setData: (data: Person | Person[]) => void;
  setError: (error: boolean) => void;
  setLoading: (loading: boolean) => void;
}

export const fetchData = async ({
  url,
  setData,
  setError,
  setLoading,
}: FetchDataProps): Promise<void> => {
  setLoading(true);

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();

    // Проверяем, является ли data массивом или объектом Person
    if (Array.isArray(data)) {
      setData(data); // Если data массив, устанавливаем массив Person[]
    } else {
      setData(data as Person); // Если data объект, устанавливаем объект Person
    }

    setError(false);
  } catch (error) {
    console.error('Error fetching data:', error);
    setData([]); // Можно также установить null или другое значение, в зависимости от логики вашего приложения
    setError(true);
  } finally {
    setLoading(false);
  }
};
