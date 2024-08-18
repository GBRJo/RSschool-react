import * as yup from 'yup';

// Проверка первой заглавной буквы
const isFirstLetterUpperCase = (value: string) => /^[A-Z]/.test(value);

export const createSchema = (countryOptions: string[]) =>
  yup.object().shape({
    name: yup
      .string()
      .required('Name is required')
      .test(
        'is-first-letter-uppercase',
        'First letter must be uppercase',
        (value) =>
          typeof value === 'string' ? isFirstLetterUpperCase(value) : false,
      ),
    age: yup
      .number()
      .required('Age is required')
      .positive('Age must be a positive number')
      .integer('Age must be an integer'),
    email: yup
      .string()
      .email('Invalid email format')
      .required('Email is required'),
    password: yup
      .string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .matches(/[0-9]/, 'Password must contain at least one number')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        'Password must contain at least one special character',
      ),
    confirmPassword: yup
      .string()
      .required('Confirm password is required')
      .oneOf([yup.ref('password')], 'Passwords must match'),
    image: yup
      .mixed<File>()
      .required('Image is required')
      .test('fileFormat', 'Unsupported file format', (value) => {
        if (value && value instanceof File) {
          return ['image/jpeg', 'image/png'].includes(value.type);
        }
        return false;
      })
      .test('fileSize', 'File too large, max size is 2MB', (value) => {
        if (value && value instanceof File) {
          return value.size <= 2 * 1024 * 1024; // 2MB
        }
        return false;
      }),
    termsAccepted: yup
      .boolean()
      .required('You must accept the Terms and Conditions')
      .oneOf([true], 'You must accept the Terms and Conditions'),
    gender: yup
      .string()
      .oneOf(['male', 'female'], 'Please select a gender')
      .required('Gender is required'),
    country: yup
      .string()
      .oneOf(countryOptions, 'Please select a valid country')
      .required('Country is required'),
  });
