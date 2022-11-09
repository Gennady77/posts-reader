import { ObjectType } from '../model/types';
import { FetchConfigInterface, FetchInitInterface } from '../model/interface';

export function resolveHttpConfig(params: ObjectType, fetchConfig: FetchConfigInterface): FetchInitInterface {
  const { httpMethod } = fetchConfig;

  return {
    url: resolveHttpUrl(params, fetchConfig),
    method: httpMethod,
    body: resolveHttpBody(params, fetchConfig),
  }
}

export function resolveHttpBody(params: ObjectType, fetchConfig: FetchConfigInterface) {
  const { httpMethod } = fetchConfig;

  switch(httpMethod) {
    case 'GET':
      return '';
    case 'POST':
      return resolveHttpPostParams(params);
  }
}

export function resolveHttpUrl(params: ObjectType, fetchConfig: FetchConfigInterface) {
  const { httpMethod, httpUrl } = fetchConfig;

  switch (httpMethod) {
    case 'GET':
      return `${httpUrl}?${resolveHttpGetParams(params)}`;
    case 'POST':
      return httpUrl;
  }
}

export function resolveHttpPostParams(params: ObjectType): FormData {
  const formData = new FormData();

  for (let key in params) {
    if (!params.hasOwnProperty(key)) {
      continue;
    }

    formData.append(key, params[key]);
  }

  return formData;
}

export function resolveHttpGetParams(params: ObjectType): string {
  const result = [];

  for (let key in params) {
    if (!params.hasOwnProperty(key)) {
      continue;
    }

    result.push(`${key}=${params[key]}`);
  }

  return result.join('&');
}