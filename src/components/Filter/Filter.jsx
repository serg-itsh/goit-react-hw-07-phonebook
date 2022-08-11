import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from '../../redux/Contacts/contacts-slice';
import styles from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const name = useSelector(state => state.contacts.filter);

  const handleFilterUsers = event => {
    dispatch(filterContact(event.target.value));
  };

  return (
    <form className={styles.formContacts}>
      <label className={styles.label}>
        Find contacts by name
        <input
          className={styles.input}
          type="text"
          name="name"
          onChange={handleFilterUsers}
          value={name}
        />
      </label>
    </form>
  );
}
