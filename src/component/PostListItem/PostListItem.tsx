import './PostListItem.css';
import { PostEntryInterface } from '../../model/interface';
import Moment from 'react-moment';

interface PostListItemProps {
  data: PostEntryInterface;
}

export function PostListItem({ data }: PostListItemProps) {
  const { message, createdTime } = data;

  return (
    <div className="PostListItem">
      <div className="PostListItem__header">
        <Moment date={createdTime} format="MMMM D, YYYY HH:mm:ss" />
      </div>
      <div className="PostListItem__body">
        {message}
      </div>
    </div>
  );
}
