import { ReactNode } from 'react';

interface TableProps {
  children: ReactNode;
}

export const Table = ({ children }: TableProps) => {
  return <table className="w-full mb-4 border-collapse">{children}</table>;
};

export const TableRow = ({ children }: TableProps) => {
  return <tr>{children}</tr>;
};

export const TableCell = ({ children }: TableProps) => {
  return <td className="border px-4 py-2">{children}</td>;
};

export const TableHead = ({ children }: TableProps) => {
  return <thead className="bg-gray-200 font-bold">{children}</thead>;
};

export const TableBody = ({ children }: TableProps) => {
  return <tbody>{children}</tbody>;
};