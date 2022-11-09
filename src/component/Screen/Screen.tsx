import { PropsWithChildren } from 'react';
import './Screen.css';

export function Screen({ children }: PropsWithChildren) {
  return (
    <div className="Screen">
      {children}
    </div>
  );
}
