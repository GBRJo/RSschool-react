import { Card } from '@components/card/baseCard/Card';
import { Person } from '@components/card/ICardProps';
import { setActiveCard } from '@store/activeCardSlice';
import { RootState } from '@store/store';
import { useDispatch, useSelector } from 'react-redux';

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
  const dispatch = useDispatch();
  const activeCardId = useSelector(
    (state: RootState) => state.activeCard.activeCardId,
  );

  const handleCardClick = (id: string) => {
    dispatch(setActiveCard(id));
    onResultClick(id);
  };

  return (
    <div className="card-list">
      {results.map((result) => (
        <Card
          key={getIdFromUrl(result.url)}
          person={result}
          onClick={() => handleCardClick(getIdFromUrl(result.url))}
          isActive={getIdFromUrl(result.url) === activeCardId}
        />
      ))}
    </div>
  );
};
