function SortBy() {
  return (
    <form className="form form--sort">
      <label htmlFor="country">
        SortBy:
        <select defaultValue="relevant" placeholder="select-country">
          <option value="relevant">Relevant</option>
          <option value="latest">Latest</option>
        </select>
      </label>
    </form>
  );
}

export default SortBy;
