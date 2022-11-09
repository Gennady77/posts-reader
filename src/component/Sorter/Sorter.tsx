import { SortDirectionEnum } from '../../model/enum';
import { usePosts } from '../../hook/usePosts';
import './Sorter.css';

export function Sorter() {
  const { sort, setSort } = usePosts();

  function onUpClickHandler() {
    setSort(SortDirectionEnum.ASC);
  }

  function onDownClickHandler() {
    setSort(SortDirectionEnum.DESC);
  }

  return (
    <div className="Sorter">
      <button
        className={`Sorter__headerSorterBtn ${sort === SortDirectionEnum.ASC ? 'Sorter__headerSorter--selected' : ''}`}
        onClick={onUpClickHandler}
      >
        &#x25B2;
      </button>
      <button
        className={`Sorter__headerSorterBtn ${sort === SortDirectionEnum.DESC ? 'Sorter__headerSorter--selected' : ''}`}
        onClick={onDownClickHandler}
      >
        &#x25BC;
      </button>
    </div>
  );
}
