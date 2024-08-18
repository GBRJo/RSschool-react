import { ControlledRegistrationForm } from '@components/forms/RegistrationForm/ControlledRegistrationForm';
import React from 'react';

export const HookForm: React.FC = () => {
  return (
    <div className="registration_page">
      <div className="registration_title">
        <h1>Controlled Form</h1>
      </div>
      <div className="form_container">
        <ControlledRegistrationForm />
      </div>
    </div>
  );
};
