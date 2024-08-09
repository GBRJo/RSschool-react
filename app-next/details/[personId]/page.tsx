'use client';

import React from 'react';
import { useGetPersonByIdQuery } from '../../api/hello';
import { Button } from '~/components/button/Button';
import { DetailedCard } from '~/components/card/detailedCard/DetailedCard';

type PersonDetailsProps = {
  personId: string;
  onClose: () => void;
};

const PersonDetails: React.FC<PersonDetailsProps> = ({ personId, onClose }) => {
  const {
    data: person,
    error,
    isLoading,
  } = useGetPersonByIdQuery(personId || '');

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
            onClick={onClose}
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
