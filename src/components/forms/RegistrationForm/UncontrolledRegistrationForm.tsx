import React, { useRef } from 'react';

// import { ImageUpload } from '@components/inputs/ImageInput/ImageInput';

export const UncontrolledRegistrationForm: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const dateOfBirthRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const streetRef = useRef<HTMLInputElement>(null);
  const postCodeRef = useRef<HTMLInputElement>(null);
  const countryBillingRef = useRef<HTMLInputElement>(null);
  const cityBillingRef = useRef<HTMLInputElement>(null);
  const streetBillingRef = useRef<HTMLInputElement>(null);
  const postCodeBillingRef = useRef<HTMLInputElement>(null);
  const isDefaultShippingAddressRef = useRef<HTMLInputElement>(null);
  const isSameAddressesRef = useRef<HTMLInputElement>(null);
  const isDefaultBillingAddressRef = useRef<HTMLInputElement>(null);
  // const genderRef = useRef<HTMLSelectElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const userData = {
      email: emailRef.current?.value ?? '',
      password: passwordRef.current?.value ?? '',
      firstName: firstNameRef.current?.value ?? '',
      lastName: lastNameRef.current?.value ?? '',
      dateOfBirth: dateOfBirthRef.current?.value ?? '',
      addresses: [
        {
          country: countryRef.current?.value ?? '',
          city: cityRef.current?.value ?? '',
          streetName: streetRef.current?.value ?? '',
          postalCode: postCodeRef.current?.value ?? '',
        },
        {
          country: countryBillingRef.current?.value ?? '',
          city: cityBillingRef.current?.value ?? '',
          streetName: streetBillingRef.current?.value ?? '',
          postalCode: postCodeBillingRef.current?.value ?? '',
        },
      ],
      shippingAddresses: [0],
      billingAddresses: isSameAddressesRef.current?.checked ? [0] : [1],
      defaultShippingAddress: isDefaultShippingAddressRef.current?.checked
        ? 0
        : undefined,
      defaultBillingAddress: isDefaultBillingAddressRef.current?.checked
        ? isSameAddressesRef.current?.checked
          ? 0
          : 1
        : undefined,
    };

    if (isSameAddressesRef.current?.checked) userData.addresses.pop();

    console.log('User Data:', userData);
  };

  return (
    <form onSubmit={handleSubmit} className="registration-form">
      <div className="user-container">
        <span>Choose a photo</span>
        {/* <ImageUpload label="Photo" onChange={function (file: File | null): void {
          throw new Error('Function not implemented.');
        } } /> */}

        <span>Enter Your Email and Password</span>
        <div className="fields-container">
          <input type="email" ref={emailRef} placeholder="Email" />
          <input type="password" ref={passwordRef} placeholder="Password" />
        </div>
      </div>

      <div className="address-container">
        <span>Provide Your Name and Date of Birth</span>
        <div className="fields-container">
          <input type="text" ref={firstNameRef} placeholder="First Name" />
          <input type="text" ref={lastNameRef} placeholder="Last Name" />
          <input type="date" ref={dateOfBirthRef} />
        </div>

        <span>Shipping address</span>
        <div className="fields-container">
          <input type="text" ref={countryRef} placeholder="Country" />
          <input type="text" ref={cityRef} placeholder="City" />
          <input type="text" ref={streetRef} placeholder="Street" />
          <input type="text" ref={postCodeRef} placeholder="Post Code" />
        </div>

        {/* 
        <div className="gender-radio-group">
          <label>
            <input type="radio" value="male" name="gender" ref={genderRef} />{' '}
            Male
          </label>
          <label>
            <input type="radio" value="female" name="gender" ref={genderRef} />{' '}
            Female
          </label>
        </div> */}

        <label>
          <input type="checkbox" ref={isDefaultShippingAddressRef} /> Set as
          default shipping address
        </label>

        <label>
          <input type="checkbox" ref={isSameAddressesRef} /> Use same address
          for billing
        </label>

        <label>
          <input type="checkbox" ref={isDefaultBillingAddressRef} /> Set as
          default billing address
        </label>

        <button type="submit">Register</button>
      </div>
    </form>
  );
};

// export const RegistrationForm: React.FC = () => {
//   const [state, setState] = useState<IRegistrationForm>({
//     email: '',
//     emailError: '',
//     password: '',
//     passwordError: '',
//     showPassword: false,
//     country: '',
//     countryError: '',
//     city: '',
//     cityError: '',
//     street: '',
//     streetError: '',
//     postCode: '',
//     postCodeError: '',
//     countryBilling: '',
//     countryErrorBilling: '',
//     cityBilling: '',
//     cityErrorBilling: '',
//     streetBilling: '',
//     streetErrorBilling: '',
//     postCodeBilling: '',
//     postCodeErrorBilling: '',
//     firstName: '',
//     firstNameError: '',
//     dateOfBirth: '',
//     dateOfBirthError: '',
//     lastName: '',
//     lastNameError: '',
//     isDefaultShippingAddress: false,
//     isSameAddresses: false,
//     isDefaultBillingAddress: false,
//   });
//   const [selectedGender, setSelectedGender] = React.useState<string>('');

