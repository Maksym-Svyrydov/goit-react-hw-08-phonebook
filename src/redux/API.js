import axios from 'axios';

axios.defaults.baseURL = `https://connections-api.herokuapp.com`;

export async function fetchContactList(search) {
  const contacts = await axios.get(`/contacts`, {
    params: { search },
  });
  return contacts;
}

export async function postContacts(newContatact) {
  const { data } = await axios.post(`/contacts`, newContatact);
  return data;
}

export async function deleteContact(contactId) {
  const contact = await axios.delete(`/contacts/${contactId}`);
  return contact;
}
