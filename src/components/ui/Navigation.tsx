import { Link } from 'react-router-dom';
import { listRoutes } from '../../router/listRotes';

const Navigation = (): JSX.Element => {
  return (
    <nav className="header__navigation">
      <ul className="navigation">
        {listRoutes.map(
          (route) =>
            route.mainNav && (
              <li key={route.path} className="navigation__item">
                <Link className="navigation__link" to={route.path}>
                  {route.name}
                </Link>
              </li>
            )
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
