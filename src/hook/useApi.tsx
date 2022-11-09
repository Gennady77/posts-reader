import { ObjectType } from '../model/types';
import { resolveHttpConfig } from '../utils/utils';
import { FetchConfigInterface } from '../model/interface';
import { HTTP_STATUS_UNAUTHORIZED } from '../model/constants';
import { useNavigate } from 'react-router-dom'

type UrlMapType = {
  register: FetchConfigInterface;
  posts: FetchConfigInterface;
};

type MethodType = keyof UrlMapType;

const urlMap: UrlMapType = {
  register: {
    httpUrl: 'https://api.supermetrics.com/assignment/register',
    httpMethod: 'POST',
  },
  posts: {
    httpUrl: 'https://api.supermetrics.com/assignment/posts',
    httpMethod: 'GET',
  },
};

export function useApi <T = any>(methodType: MethodType): (params: ObjectType) => Promise<T> {
  const fetchConfig = urlMap[methodType];
  const navigate = useNavigate();

  return (params) => {
    const { url, method, body } = resolveHttpConfig(params, fetchConfig);
    const fetchInit: RequestInit = {
      method: method,
    };

    !!body && (fetchInit.body = body);

    return fetch(url, fetchInit)
      .then((response) => {
        if (response.status === HTTP_STATUS_UNAUTHORIZED) {
          navigate('/error', { replace: true });
        }
        return response.json();
      })
      .then((response) => {
        if(response.error) {
          return Promise.reject(response.error);
        }

        return response;
    });
  };
}
