import React, { FormEvent, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addFormData } from '@store/formSlice';
import { LargeButton } from '@components/buttons/LargeButton/LargeButton';
import { ImageUpload } from '@components/inputs/ImageInput/ImageInput';
import { EmailInput } from '@components/inputs/EmailInput/EmailInput';
import { Checkbox } from '@components/checkbox/Checkbox';
import { ListInput } from '@components/inputs/ListInput/ListInput';
import { NumberInput } from '@components/inputs/NumberInput/NumberInput';
import { PasswordInput } from '@components/inputs/PasswordInput/PasswordInput';
import { TextInput } from '@components/inputs/TextInput/TextInput';
import { RadioButton } from '@components/radioButton/RadioButton';
import { createSchema } from '../../../validationSchema';
import * as yup from 'yup';
import { RootState } from '@store/store';

interface IFormInputs {
  image: File | null;
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  age: number;
  termsAccepted: boolean;
  gender: 'male' | 'female';
  country: string;
}

export const UncontrolledRegistrationForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const countries = useSelector(
    (state: RootState) => state.countries.countries,
  );

  const [errors, setErrors] = useState<
    Partial<Record<keyof IFormInputs, string>>
  >({});

  const [isFormDirty, setIsFormDirty] = useState(false); // Состояние для отслеживания изменений в форме

  const imageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);
  const termsAcceptedRef = useRef<HTMLInputElement>(null);

  const schema = createSchema(countries);

  const handleFormChange = () => {
    setIsFormDirty(true); // Устанавливаем флаг изменений при любом изменении в форме
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (
      imageRef.current &&
      emailRef.current &&
      passwordRef.current &&
      confirmPasswordRef.current &&
      nameRef.current &&
      ageRef.current &&
      genderRef.current &&
      countryRef.current &&
      termsAcceptedRef.current
    ) {
      const formData: IFormInputs = {
        image: imageRef.current.files ? imageRef.current.files[0] : null,
        email: emailRef.current.value,
        password: passwordRef.current.value,
        confirmPassword: confirmPasswordRef.current.value,
        name: nameRef.current.value,
        age: parseInt(ageRef.current.value, 10),
        termsAccepted: termsAcceptedRef.current.checked,
        gender: genderRef.current.value as 'male' | 'female',
        country: countryRef.current.value,
      };

      try {
        await schema.validate(formData, { abortEarly: false });
        setErrors({}); // Очищаем ошибки, если валидация прошла успешно

        const reader = new FileReader();
        reader.onloadend = () => {
          if (reader.result) {
            const base64Image = reader.result as string;
            dispatch(
              addFormData({
                ...formData,
                image: base64Image,
              }),
            );
            navigate('/');
          }
        };
        if (formData.image) {
          reader.readAsDataURL(formData.image);
        }
      } catch (validationErrors) {
        if (validationErrors instanceof yup.ValidationError) {
          const newErrors: Partial<Record<keyof IFormInputs, string>> = {};
          validationErrors.inner.forEach((error) => {
            if (error.path) {
              newErrors[error.path as keyof IFormInputs] = error.message;
            }
          });
          setErrors(newErrors);
        }
      }
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      onChange={handleFormChange}
      className="registration-form"
    >
      <div className="user-container">
        <span>Choose a photo</span>
        <ImageUpload label="Photo" ref={imageRef} error={errors.image} />
        <span>Enter Your Email and Password</span>

        <div className="fields-container">
          <EmailInput
            label="Email"
            name="email"
            placeholder="Enter your email"
            ref={emailRef}
            error={errors.email}
          />
          <PasswordInput
            label="Password"
            name="password"
            placeholder="Enter your password"
            ref={passwordRef}
            showPassword={true}
            type={''}
            error={errors.password}
          />
          <PasswordInput
            label="Confirm Password"
            name="confirmPassword"
            placeholder="Confirm your password"
            ref={confirmPasswordRef}
            showPassword={true}
            type={''}
            error={errors.confirmPassword}
          />
        </div>
      </div>

      <div className="address-container">
        <span>Provide Your Name and Age</span>
        <div className="fields-container">
          <TextInput
            label="Name"
            name="name"
            placeholder="Enter your name"
            ref={nameRef}
            type={'text'}
            error={errors.name}
          />
          <NumberInput
            label="Age"
            name="age"
            placeholder="Enter your age"
            ref={ageRef}
            min={1}
            max={100}
            step={1}
            error={errors.age}
          />
          <div className="gender-selection">
            <RadioButton
              id="male"
              name="gender"
              value="male"
              label="Male"
              ref={genderRef}
              error={errors.gender}
            />
            <RadioButton
              id="female"
              name="gender"
              value="female"
              label="Female"
              ref={genderRef}
              error={errors.gender}
            />
          </div>
        </div>

        <span>Select your country</span>
        <div className="fields-container">
          <ListInput
            label="Country"
            name="country"
            placeholder="Select your country"
            ref={countryRef}
            options={countries}
            error={errors.country}
            type={''}
          />

          <div className="terms-container">
            <Checkbox
              id="terms-conditions"
              ref={termsAcceptedRef}
              label="I accept the Terms and Conditions"
              error={errors.termsAccepted}
            />
          </div>
        </div>

        <div className="login-buttons">
          <LargeButton disabled={!isFormDirty} disabledText="Disabled submit">
            Submit
          </LargeButton>
        </div>
      </div>
    </form>
  );
};
