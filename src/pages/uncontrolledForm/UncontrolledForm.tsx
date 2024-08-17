import React, { useRef } from 'react';

export const UncontrolledForm: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    console.log('Name:', name, 'Email:', email);
  };

  return (
    <div>
      <h2>Uncontrolled Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input type="text" ref={nameRef} />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input type="email" ref={emailRef} />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
