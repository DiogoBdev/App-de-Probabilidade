import { InputHTMLAttributes } from 'react';

interface inputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = (props: inputProps) => {
  return <input {...props} className="w-full p-2 border border-gray-300 rounded-md mb-2" />;
};