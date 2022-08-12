import { Form } from './ContactForm/ContactForm';
import Container from './Container/Container';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
// import { Oval } from 'react-loader-spinner';
// import { Loader } from './Loader/Loader';
// import { useSelector } from 'react-redux';

export const App = () => {
  // const loader = useSelector(state => state.contacts.loading);
  return (
    <div>
      <Container title="Phone book">
        <Form />
      </Container>
      <Container title="Contacts">
        <Filter />
        <ContactList />
        {
          <div>
            {/* {<Loader />} */}
            {/* <h2>Loading... </h2>
            <Oval
              height={60}
              width={60}
              color="#f87f00"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#a0a0a0"
              strokeWidth={10}
              strokeWidthSecondary={10}
              // loading={loader}
            /> */}
          </div>
        }
      </Container>
    </div>
  );
};
