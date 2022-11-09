import './Search.css';
import { ChangeEvent } from 'react';

interface SearchProps {
  onChange: (term: string) => void;
}

export function Search({ onChange }: SearchProps) {
  function onSearchChange(e: ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value);
  }

  return (
    <input onChange={onSearchChange} className="Search" placeholder="Search" />
  );
}
