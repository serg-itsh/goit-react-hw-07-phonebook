import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contacts/contacts-actions';
import styles from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const name = useSelector(state => state.contacts.filter);

  const handleFilterUsers = event => {
    dispatch(filterContacts(event.target.value));
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
