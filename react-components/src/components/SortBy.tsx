import { Dispatch, SetStateAction } from 'react';

type SortByProps = {
  setSortBy: Dispatch<SetStateAction<string>>;
};

function SortBy({ setSortBy }: SortByProps) {
  return (
    <form className="form form--sort">
      <label htmlFor="country">
        SortBy:
        <select
          defaultValue="relevant"
          placeholder="select-country"
          onChange={(e) => setSortBy(e.currentTarget.value)}
        >
          <option value="relevant">Relevant</option>
          <option value="latest">Latest</option>
        </select>
      </label>
    </form>
  );
}

export default SortBy;
