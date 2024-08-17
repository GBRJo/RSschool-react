import React from 'react';
import { Link } from 'react-router-dom';

export const Main: React.FC = () => {
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
    </div>
  );
};
