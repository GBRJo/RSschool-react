import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '@store/store';

export const Main: React.FC = () => {
  const formData = useSelector((state: RootState) => state.form);

  return (
    <div>
      <h1>Main Page</h1>
      <ul>
        <li>
          <Link to="/uncontrolled-form">Uncontrolled Form</Link>
        </li>
        <li>
          <Link to="/hook-form">Hook Form</Link>
        </li>
      </ul>

      {formData && (
        <div>
          <h2>Submitted Data:</h2>
          <p>
            <strong>Name:</strong> {formData.name}
          </p>
          <p>
            <strong>Age:</strong> {formData.age}
          </p>
          <p>
            <strong>Email:</strong> {formData.email}
          </p>
          <p>
            <strong>Country:</strong> {formData.country}
          </p>
          <p>
            <strong>Gender:</strong> {formData.gender}
          </p>
          <p>
            <strong>Terms Accepted:</strong>{' '}
            {formData.termsAccepted ? 'Yes' : 'No'}
          </p>
          <p>
            <strong>Profile Image:</strong>
          </p>
          {formData.image && (
            <img
              src={formData.image}
              alt="Profile"
              style={{ width: '100px', height: '100px' }}
            />
          )}
        </div>
      )}
    </div>
  );
};
