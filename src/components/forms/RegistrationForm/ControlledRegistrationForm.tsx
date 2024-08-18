import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { createSchema } from '../../../validationSchema';
import { EmailInput } from '../../inputs/EmailInput/EmailInput';
import { PasswordInput } from '../../inputs/PasswordInput/PasswordInput';
import { LargeButton } from '@components/buttons/LargeButton/LargeButton';
import { ImageUpload } from '@components/inputs/ImageInput/ImageInput'; // Предполагаем, что это ваш компонент загрузки изображения
import { NumberInput } from '@components/inputs/NumberInput/NumberInput';
import { TextInput } from '@components/inputs/TextInput/TextInput';
import { useDispatch, useSelector } from 'react-redux';
import { addFormData } from '@store/formSlice';
import { Checkbox } from '@components/checkbox/Checkbox';
import { RadioButton } from '@components/radioButton/RadioButton';
import { ListInput } from '@components/inputs/ListInput/ListInput';
import { RootState } from '@store/store';
import { useNavigate } from 'react-router-dom';

interface IFormInputs {
  name: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
  image: File;
  termsAccepted: boolean;
  gender: 'male' | 'female';
  country: string;
}

export const ControlledRegistrationForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const countries = useSelector(
    (state: RootState) => state.countries.countries,
  );

  const schema = createSchema(countries);
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = (data: IFormInputs) => {
    const file = data.image; // Предполагается, что это всегда File

    const reader = new FileReader();
    reader.onloadend = () => {
      if (reader.result) {
        const base64Image = reader.result as string;
        const formData = {
          name: data.name,
          age: data.age,
          email: data.email,
          password: data.password,
          confirmPassword: data.confirmPassword,
          image: base64Image, // Отправляем изображение в формате Base64
          termsAccepted: data.termsAccepted,
          gender: data.gender,
          country: data.country,
        };
        dispatch(addFormData(formData)); // Добавляем данные в Redux
        navigate('/');
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="registration-form">
      <div className="user-container">
        <span>Choose a photo</span>
        <Controller
          name="image"
          control={control}
          render={({ field }) => (
            <ImageUpload
              label="Photo"
              onChange={(files) => field.onChange(files)}
              error={errors.image?.message}
            />
          )}
        />
        <span>Enter Your Email and Password</span>
        <div className="fields-container">
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <EmailInput
                label="Email"
                name="email"
                placeholder="Enter your email"
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
                error={errors.email?.message}
                disabled={false}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <PasswordInput
                label="Password"
                name="password"
                placeholder="Enter your password"
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
                showPassword={true}
                togglePasswordVisibility={() => {}}
                error={errors.password?.message}
                disabled={false}
              />
            )}
          />

          <Controller
            name="confirmPassword"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <PasswordInput
                label="Confirm Password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
                showPassword={true}
                togglePasswordVisibility={() => {}}
                error={errors.confirmPassword?.message}
                disabled={false}
              />
            )}
          />
        </div>
      </div>

      <div className="address-container">
        <span>Provide Your Name and Age</span>
        <div className="fields-container">
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextInput
                label="Name"
                name="name"
                placeholder="Enter your name"
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
                error={errors.name?.message}
                disabled={false}
              />
            )}
          />

          <Controller
            name="age"
            control={control}
            defaultValue={18}
            render={({ field }) => (
              <NumberInput
                label="Age"
                name="age"
                placeholder="Enter your age"
                value={field.value}
                onChange={(e) => field.onChange(Number(e.target.value))} // Исправлено: Преобразуем значение в число
                error={errors.age?.message}
                min={1}
                max={100}
                step={1}
              />
            )}
          />

          <Controller
            name="gender"
            control={control}
            render={({ field }) => (
              <div className="gender-selection">
                <RadioButton
                  id="male"
                  name="gender"
                  value="male"
                  label="Male"
                  checked={field.value === 'male'}
                  onChange={() => field.onChange('male')}
                  error={errors.gender?.message}
                />
                <RadioButton
                  id="female"
                  name="gender"
                  value="female"
                  label="Female"
                  checked={field.value === 'female'}
                  onChange={() => field.onChange('female')}
                  error={errors.gender?.message}
                />
              </div>
            )}
          />
        </div>
        <span>Select your country</span>
        <div className="fields-container">
          <Controller
            name="country"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <ListInput
                label="Country"
                name="country"
                placeholder="Select your country"
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
                options={countries}
                error={errors.country?.message}
              />
            )}
          />

          <div className="terms-container">
            <Controller
              name="termsAccepted"
              control={control}
              render={({ field }) => (
                <Checkbox
                  id="terms-conditions"
                  checked={field.value}
                  onChange={() => field.onChange(!field.value)}
                  label="I accept the Terms and Conditions"
                  error={errors.termsAccepted?.message}
                />
              )}
            />
          </div>
        </div>
        <div className="login-buttons">
          <LargeButton disabled={!isValid} disabledText="Register">
            Register
          </LargeButton>
        </div>
      </div>
    </form>
  );
};
