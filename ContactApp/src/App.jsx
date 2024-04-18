import Banner from "../Banner";
import ContactList from "../ContactList";
import Form from "../Form";

function App() {
  return (
    <>
      <Banner />
      <Form />
      <h2 style={{marginBottom:"30px"}}>Contacts List</h2>
      <ul>
        <ContactList />
      </ul>
    </>
  );
}

export default App;
