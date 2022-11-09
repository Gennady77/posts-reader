import { PostsPageUrlParams } from '../model/interface';
import { useParams } from 'react-router-dom';
import { usePosts } from './usePosts';

export function useSelectedPosts() {
  const urlParams: PostsPageUrlParams = useParams();
  const { dataStore } = usePosts();
  const { fromId } = urlParams;

  const selectedAuthor = (dataStore[fromId || ''] || {
    fromId: '',
    fromName: '',
    posts: [],
  });

  return {
    selectedFromId: selectedAuthor.fromId,
    selectedPosts: selectedAuthor.posts,
  };
}
