export type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type registerInputsTypes = {
  type: string;
  name: 'firstName' | 'lastName' | 'email' | 'password';
  placeholder: string;
}[];
