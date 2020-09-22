import { useState } from "react";

export const ContactForm = () => {
  const [status, setStatus] = useState("");
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
  };

  return (
    <>
      <form
        id="form"
        onSubmit={sendEmail}
        action={`https://formspree.io/${process.env.NEXT_PUBLIC_FORM_SPREE_ID}`}
        method="POST"
      >
        <label htmlFor="name">Namn/Organisation</label>

        <input type="text" name="name" autoComplete="off" required />

        <label htmlFor="telephone">Telefonnummer</label>

        <input type="text" name="telephone" autoComplete="off" required />

        <label htmlFor="email">Email</label>

        <input type="email" name="email" autoComplete="off" required />

        <label htmlFor="message">Meddelande</label>

        <textarea type="text" name="message" autoComplete="off" required />

        {status === "SUCCESS" ? (
          <p>Tack! Ditt meddelande är skickat.</p>
        ) : (
          <button className="button-form">Skicka</button>
        )}
        {status === "ERROR" && <p>Åååånej! Något gick fel.</p>}
      </form>
      <style jsx>{`
        form {
          max-width: 512px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 20px 0;
        }
        label {
          color: var(--color-chocolate);
          font-family: var(--heading-font);
          font-style: normal;
          font-weight: bold;
          font-size: 18px;
          line-height: 23px;
          margin: 20px 0 10px 0;
          text-align: left;
          width: 100%;
        }
        input {
          width: 100%;
          height: 48px;
          border: 0.5px solid var(--color-black);
        }

        textarea {
          height: 135px;
          width: 100%;
          border: 0.5px solid var(--color-black);
          resize: none;
        }

        button {
          width: 100%;
          margin-top: 25px;
        }
      `}</style>
    </>
  );
};
