import { Search } from '../Search/Search';
import { usePosts } from '../../hook/usePosts';
import { useCallback } from 'react';

export function SearchPost() {
  const { setPostMessageFilter } = usePosts();

  const onSearchChangeHandler = useCallback((term: string) => {
    setPostMessageFilter(term);
  }, []);

  return (
    <Search onChange={onSearchChangeHandler} />
  );
}
