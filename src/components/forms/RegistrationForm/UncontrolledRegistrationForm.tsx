// import React, { useRef } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { addFormData } from '@store/formSlice';
// import { LargeButton } from '@components/buttons/LargeButton/LargeButton';
// import { Checkbox } from '@components/checkbox/Checkbox';
// import { EmailInput } from '@components/inputs/EmailInput/EmailInput';
// import { ImageUpload } from '@components/inputs/ImageInput/ImageInput';
// import { ListInput } from '@components/inputs/ListInput/ListInput';
// import { NumberInput } from '@components/inputs/NumberInput/NumberInput';
// import { PasswordInput } from '@components/inputs/PasswordInput/PasswordInput';
// import { TextInput } from '@components/inputs/TextInput/TextInput';
// import { RadioButton } from '@components/radioButton/RadioButton';

// interface IFormInputs {
//   name: string;
//   age: number;
//   email: string;
//   password: string;
//   confirmPassword: string;
//   image: File;
//   termsAccepted: boolean;
//   gender: 'male' | 'female';
//   country: string;
// }

// export const UncontrolledRegistrationForm: React.FC = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const nameRef = useRef<HTMLInputElement>(null);
//   const ageRef = useRef<HTMLInputElement>(null);
//   const emailRef = useRef<HTMLInputElement>(null);
//   const passwordRef = useRef<HTMLInputElement>(null);
//   const confirmPasswordRef = useRef<HTMLInputElement>(null);
//   const imageRef = useRef<HTMLInputElement>(null);
//   const genderRef = useRef<HTMLInputElement>(null);
//   const countryRef = useRef<HTMLSelectElement>(null);
//   const termsAcceptedRef = useRef<HTMLInputElement>(null);

//   const onSubmit = (event: React.FormEvent) => {
//     event.preventDefault();

//     if (
//       nameRef.current &&
//       ageRef.current &&
//       emailRef.current &&
//       passwordRef.current &&
//       confirmPasswordRef.current &&
//       imageRef.current &&
//       genderRef.current &&
//       countryRef.current &&
//       termsAcceptedRef.current
//     ) {
//       const formData: IFormInputs = {
//         name: nameRef.current.value,
//         age: parseInt(ageRef.current.value, 10),
//         email: emailRef.current.value,
//         password: passwordRef.current.value,
//         confirmPassword: confirmPasswordRef.current.value,
//         image: imageRef.current.files![0],
//         termsAccepted: termsAcceptedRef.current.checked,
//         gender: genderRef.current.value as 'male' | 'female',
//         country: countryRef.current.value,
//       };

//       const reader = new FileReader();
//       reader.onloadend = () => {
//         if (reader.result) {
//           const base64Image = reader.result as string;
//           dispatch(
//             addFormData({
//               ...formData,
//               image: base64Image,
//             }),
//           );
//           navigate('/');
//         }
//       };
//       reader.readAsDataURL(formData.image);
//     }
//   };

//   return (
//     <form onSubmit={onSubmit} className="registration-form">
//       <div className="user-container">
//         <span>Choose a photo</span>
//         <ImageUpload label="Photo" ref={imageRef} />

//         <span>Enter Your Email and Password</span>
{
  /* <div className="fields-container">
          <EmailInput
            label="Email"
            name="email"
            placeholder="Enter your email"
            ref={emailRef}
          />
          <PasswordInput
            label="Password"
            name="password"
            placeholder="Enter your password"
            ref={passwordRef}
            showPassword={true}
            togglePasswordVisibility={() => {}}
          />
          <PasswordInput
            label="Confirm Password"
            name="confirmPassword"
            placeholder="Confirm your password"
            ref={confirmPasswordRef}
            showPassword={true}
            togglePasswordVisibility={() => {}}
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
          />
          <NumberInput
            label="Age"
            name="age"
            placeholder="Enter your age"
            ref={ageRef}
            min={1}
            max={100}
            step={1}
          />
          <div className="gender-selection">
            <RadioButton
              id="male"
              name="gender"
              value="male"
              label="Male"
              ref={genderRef}
            />
            <RadioButton
              id="female"
              name="gender"
              value="female"
              label="Female"
              ref={genderRef}
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
          />

          <div className="terms-container">
            <Checkbox
              id="terms-conditions"
              ref={termsAcceptedRef}
              label="I accept the Terms and Conditions"
            />
          </div>
        </div> */
}

//         <div className="login-buttons">
//           <LargeButton disabled={false}>Register</LargeButton>
//         </div>
//       </div>
//     </form>
//   );
// };
