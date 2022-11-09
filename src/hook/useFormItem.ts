import { useCallback, useState } from 'react';
import { FormItemInterface } from '../model/interface';

export function useFormItem(
  onValueChange: (value: any) => void,
  validators?: Array<(term: any) => string | undefined>
): FormItemInterface {
  const [_value, setValue] = useState<any | undefined>();
  const [dirty, setDirty] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const onChangeHandler = useCallback((value: any) => {
    setDirty(true);
    onValueChange(value);
    setValue(value);
    validation(value);
  }, []);
  // const validValue = () => applyValidators(_value).length === 0;
  // // const validField = () => !dirty || validValue();
  const validation = (value: string) => setErrors(applyValidators(value));

  function isValid() {
    return !dirty || errors.length === 0;
  }

  function checkValid() {
    validation(_value);
  }

  function applyValidators(val: any) {
    return (validators || []).reduce<string[]>((acc, validator) => {
      const err = validator(val);

      if (err) {
        acc.push(err);
      }

      return acc;
    }, [])
  }

  return {
    onChangeHandler,
    isValid,
    checkValid,
    setDirty,
    errors,
  };
}
