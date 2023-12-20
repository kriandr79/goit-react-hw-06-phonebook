import Form from './Form/Form';
import ContactList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';

export function App() {
  return (
    <div>
      <Form></Form>
      <Filter />
      <ContactList />
    </div>
  );
}
