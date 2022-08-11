import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/Contacts/contacts-slice';
import styles from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const getSearchContacts = () => {
    return contacts.filter(name =>
      name.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {getSearchContacts()?.map(({ id, name, number }) => {
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

ContactList.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
