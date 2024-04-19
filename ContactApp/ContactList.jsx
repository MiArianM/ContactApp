import liststyles from "./ContactList.module.css";
function ContactList() {
  return (
    <>
      <li>
        <div>
          <i className="fa-brands fa-fantasy-flight-games"></i>
          <h4>Arian Pourhossein</h4>
        </div>
        <div>
          <i className="fa-solid fa-envelope"></i>
          <h4>Arianpourhossein@yahoo.com</h4>
        </div>
        <div>
          <i className="fa-solid fa-square-phone"></i>
          <h4>09912601570</h4>
        </div>
        <div>
          <button>
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </li>
    </>
  );
}

export default ContactList;
