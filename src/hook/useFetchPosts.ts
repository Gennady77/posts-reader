import { TOKEN_KEY } from '../model/constants';
import { getPostsResponseResolver } from '../resolver/resolver';
import { DataStoreInterface, getPostsResponseInterface } from '../model/interface';
import { useApi } from './useApi';

export function useFetchPosts() {
  const getPosts = useApi<getPostsResponseInterface>('posts');

  async function* asyncGenerator() {
    for(let i = 1; i <= 10; i++) {
      yield getPosts({
        sl_token: localStorage.getItem(TOKEN_KEY),
        page: i,
      }).then(getPostsResponseResolver);
    }

    return { done: true };
  }

  async function fetchPosts() {
    let dataStore: DataStoreInterface = {};

    for await (const post of asyncGenerator()) {
      dataStore = post.reduce<DataStoreInterface>((acc, value) => {
        if (!acc[value.fromId]) {
          acc[value.fromId] = {
            countPosts: 0,
            fromId: value.fromId,
            fromName: value.fromName,
            posts: [],
          };
        }

        acc[value.fromId].posts.push(value);
        acc[value.fromId].countPosts++;

        return acc;
      }, dataStore);
    }

    return dataStore;
  }

  return fetchPosts;
}
