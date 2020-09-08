import {useState} from "react";

export const ContactForm = () => {
const [status, setStatus] = useState("")
const sendEmail = (ev) => {

    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  }


  return (
    <form
        onSubmit={sendEmail}
        action="https://formspree.io/mgenglzb"
        method="POST"
      >
        <label htmlFor="name">Namn/Organisation:</label>
        <input type="text" name="name" autoComplete="off" required/>
        <label htmlFor="telephone">Telefonnummer:</label>
        <input type="text" name="telephone" autoComplete="off" required/>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" autoComplete="off" required/>
        <label htmlFor="message">Meddelande:</label>
        <input type="text" name="message" autoComplete="off" required/>
        {status === "SUCCESS" ? <p>Tack! Ditt meddelande är skickat.</p> : <button>Skicka</button>}
        {status === "ERROR" && <p>Åååånej! Något gick fel.</p>}
      </form>
  );
};



