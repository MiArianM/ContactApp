/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import liststyles from "../Styles/ContactList.module.css";
import ListCreating from "./ListCreating";
function ContactList({ UserData, DeleteButtonHandler }) {
  return (
    <>
      <ul>
        {UserData.length ? (
          UserData.map((contact) => {
            return (
              <ListCreating
                key={contact.id}
                userinfo={contact}
                DeleteButtonHandler={DeleteButtonHandler}
              />
            );
          })
        ) : (
          <h2>No Contact </h2>
        )}
      </ul>
    </>
  );
}

export default ContactList;
