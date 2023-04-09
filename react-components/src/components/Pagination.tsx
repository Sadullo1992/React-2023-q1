import { Dispatch, SetStateAction } from 'react';

type PaginationProps = {
  totalPages: number;
  setPage: Dispatch<SetStateAction<number>>;
  page: number;
};

function Pagination({ totalPages, setPage, page }: PaginationProps) {
  return (
    <div className="pagination">
      <div className="pagination__inner">
        <button
          type="button"
          className={page === 1 ? 'btn btn--pagination disabled' : 'btn btn--pagination'}
          onClick={() => setPage(page - 1)}
        >
          Prev
        </button>
        <button type="button" className="btn btn--pagination center">
          {page}
        </button>
        <button
          type="button"
          className={page === totalPages ? 'btn btn--pagination disabled' : 'btn btn--pagination'}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
