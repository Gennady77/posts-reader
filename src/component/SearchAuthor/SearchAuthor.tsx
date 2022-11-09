import { Search } from '../Search/Search';
import { usePosts } from '../../hook/usePosts';
import { useCallback } from 'react';

export function SearchAuthor() {
  const { setAuthorNameFilter } = usePosts();

  const onSearchChangeHandler = useCallback((term: string) => {
    setAuthorNameFilter(term);
  }, []);

  return (
    <Search onChange={onSearchChangeHandler} />
  );
}
