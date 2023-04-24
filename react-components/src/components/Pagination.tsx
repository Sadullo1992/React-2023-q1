import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { selectPage, goToNextPage, goToPrevPage } from '../redux/searchSlice';

type PaginationProps = {
  totalPages: number;
};

function Pagination({ totalPages }: PaginationProps) {
  const page = useAppSelector(selectPage);
  const dispatch = useAppDispatch();
  return (
    <div className="pagination">
      <div className="pagination__inner">
        <button
          type="button"
          className={page === 1 ? 'btn btn--pagination disabled' : 'btn btn--pagination'}
          onClick={() => dispatch(goToPrevPage())}
          data-cy="pagination-btn"
        >
          Prev
        </button>
        <button type="button" className="btn btn--pagination center" data-cy="pagination-btn">
          {page}
        </button>
        <button
          type="button"
          className={page === totalPages ? 'btn btn--pagination disabled' : 'btn btn--pagination'}
          onClick={() => dispatch(goToNextPage())}
          data-cy="pagination-btn"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
