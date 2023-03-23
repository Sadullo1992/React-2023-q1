function Form() {
  return (
    <form className="form">
      <label htmlFor="firstname">
        Name
        <input type="text" name="firstname" placeholder="Enter your name" />
      </label>
      <label htmlFor="country">
        Delivery Address
        <select name="country">
          <option>Russia</option>
          <option>Belarus</option>
          <option>Ukraine</option>
          <option>Uzbekistan</option>
        </select>
      </label>
      <label htmlFor="date">
        Delivery date
        <input type="date" name="date" placeholder="Enter your name" />
      </label>
      <label htmlFor="file">
        Profile image
        <input type="file" name="file" />
      </label>
      <div className="form__payment">
        <label htmlFor="cash">
          <input id="cash" type="radio" name="payment" />
          Cash
        </label>
        <label htmlFor="card">
          <input id="card" type="radio" name="payment" />
          Card
        </label>
      </div>
      <label htmlFor="agree">
        <input type="checkbox" name="agree" />I agree to the terms of purchase
      </label>
      <button type="submit" className="btn btn--primary">
        <span className="btn__text">Submit</span>
      </button>
    </form>
  );
}

export default Form;
