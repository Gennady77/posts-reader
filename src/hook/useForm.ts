import { FormItemInterface } from '../model/interface';
import { useState } from 'react';

export function useForm(formItems: FormItemInterface[]) {
  const [formDirty, setFormDirty] = useState(false);

  const makeFormFieldDirty = () => {
    setFormDirty(true);

    formItems.forEach(item => item.setDirty(true));
  };

  const checkFormValid = () => {
    makeFormFieldDirty();

    formItems.forEach(item => item.checkValid());
  }

  const isFormValid =() => {
    return !formDirty || formItems.every(item => item.isValid());
  };

  return {
    formDirty,
    checkFormValid,
    isFormValid,
  };
}
