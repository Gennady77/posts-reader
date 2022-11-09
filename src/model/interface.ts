import { FetchBodyType, HttpMethodType } from './types';
import { SortDirectionEnum } from './enum';

export interface AuthContextInterface {
  register: (name: string, email: string, controller?: AbortController) => Promise<void>;
  isLogin: () => boolean;
}

export interface PostsContextInterface {
  fetchPosts: (page?: number) => Promise<void>;
  dataStore: DataStoreInterface;
  authorNameFilter: string;
  setAuthorNameFilter: (value: string) => void;
  postMessageFilter: string;
  setPostMessageFilter: (value: string) => void;
  sort: SortDirectionEnum,
  setSort: (value: SortDirectionEnum) => void;
}

export interface PostsPageUrlParams {
  fromId?: string;
}

export interface FetchResponseInterface {
  error?: any;
}

export interface RegisterResponseInterface extends FetchResponseInterface {
  data?: {
    sl_token: string;
  }
}

export interface FetchConfigInterface {
  httpUrl: string;
  httpMethod: HttpMethodType;
}

export interface FetchInitInterface {
  url: string;
  method: HttpMethodType;
  body?: FetchBodyType;
}

export interface getPostsResponseInterface extends FetchResponseInterface {
  data: {
    posts: PostResponseInterface[];
  }
}

export interface PostResponseInterface {
  id: number;
  from_id: string;
  from_name: string;
  message: string;
  created_time: string;
}

export interface PostEntryInterface {
  id: number;
  fromId: string;
  fromName: string;
  message: string;
  createdTime: Date;
}

export interface AuthorInterface {
  fromId: string;
  fromName: string;
  countPosts: number;
}

export interface DataStoreAuthorInterface extends AuthorInterface {
  posts: PostEntryInterface[];
}

export interface DataStoreInterface {
  [key: string]: DataStoreAuthorInterface;
}


export interface FormItemInterface {
  onChangeHandler: (value: any) => void;
  isValid: () => boolean;
  checkValid: () => void;
  setDirty: (value: boolean) => void;
  errors: string[];
}
