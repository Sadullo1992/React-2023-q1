import { NavLink } from 'react-router-dom';
import logo from '../assets/images/shop.svg';

type ActiveClassProps = {
  isActive: boolean;
};

const setActiveClassName = ({ isActive }: ActiveClassProps): string => {
  let classname = '';
  if (isActive) {
    classname = 'nav__link nav__link--active';
  } else {
    classname = 'nav__link';
  }
  return classname;
};

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="logo">
            <img height={40} width={40} src={logo} alt="logo" />
            <div className="logo__content">
              <h4>Shopping</h4>
              <p>e-commers</p>
            </div>
          </div>
          <nav className="nav">
            <NavLink to="/" className={setActiveClassName}>
              Home
            </NavLink>
            <NavLink to="/about" className={setActiveClassName}>
              About
            </NavLink>
            <NavLink to="/order" className={setActiveClassName}>
              Orders
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
