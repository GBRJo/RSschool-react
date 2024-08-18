import React from 'react';

interface DetailedCardProps {
  name: string;
  age: number;
  email: string;
  country: string | null;
  gender: string | null;
  image: string | null;
  isLast: boolean;
}

export const DetailedCard: React.FC<DetailedCardProps> = ({
  name,
  age,
  email,
  country,
  gender,
  image,
  isLast,
}) => {
  return (
    <div className={`detailed-card ${isLast ? 'highlighted-card' : ''}`}>
      {image && (
        <img
          src={image}
          alt={name}
          style={{ width: '100px', height: '100px' }}
        />
      )}
      <div className="detailed-text">
        <h3>{name}</h3>
        <p>Age: {age}</p>
        <p>Email: {email}</p>
        <p>Country: {country || 'N/A'}</p>
        <p>Gender: {gender || 'N/A'}</p>
      </div>
    </div>
  );
};
