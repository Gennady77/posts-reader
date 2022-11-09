import './PostPage.css';
import { LoadinScreen } from '../../Screen/LoadinScreen/LoadinScreen';
import { SearchAuthor } from '../../SearchAuthor/SearchAuthor';
import { SearchPost } from '../../SearchPost/SearchPost';
import { ListAuthors } from '../../ListAuthors/ListAuthors';
import { ListPosts } from '../../ListPosts/ListPosts';
import { Sorter } from '../../Sorter/Sorter';
import { useLoadingPosts } from '../../../hook/useLoadingPosts';

export function PostPage() {
  const { loading } = useLoadingPosts();

  return (
    <>
      {loading && <LoadinScreen />}
      <div className="PostPage">
        <div className="PostPage__leftColumn">
          <div className="PostPage__header">
            <SearchAuthor />
          </div>
          <div className="PostPage__body">
            <ListAuthors />
          </div>
        </div>
        <div className="PostPage__rightColumn">
          <div className="PostPage__header PostPage__headerPosts">
            <Sorter />
            <SearchPost />
          </div>
          <div className="PostPage__body">
            <ListPosts />
          </div>
        </div>
      </div>
    </>
  );
}
