// src/pages/Main.tsx
import './main.scss';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@store/store';
import { DetailedCard } from '@components/card/detailedCard/DetailedCard';

export const Main: React.FC = () => {
  const formDataArray = useSelector((state: RootState) => state.form.data);

  return (
    <div className="app">
      <h1>Main Page</h1>

      {formDataArray.length > 0 && (
        <div className="card-container">
          {formDataArray.map((formData, index) => (
            <DetailedCard
              key={index}
              name={formData.name}
              age={formData.age}
              email={formData.email}
              country={formData.country}
              gender={formData.gender}
              image={formData.image}
              isLast={index === formDataArray.length - 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};
