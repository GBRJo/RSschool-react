import { Card } from '@components/card/baseCard/Card';
import { Person } from '@components/card/ICardProps';

interface ICardListProps {
  results: Person[];
  onResultClick: (id: string) => void;
}

const getIdFromUrl = (url: string): string => {
  const parts = url.split('/');
  return parts[parts.length - 2];
};

export const CardList: React.FC<ICardListProps> = ({
  results,
  onResultClick,
}) => (
  <div className="card-list">
    {results.map((result) => (
      <Card
        key={getIdFromUrl(result.url)}
        person={result} // Передаем result как объект person
        onClick={() => onResultClick(getIdFromUrl(result.url))}
      />
    ))}
  </div>
);
