import { Card } from '@components/card/baseCard/Card';
import { Person } from '@components/card/ICardProps';
import { useState } from 'react';

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
}) => {
  const [activePersonId, setActivePersonId] = useState<string | null>(null);

  const handleCardClick = (id: string) => {
    setActivePersonId(id);
    onResultClick(id);
  };

  return (
    <div className="card-list">
      {results.map((result) => (
        <Card
          key={getIdFromUrl(result.url)}
          person={result}
          onClick={() => handleCardClick(getIdFromUrl(result.url))}
          isActive={getIdFromUrl(result.url) === activePersonId}
        />
      ))}
    </div>
  );
};
