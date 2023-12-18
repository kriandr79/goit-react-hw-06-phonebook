import Form from './Form/Form';
import ContactList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';

import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact, getContacts } from '../redux/contactsSlice';
import { makeFilter, getFilter } from '../redux/filterSlice';

export function App() {
  const dispatch = useDispatch();
  const contactsList = useSelector(getContacts);
  const filterValue = useSelector(getFilter);

  // Сабмит форми, додаємо контакт
  const formSubmitHandler = ({ name, number }) => {
    if (contactsList.find(contact => contact.name === name)) {
      alert(`${name} is already exist in the phonebook!`);
      return;
    }
    dispatch(addContact(name, number));
  };

  // Збереження значення фільтру
  const handleFilter = ({ currentTarget }) =>
    dispatch(makeFilter(currentTarget.value));

  // Видалення контакту
  const removeContact = contactId => dispatch(deleteContact(contactId));

  // Отримання відфільтрованих контактів
  const normalazedFilter = filterValue.toLowerCase();
  const filteredContacts = contactsList.filter(contact =>
    contact.name.toLowerCase().includes(normalazedFilter)
  );


  return (
    <div>
      <h2>Phonebook</h2>
      <Form onSubmit={formSubmitHandler}></Form>
      <h2>Contacts</h2>
      <Filter value={filterValue} onChange={handleFilter} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={removeContact}
      />
    </div>
  );
}
