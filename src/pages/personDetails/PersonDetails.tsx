import { Button } from '@components/button/Button';
import { DetailedCard } from '@components/card/detailedCard/DetailedCard';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import closeIcon from '@assets/close.svg';
import { useGetPersonByIdQuery } from '@services/fetch/api';
import { useDispatch } from 'react-redux';
import { setActiveCard } from '@store/activeCardSlice';

export const PersonDetails: React.FC = () => {
  const { personId } = useParams<{ personId: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const {
    data: person,
    error,
    isLoading,
  } = useGetPersonByIdQuery(personId || '');

  const handleCloseDetails = (): void => {
    dispatch(setActiveCard(null));
    navigate({ pathname: '/', search: location.search });
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
