import { useAppDispatch } from '../redux/hooks';
import { setSortBy } from '../redux/searchSlice';

function SortBy() {
  const dispatch = useAppDispatch();
  return (
    <form className="form form--sort">
      <label htmlFor="country">
        SortBy:
        <select
          defaultValue="relevant"
          placeholder="select-country"
          onChange={(e) => dispatch(setSortBy(e.currentTarget.value))}
        >
          <option value="relevant">Relevant</option>
          <option value="latest">Latest</option>
        </select>
      </label>
    </form>
  );
}

export default SortBy;
