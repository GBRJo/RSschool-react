import { UncontrolledRegistrationForm } from '../../components/forms/RegistrationForm/UncontrolledRegistrationForm';
import React from 'react';
import './uncontrolledForm.scss';

export const UncontrolledForm: React.FC = () => {
  return (
    <div className="registration_page">
      <div className="registration_title">
        <h1>Uncontrolled Form</h1>
      </div>
      <div className="form_container">
        <UncontrolledRegistrationForm />
      </div>
    </div>
  );
};
