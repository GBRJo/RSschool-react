// pages/details/[personId].tsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { useGetPersonByIdQuery } from '../../services/fetch/api';
import { DetailedCard } from '../../components/card/detailedCard/DetailedCard';
import { Button } from '../../components/button/Button';
import { setActiveCard } from '../../store/activeCardSlice';
interface PersonDetailsProps {
  personId: string;
  onClose: () => void;
}

const PersonDetails: React.FC<PersonDetailsProps> = ({ personId, onClose }) => {
  const dispatch = useDispatch();

  const {
    data: person,
    error,
    isLoading,
  } = useGetPersonByIdQuery(personId || '');

  const handleCloseDetails = (): void => {
    dispatch(setActiveCard(null));
    onClose(); // Вызываем переданный колбэк
  };

  if (!personId) {
    return <p>No person ID provided.</p>;
  }

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
            imgSrc="/assets/close.svg"
          />
        </>
      ) : (
        <p>No person details available.</p>
      )}
    </div>
  );
};

export default PersonDetails;
