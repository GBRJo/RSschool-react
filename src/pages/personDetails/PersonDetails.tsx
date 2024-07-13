import { Button } from '@components/button/Button';
import { DetailedCard } from '@components/card/detailedCard/DetailedCard';
import { Person } from '@components/card/ICardProps';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import closeIcon from '@assets/close.svg';
import { FetchDataProps, fetchData } from '@services/fetch/fetchData';

export const PersonDetails: React.FC = () => {
  const { personId } = useParams<{ personId: string }>();
  const [person, setPerson] = useState<Person | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDataProps: FetchDataProps = {
      url: `https://swapi.dev/api/people/${personId}/`,
      setData: (data: Person | Person[]) => {
        setPerson(Array.isArray(data) ? data[0] : data);
      },
      setError: setError,
      setLoading: setLoading,
    };

    fetchData(fetchDataProps);
  }, [personId]);

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
