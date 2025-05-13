import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className="bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition-colors"
    >
      {children}
    </button>
  );
};
