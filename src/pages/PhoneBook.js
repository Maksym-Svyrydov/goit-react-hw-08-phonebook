import ContactForm from '../components/Form/Form';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import { Container, PhoneBook, Title } from './PhoneBook.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operation';
import { selectFilter } from 'redux/selectors';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const PhoneBookApp = () => {
  const dispatch = useDispatch();
  const search = useSelector(selectFilter);
  const isLogged = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLogged) {
      dispatch(fetchContacts(search));
    }
  }, [dispatch, isLogged, search]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 36,
        color: '#010101',
      }}
    >
      <Container>
        <PhoneBook>Phonebook</PhoneBook>
        <ContactForm />
        <Title>Contacts</Title>
        <Filter />
        <ContactList />
        <ToastContainer autoClose={2500} limit={3} />
      </Container>
    </div>
  );
};
