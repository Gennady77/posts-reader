import { useEffect, useState } from 'react';
import { usePosts } from './usePosts';

export function useLoadingPosts() {
  const [loading, setLoading] = useState(false);
  const { fetchPosts } = usePosts();

  useEffect(() => {
    let ignore = false;
    setLoading(true);

    fetchPosts().finally(() => {
      if (ignore) {
        return;
      }

      setLoading(false);
    });

    return () => {
      ignore = true;
    };
  }, []);

  return {loading};
}
