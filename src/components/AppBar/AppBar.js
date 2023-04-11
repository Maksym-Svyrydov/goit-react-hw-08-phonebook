import { Header } from './AppBar.styled';
import { UserMenu } from '../UserMenu/UserMenu';
import { Navigation } from '../Nav/Nav';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../../hooks/useAuth';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