//   // const navigate = useNavigate();

//   const isButtonDisabled =
//     state.email === '' ||
//     state.password === '' ||
//     state.emailError !== '' ||
//     state.passwordError !== '' ||
//     state.country === '' ||
//     state.countryError !== '' ||
//     state.city === '' ||
//     state.cityError !== '' ||
//     state.street === '' ||
//     state.streetError !== '' ||
//     state.postCode === '' ||
//     state.postCodeError !== '' ||
//     state.firstName === '' ||
//     state.firstNameError !== '' ||
//     state.lastName === '' ||
//     state.lastNameError !== '' ||
//     state.dateOfBirth === '' ||
//     state.dateOfBirthError !== '' ||
//     state.countryBilling === '' ||
//     state.countryErrorBilling !== '' ||
//     state.cityBilling === '' ||
//     state.cityErrorBilling !== '' ||
//     state.streetBilling === '' ||
//     state.streetErrorBilling !== '' ||
//     state.postCodeBilling === '' ||
//     state.postCodeErrorBilling !== '';

//   const togglePasswordVisibility = () => {
//     setState((prevState) => ({
//       ...prevState,
//       showPassword: !prevState.showPassword,
//     }));
//   };

//   const handleGenderChange = (value: string) => {
//     setSelectedGender(value);
//   };

//   const handleEmailChange = (event: ChangeEvent<HTMLInputElement>): void => {
//     const newEmail = event.target.value.trim();
//     const emailError = validateEmail(newEmail);
//     setState((prevState) => ({ ...prevState, email: newEmail, emailError }));
//   };

//   const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>): void => {
//     const newPassword = event.target.value.trim();
//     const passwordError = validatePassword(newPassword);
//     setState((prevState) => ({
//       ...prevState,
//       password: newPassword,
//       passwordError,
//     }));
//   };

//   const handleCountryChange = (
//     event: ChangeEvent<HTMLInputElement>,
//     targetCountry: string,
//     targetCountryError: string,
//   ): void => {
//     const newCountry = event.target.value;
//     const countryError = validateCountry(newCountry);
//     setState((prevState) => ({
//       ...prevState,
//       [targetCountry]: newCountry,
//       [targetCountryError]: countryError,
//     }));
//   };

//   const handleCityChange = (
//     event: ChangeEvent<HTMLInputElement>,
//     targetCity: string,
//     targetCityError: string,
//   ): void => {
//     const newCity = event.target.value;
//     const cityError = validateCity(newCity);
//     setState((prevState) => ({
//       ...prevState,
//       [targetCity]: newCity,
//       [targetCityError]: cityError,
//     }));
//   };

//   const handleStreetChange = (
//     event: ChangeEvent<HTMLInputElement>,
//     targetStreet: string,
//     targetStreetError: string,
//   ): void => {
//     const newStreet = event.target.value;
//     const streetError = validateStreet(newStreet);
//     setState((prevState) => ({
//       ...prevState,
//       [targetStreet]: newStreet,
//       [targetStreetError]: streetError,
//     }));
//   };

//   const handlePostCodeChange = (
//     event: ChangeEvent<HTMLInputElement>,
//     targetPostCode: string,
//     targetPostCodeError: string,
//   ): void => {
//     const newPostCode = event.target.value;
//     const postCodeError = validatePostCode(newPostCode);
//     setState((prevState) => ({
//       ...prevState,
//       [targetPostCode]: newPostCode,
//       [targetPostCodeError]: postCodeError,
//     }));
//   };

//   const handleFirstNameChange = (
//     event: ChangeEvent<HTMLInputElement>,
//   ): void => {
//     const newFirstName = event.target.value.trim();
//     const firstNameError = validateName(newFirstName);
//     setState((prevState) => ({
//       ...prevState,
//       firstName: newFirstName,
//       firstNameError,
//     }));
//   };

//   const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
//     const newLastName = event.target.value.trim();
//     const lastNameError = validateName(newLastName);
//     setState((prevState) => ({
//       ...prevState,
//       lastName: newLastName,
//       lastNameError,
//     }));
//   };

//   const handleDateOfBirth = (event: ChangeEvent<HTMLInputElement>): void => {
//     const newDateOfBirth = event.target.value;
//     const dateOfBirthError = validateDateOfBirth(newDateOfBirth);
//     setState((prevState) => ({
//       ...prevState,
//       dateOfBirth: newDateOfBirth,
//       dateOfBirthError,
//     }));
//   };

