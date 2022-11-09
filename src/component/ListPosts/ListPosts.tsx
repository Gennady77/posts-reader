import { PostListItem } from '../PostListItem/PostListItem';
import { List } from '../List/List';
import { SortDirectionEnum } from '../../model/enum';
import { useSelectedPosts } from '../../hook/useSelectedPosts';
import { usePosts } from '../../hook/usePosts';

export function ListPosts() {
  const { postMessageFilter, sort } = usePosts();
  const { selectedPosts } = useSelectedPosts();

  const postsList = selectedPosts.filter(
    (item) => (item.message.toLowerCase()).includes(postMessageFilter.toLowerCase()),
  ).sort((item1, item2) => {
    let result = 0;

    switch (sort) {
      case SortDirectionEnum.ASC:
        result = item2.createdTime.getTime() - item1.createdTime.getTime();
        break;
      case SortDirectionEnum.DESC:
        result = item1.createdTime.getTime() - item2.createdTime.getTime();
        break;
    }

    return result;
  });

  return (
    <List placeholder={postMessageFilter.length ? 'Search result is empty' : undefined}>
      {postsList.map((item) => (<PostListItem key={item.id} data={item} />))}
    </List>
  );
}
