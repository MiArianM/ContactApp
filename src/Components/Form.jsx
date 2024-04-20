import { useState } from "react";
import styles from "../Styles/Form.module.css";
import { v4 } from "uuid";
import ContactList from "../Components/ContactList.jsx";
import inputs from "../inputSTR.js";
function Form() {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    number: "",
    id: "",
  });
  const [isError, setError] = useState(true);
  const [list, setList] = useState([]);
  const formHandler = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setForm({ ...form, [name]: value });
  };
  const DeleteButtonHandler = (id) => {
    const finallist = list.filter((info) => info.id !== id);
    setList(finallist)
  };
  const addingHandler = (event) => {
    console.log(form);
    event.preventDefault();
    if (!form.fname || !form.lname || !form.email || !form.number) {
      setError(false);
      return;
    } else {
      setError(true);
      const finalform = { ...form, id: v4() };
      setList((list) => [...list, finalform]);
      setForm({
        fname: "",
        lname: "",
        email: "",
        number: "",
      });
    }
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginTop: "20px",
        flexDirection: "column",
      }}
    >
      <form className={styles.container}>
        {inputs.map((input, index) => (
          <input
            value={form[input.name]}
            placeholder={input.placeholder}
            type={input.type}
            name={input.name}
            onChange={formHandler}
            key={index}
          />
        ))}

        <button type="submit" className={styles.button} onClick={addingHandler}>
          <h5>Add Contact</h5>
        </button>
      </form>
      <div className={isError ? styles.nothing : styles.error}>
        <div id={styles.errorbox}>
          <div className={styles.face2}>
            <div className={styles.eye}></div>
            <div className={`${styles.eye} ${styles.right}`}></div>
            <div className={`${styles.mouth} ${styles.sad}`}></div>
          </div>
          <div className={`${styles.shadow} ${styles.move}`}></div>
          <div className={styles.message}>
            <h1 className={styles.alert}>Error Occupied!</h1>
            <p>Please Fill All Information Sections .</p>
          </div>
          <button className={styles.buttonbox}>
            <h1 className={styles.red}>
              <a href="#">Fill</a>
            </h1>
          </button>
        </div>
      </div>
      <ContactList UserData={list} DeleteButtonHandler={DeleteButtonHandler}/>
    </div>
  );
}

export default Form;
