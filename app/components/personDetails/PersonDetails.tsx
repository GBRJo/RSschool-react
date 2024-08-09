import { useParams, useNavigate, useLocation } from 'react-router-dom';
import closeIcon from '../../assets/close.svg';

import { useDispatch } from 'react-redux';
import { useGetPersonByIdQuery } from '../../services/fetch/api';
import { setActiveCard } from '../../store/activeCardSlice';
import { Button } from '../button/Button';
import { DetailedCard } from '../card/detailedCard/DetailedCard';

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
