import styles from "./Form.module.css";
function Form() {
  return (
    <div style={{ display: "flex", justifyContent: "center" , marginTop:"20px"}}>
      <form className={styles.container}>
        <input type="text" placeholder="Write Your First Name . ."/>
        <input type="text" placeholder="Write Your Last Name . ."/>
        <input type="text" placeholder="Your Email Here !"/>
        
        <input type="number" placeholder="Your Phone Number Here !"/>
        <button className={styles.button}>Add Contact</button>
      </form>
    </div>
  );
}

export default Form;
