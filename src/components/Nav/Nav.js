import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import css from './Nav.module.css';
import Button from '@mui/material/Button';
export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Button variant="outlined">
        <NavLink to="/">Home</NavLink>
      </Button>
      {isLoggedIn && <NavLink to="/contacts">PhoneBook</NavLink>}
    </nav>
  );
};
// className={css.link}
