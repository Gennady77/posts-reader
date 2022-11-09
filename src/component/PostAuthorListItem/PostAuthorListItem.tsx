import { AuthorInterface } from '../../model/interface';
import './PostAuthorListItem.css';
import { useNavigate } from 'react-router-dom';

interface PostAuthorListItem {
  data: AuthorInterface;
  selected: boolean;
}

export function PostAuthorListItem({ data, selected }: PostAuthorListItem) {
  const { fromName, fromId } = data;
  const navigate = useNavigate();

  function onPostAuthorClickHandler() {
    navigate(`/${fromId}`, { replace: true });
  }

  return (
    <div onClick={onPostAuthorClickHandler} className={`PostAuthorListItem ${selected ? 'PostAuthorListItem--selected' : ''}`}>
      {fromName}
      <div className="PostAuthorListItem__count">{data.countPosts}</div>
    </div>
  );
}