import { NavLink } from 'react-router-dom';
import s from './Navigate.module.css';
import { FaHome } from 'react-icons/fa';
import {MdMovieFilter} from 'react-icons/md';
 const Navigate = () => {
  return (
    <nav className={s.navigation}>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? s.active : s.navLink)}
          >
            Home <FaHome size="1.5rem"/>
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink
            to="/movies"
            className={({ isActive }) => (isActive ? s.active : s.navLink)}
          >
            Movies <MdMovieFilter size="1.5rem"/>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigate;