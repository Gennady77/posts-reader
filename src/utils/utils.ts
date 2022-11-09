import { EMAIL_FIELD_ERROR_MESSAGE, REQURED_FIELD_ERROR_MESSAGE } from '../model/constants';

export * from './utilsHttp';

export const requiredValidator = (value: string | undefined): string | undefined => {
  if (value === undefined || value.length === 0) {
    return REQURED_FIELD_ERROR_MESSAGE;
  }
};

export const emailValidator = (value: string) => {
  if (value !== '' && !(new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, 'g')).test(value)) {
    return EMAIL_FIELD_ERROR_MESSAGE;
  }
};

export function listFilterByName<T extends {fromName: string}>(list: T[], filterName: string): T[] {
  return list.filter((item) => (item.fromName.toLowerCase()).includes(filterName.toLowerCase()));
}
