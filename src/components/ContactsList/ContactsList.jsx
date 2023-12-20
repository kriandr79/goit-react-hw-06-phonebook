import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, getContacts } from '../../redux/contactsSlice';
import { getFilter } from '../../redux/filterSlice';


function ContactList() {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilter);
  const contactsList = useSelector(getContacts);

  // Видалення контакту
  const removeContact = contactId => dispatch(deleteContact(contactId));

  // Отримання відфільтрованих контактів
  const normalazedFilter = filterValue.toLowerCase();
  const filteredContacts = contactsList.filter(contact =>
    contact.name.toLowerCase().includes(normalazedFilter)
  );

  return (
    <ul>
      {filteredContacts.map(({ name, number, id }) => (
        <li key={id}>
          {name}: {number}{' '}
          <button type="button" onClick={() => removeContact(id)}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
