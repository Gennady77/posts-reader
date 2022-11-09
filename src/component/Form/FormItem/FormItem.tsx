import { ChangeEvent, useCallback } from 'react';
import './FormItem.css';

interface FormItemProps {
  disabled?: boolean;
  value?: any;
  label?: string;
  valid?: boolean;
  onChange?: (value: any) => void;
  errors?: string[],
}

export function FormItem({
  disabled = false,
  label = '',
  valid = true,
  value,
  onChange = () => {},
  errors = [],
}: FormItemProps) {
  const onInputChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  }, []);

  return (
    <label className={`FormItem ${!valid ? 'FormItem--error' : ''}`}>
      <div className="FormItem__label">{label}</div>
      <input className="FormItem__input" value={value} onChange={onInputChangeHandler} disabled={disabled} />
      {errors.length > 0 && <div className="FormItem__inputError">{errors[0]}</div>}
    </label>
  );
}