//   const handleCheckboxChangeDefaultShippingAddress = (checked: boolean) => {
//     setState({
//       ...state,
//       isDefaultShippingAddress: checked,
//     });
//   };

//   const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
//     event.preventDefault();

//     const {
//       email,
//       password,
//       city,
//       street,
//       postCode,
//       firstName,
//       lastName,
//       dateOfBirth,
//       cityBilling,
//       streetBilling,
//       postCodeBilling,
//       isDefaultShippingAddress,
//       isSameAddresses,
//       isDefaultBillingAddress,
//     } = state;

//     const userData = {
//       email,
//       firstName,
//       lastName,
//       password,
//       dateOfBirth,
//       addresses: [
//         {
//           country: 'US',
//           city,
//           streetName: street,
//           postalCode: postCode,
//         },
//         {
//           country: 'US',
//           city: cityBilling,
//           streetName: streetBilling,
//           postalCode: postCodeBilling,
//         },
//       ],
//       shippingAddresses: [0],
//       billingAddresses: isSameAddresses ? [0] : [1],
//       defaultShippingAddress: isDefaultShippingAddress ? 0 : undefined,
//       defaultBillingAddress: isDefaultBillingAddress
//         ? isSameAddresses
//           ? 0
//           : 1
//         : undefined,
//     };

//     if (isSameAddresses) userData.addresses.pop();

//     // Instead of sending data to the server, we log it to the console
//     console.log('User Data:', userData);

//     // The rest of the original code for registration can be re-added later if needed.
//   };

//   return (
//     <form onSubmit={handleSubmit} className="registration-form">
//       <div className="user-container">
//         <span>Choose a photo</span>
//         <ImageUpload
//           label="Photo"
//           placeholder={'Choose a photo'}

//           //  error={emailError}
//         />

//         <span>Enter Your Email and Password</span>
//         <div className="fields-container">
//           <EmailAndPasswordFields
//             email={state.email}
//             emailError={state.emailError}
//             onEmailChange={handleEmailChange}
//             password={state.password}
//             passwordError={state.passwordError}
//             onPasswordChange={handlePasswordChange}
//             showPassword={state.showPassword}
//             togglePasswordVisibility={togglePasswordVisibility}
//           />
//         </div>
//       </div>

//       <div className="adress-container">
//         <span>Provide Your Name and Date of Birth</span>
//         <div className="fields-container">
//           <NameAndDateFields
//             firstName={state.firstName}
//             firstNameError={state.firstNameError}
//             onFirstNameChange={handleFirstNameChange}
//             lastName={state.lastName}
//             lastNameError={state.lastNameError}
//             onLastNameChange={handleLastNameChange}
//             dateOfBirth={state.dateOfBirth}
//             dateOfBirthError={state.dateOfBirthError}
//             onDateOfBirthChange={handleDateOfBirth}
//           />
//         </div>
//         <span>Shipping address</span>
//         <div className="fields-container">
//           <AdressFields
//             prefix="shipping"
//             country={state.country}
//             countryError={state.countryError}
//             onCountryChange={(event) =>
//               handleCountryChange(event, 'country', 'countryError')
//             }
//             city={state.city}
//             cityError={state.cityError}
//             onCityChange={(event) =>
//               handleCityChange(event, 'city', 'cityError')
//             }
//             street={state.street}
//             streetError={state.streetError}
//             onStreetChange={(event) =>
//               handleStreetChange(event, 'street', 'streetError')
//             }
//             postCode={state.postCode}
//             postCodeError={state.postCodeError}
//             onPostCodeChange={(event) =>
//               handlePostCodeChange(event, 'postCode', 'postCodeError')
//             }
//           />
//         </div>

//         <div className="gender-radio-group">
//           <RadioButton
//             id="male"
//             name="gender"
//             value="male"
//             label="Мужской"
//             checked={selectedGender === 'male'}
//             onChange={handleGenderChange}
//           />
//           <RadioButton
//             id="female"
//             name="gender"
//             value="female"
//             label="Женский"
//             checked={selectedGender === 'female'}
//             onChange={handleGenderChange}
//           />
//         </div>

//         <Checkbox
//           id="default-shiping-address"
//           checked={state.isDefaultShippingAddress}
//           onChange={handleCheckboxChangeDefaultShippingAddress}
//           label="set as default shipping address"
//         />

//         <div className="login-buttons">
//           <LargeButton disabled={isButtonDisabled} disabledText="Register">
//             Register
//           </LargeButton>
//         </div>
//       </div>
//     </form>
//   );
// };
