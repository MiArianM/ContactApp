import liststyles from "../Styles/ContactList.module.css";

/* eslint-disable react/prop-types */
function ListCreating({ userinfo, DeleteButtonHandler }) {
  return (
    <li key={userinfo.id}>
      <div>
        <i className="fa-brands fa-fantasy-flight-games"></i>
        <h4>
          {userinfo.fname} {userinfo.lname}
        </h4>
      </div>
      <div>
        <i className="fa-solid fa-envelope"></i>
        <h4>{userinfo.email}</h4>
      </div>
      <div id={liststyles.Number}>
        <i className="fa-solid fa-square-phone"></i>
        <h4>{userinfo.number}</h4>
      </div>
      <div onClick={() => DeleteButtonHandler(userinfo.id)}>
        <button>
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
}

export default ListCreating;
