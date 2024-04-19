/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import liststyles from "./ContactList.module.css";
function ContactList({ UserData }) {
  const deletehandler = (event) => {
    const li = event.target.parentElement.parentElement.parentElement;
    li.style.display = "none";
  };
  return (
    <>
      <ul>
        {UserData.length ? (
          UserData.map((contact) => (
            <li key={contact.id}>
              <div>
                <i className="fa-brands fa-fantasy-flight-games"></i>
                <h4>
                  {contact.fname} {contact.lname}
                </h4>
              </div>
              <div>
                <i className="fa-solid fa-envelope"></i>
                <h4>{contact.email}</h4>
              </div>
              <div>
                <i className="fa-solid fa-square-phone"></i>
                <h4>{contact.number}</h4>
              </div>
              <div>
                <button onClick={deletehandler}>
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </li>
          ))
        ) : (
          <h2>No Contact </h2>
        )}
      </ul>
    </>
  );
}

export default ContactList;
