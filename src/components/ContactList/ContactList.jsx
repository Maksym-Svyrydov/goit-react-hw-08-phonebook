import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from '../../redux/operation';
import { List, Item, Text, DeleteBtn } from './ContactList.styled';
import { selectContactsList, selectFilter } from '../../redux/selectors';
import { useMemo } from 'react';

const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContactsList);

  const filtredContacts = useMemo(() => {
    if (!filter) {
      return contacts;
    }

    return contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  }, [contacts, filter]);

  return (
    <List>
      {filtredContacts.map(({ name, number, id }) => (
        <Item key={id}>
          <Text>{`${name}: ${number}`}</Text>
          <DeleteBtn
            type="button"
            onClick={() => {
              dispatch(deleteContacts(id));
            }}
          >
            Delete
          </DeleteBtn>
        </Item>
      ))}
    </List>
  );
};

export default ContactList;
