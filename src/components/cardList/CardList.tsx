import { Card } from '@components/card/Card';
import { Person } from '@components/card/ICardProps';

interface ICardListProps {
  results: Person[];
}

const getIdFromUrl = (url: string): string => {
  const parts = url.split('/');
  return parts[parts.length - 2];
};

export const CardList: React.FC<ICardListProps> = ({ results }) => (
  <div className="card-list">
    {results.map((result) => (
      <Card key={getIdFromUrl(result.url)} {...result} />
    ))}
  </div>
);
