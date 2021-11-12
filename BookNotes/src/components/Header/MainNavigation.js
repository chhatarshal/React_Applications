import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}> 
        <nav className={classes.nav}>
          <NavLink to='/' activeClassName={classes.active}>
            Book Notes
          </NavLink>
        </nav>
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to='/all' activeClassName={classes.active}>
              View My Books
            </NavLink>
          </li>
          <li>
            <NavLink to='/newbook' activeClassName={classes.active}>
              Add notes
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;