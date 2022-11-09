import { PostAuthorListItem } from '../PostAuthorListItem/PostAuthorListItem';
import { List } from '../List/List';
import { usePosts } from '../../hook/usePosts';
import { useSelectedPosts } from '../../hook/useSelectedPosts';
import { listFilterByName } from '../../utils/utils';
import { AuthorInterface } from '../../model/interface';

export function ListAuthors() {
  const { dataStore, authorNameFilter } = usePosts();
  const { selectedFromId } = useSelectedPosts();

  const authorsList = listFilterByName<AuthorInterface>(Object.values(dataStore), authorNameFilter)
    .sort((item1, item2) => {
      if (item1.fromName.toLowerCase() > item2.fromName.toLowerCase()) {
        return 1;
      }
      if (item1.fromName.toLowerCase() < item2.fromName.toLowerCase()) {
        return -1;
      }
      return 0;
    });

  return (
    <List>
      {authorsList.map((item) => (
        <PostAuthorListItem
          selected={item.fromId === selectedFromId} key={item.fromId} data={item}
        />
      ))}
    </List>
  );
}
