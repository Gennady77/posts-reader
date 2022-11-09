import { useContext } from 'react';
import { PostsContext } from '../component/Contexts/PostsContext/PostsContext';

export function usePosts() {
  return useContext(PostsContext);
}
