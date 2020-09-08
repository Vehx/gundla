import { useForm } from "react-hook-form";
import { useRef } from 'react';
import emailjs from 'emailjs-com';

export const ContactForm = () => {
  const { handleSubmit, register, errors } = useForm();
  const formEl = useRef(null);
  const onSubmit = () => sendEmail();

  const sendEmail = () => {
    emailjs.sendForm('service_6g7o6l1', 'template_sbgbmzl', formEl.current, 'user_nT7oObagtDFioyBOrj7EO')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form ref={formEl} onSubmit={handleSubmit(onSubmit)}>
      <input
        name="email"
        ref={register({
          required: "Required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "invalid email address"
          }
        })}
      />
      {errors.email && errors.email.message}

      <input
        name="username"
        ref={register({
          validate: value => value !== "admin" || "Nice try!"
        })}
      />
      {errors.username && errors.username.message}

      <button type="submit">Submit</button>
    </form>
  );
};
