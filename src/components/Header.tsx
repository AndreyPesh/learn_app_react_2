import { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { Links } from '../types/enum';
import { NAME_CLASS_ACTIVE_BURGER } from '../utils/constants';
import { addRemoveClassToBody } from '../utils/functions';
import Burger from './ui/Burger';
import AuthButton from './ui/buttons/AuthButton';
import Navigation from './ui/Navigation';
import SwitchLang from './ui/SwitchLang';
import UserManagement from './ui/UserManagement';

const Header = (): JSX.Element => {
  const isAuth = useAuth();
  const [activeClass, setActiveClass] = useState(false);

  const burgerHandler = () => {
    setActiveClass((prevState) => !prevState);
    addRemoveClassToBody(activeClass);
  };

  return (
    <header className="header">
      <Link to={Links.main} className="header__link">
        <h1 className="header__brand">LeaApp</h1>
      </Link>
      <div
        className={`header__content ${activeClass ? NAME_CLASS_ACTIVE_BURGER : ''}`}
        onClick={burgerHandler}
      >
        <Navigation />
        <SwitchLang />
        <div className="search">
          <input className="search__field" type="text" placeholder="Search.." />
          <button className="search__button"></button>
        </div>
        {isAuth ? <UserManagement /> : <AuthButton />}
      </div>
      <Burger handler={burgerHandler} activeClass={activeClass} />
    </header>
  );
};

export default Header;
