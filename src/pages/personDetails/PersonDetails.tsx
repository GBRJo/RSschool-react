import { Button } from '@components/button/Button';
import { DetailedCard } from '@components/card/detailedCard/DetailedCard';
import { useParams, useNavigate } from 'react-router-dom';
import closeIcon from '@assets/close.svg';
import { useGetPersonByIdQuery } from '@services/fetch/api';

export const PersonDetails: React.FC = () => {
  const { personId } = useParams<{ personId: string }>();
  const navigate = useNavigate();

  const {
    data: person,
    error,
    isLoading,
  } = useGetPersonByIdQuery(personId || '');

  const handleCloseDetails = (): void => {
    navigate('/');
  };

  return (
    <div className="person-details">
      {isLoading ? (
        <div className="spinner">Loading...</div>
      ) : error ? (
        <p>Something went wrong...</p>
      ) : person ? (
        <>
          <DetailedCard person={person} />
          <Button
            ariaLabel="Close"
            imgAlt="Close Icon"
            type="button"
            onClick={handleCloseDetails}
            imgSrc={closeIcon}
          />
        </>
      ) : (
        <p>No person details available.</p>
      )}
    </div>
  );
};
