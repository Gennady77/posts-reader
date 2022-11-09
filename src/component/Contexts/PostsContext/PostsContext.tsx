import { createContext, PropsWithChildren, useState } from 'react';
import { DataStoreInterface, PostsContextInterface } from '../../../model/interface';
import { useFetchPosts } from '../../../hook/useFetchPosts';
import { SortDirectionEnum } from '../../../model/enum';

export const PostsContext = createContext<PostsContextInterface>({
  fetchPosts: () => Promise.resolve(),
  dataStore: {},
  authorNameFilter: '',
  setAuthorNameFilter: () => {},
  postMessageFilter: '',
  setPostMessageFilter: () => {},
  sort: SortDirectionEnum.DESC,
  setSort: () => {},
});

export function PostsContextProvider({ children }: PropsWithChildren) {
  const [dataStore, setDataStore] = useState<DataStoreInterface>({});
  const [authorNameFilter, setAuthorNameFilter] = useState('');
  const [postMessageFilter, setPostMessageFilter] = useState('');
  const [sort, setSort] = useState<SortDirectionEnum>(SortDirectionEnum.ASC);

  const fetchPostsRequest = useFetchPosts();

  async function fetchPosts() {
    const dataStore = await fetchPostsRequest();

    setDataStore(dataStore);
  }

  const context = {
    fetchPosts,
    dataStore,
    authorNameFilter,
    setAuthorNameFilter,
    postMessageFilter,
    setPostMessageFilter,
    sort,
    setSort,
  };

  return (
    <PostsContext.Provider value={context}>
      {children}
    </PostsContext.Provider>
  );
}
