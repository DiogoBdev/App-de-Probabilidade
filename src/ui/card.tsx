import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`bg-white shadow-lg rounded-2xl p-4 ${className}`}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children }: CardProps) => {
  return <h2 className="text-xl font-bold mb-4">{children}</h2>;
};

export const CardContent = ({ children }: CardProps) => {
  return <div>{children}</div>;
};
