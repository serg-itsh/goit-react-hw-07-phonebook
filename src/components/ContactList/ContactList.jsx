import {
  deleteContact,
  fetchContacts,
} from 'redux/contacts/contacts-operations';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import styles from './ContactList.module.css';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filterContacts = () => {
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <ul>
      {filterContacts()?.map(({ id, name, number }) => {
        return (
          <li className={styles.listItem} key={id}>
            <p>
              {name}: {number}
            </p>

            <button
              className={styles.btn}
              type="button"
              onClick={() => handleDelete(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
