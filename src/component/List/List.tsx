import './List.css';
import { Children, PropsWithChildren } from 'react';

interface ListProps extends PropsWithChildren {
  placeholder?: string;
}

export function List({ children, placeholder = 'Posts list is empty' }: ListProps) {
  const listLength = Children.count(children)

  return (
    <div className="List">
      {!listLength && <div className="List__placeholder">{placeholder}</div>}
      {!!listLength && children}
    </div>
  );
}
