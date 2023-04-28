import React, { useState, useEffect, useRef, useContext } from "react";
import { MdEmail } from "react-icons/md";
import "./contact-form.css";
import { BiX } from "react-icons/bi";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { languageContext } from './../Context/languageContext';
import { showContactContext } from "../Context/showContactContext";
function ContactForm() {

  const { lang } = useContext(languageContext);

  const [inputsValue, setInputsValue] = useState({
    name: "",
    email: "",
    msg: "",
  });

  const form = useRef();
  const [inputsErr, setInputsErr] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputsValue({ ...inputsValue, [name]: value });
    // console.log(inputsValue)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputsErr(validate(inputsValue));
    setIsSubmit(true);
  };

  useEffect( () => {
    // console.log(inputsErr);
    if (Object.keys(inputsErr).length === 0 && isSubmit) {
      // console.log(inputsValue);
      sendEmail();
    }
  }, [inputsErr]);

  const sendEmail = async (e) => {
      await emailjs
      .sendForm(
        "service_ho5r1ji",
        "template_2fln8l7",
        // inputsValue,
        form.current,
        "4sPbe0XmnJe4ohlBC"
      )
      .then(
        (result) => {
          // console.log(result.text);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your msg has been sent',
            showConfirmButton: false,
            timer: 1500
          })
        },
        (error) => {
          // console.log(error.text);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })
        }
      );
      form.current.querySelector('textarea').value = "";
      form.current.querySelector('input').value = "";
      form.current.querySelectorAll('input')[1].value = "";
      setInputsValue({
        name: "",
        email: "",
        msg: "",
      });
  };

  const validate = (values) => {
    const errors = {};
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!values.name.trim()) {
      errors.name = lang === 'en' ? "Username is required !" : 'الأسم مطلوب !';
    }
    if (!values.email.trim()) {
      errors.email = lang === 'en' ?  "Email is required !" : 'الأيميل مطلوب !';
    } else if (!pattern.test(values.email)) {
      errors.email = lang === 'en' ? "This is not a valid email format !" : 'تأكد من الأيميل !';
    }
    if (!values.msg.trim()) {
      errors.msg = lang === 'en' ? "Message is required !" : 'الرسالة مطلوبة !';
    }
    return errors;
  };



  const { showContactForm, setShowContactForm } = useContext(showContactContext);

  const contactClose = (e) => {
    setShowContactForm(false)
  };

  return (
    <div className={`form-Container ${showContactForm && "visible-form"}`}>
      <div className="overlay-form" onClick={contactClose}></div>
      <form
        ref={form}
        className="text-center px-4 py-5 text-white"
        onSubmit={handleSubmit}
      >
        <div className="close-form" onClick={contactClose}>
          <i>
            <BiX />
          </i>
        </div>
        <h3 className="form-heading fw-bold">
          {lang === "en" ? "Contact" : "للتواصل"}
        </h3>
        <div className="from-content d-flex justify-content-between align-items-center">
          <div className="w-50 position-relative contact-icon">
            <i>
              <MdEmail />
            </i>
          </div>
          <div className="form-groupes">
            <div className="from-group mt-2 mt w-100 d-flex flex-column align-items-center justify-content-center">
              <label htmlFor="name-input">
                {lang === "en" ? "Name*" : "*الاسم"}
              </label>
              <input
                onChange={handleChange}
                type="text"
                name="name"
                id="name-input"
                value={inputsValue.name}
              />
              <p>{inputsErr.name}</p>
              <div className="input-error"></div>
            </div>
            <div className="from-group w-100 d-flex flex-column align-items-center justify-content-center">
              <label htmlFor="email-input">
                {lang === "en" ? "Email*" : "*الإيميل"}
              </label>
              <input
                onChange={handleChange}
                type="text"
                name="email"
                id="email-input"
                value={inputsValue.email}
              />
              <p>{inputsErr.email}</p>
              <div className="input-error"></div>
            </div>
            <div className="from-group w-100 d-flex flex-column align-items-center justify-content-center">
              <label htmlFor="msg-input">
                {lang === "en" ? "Message*" : "*الرسالة"}
              </label>
              <textarea
                onChange={handleChange}
                name="msg"
                id="msg-input"
                rows={3}
                value={inputsValue.msg}
              />
              <p>{inputsErr.msg}</p>
              <div className="input-error"></div>
            </div>
            <button type="submit">{lang === "en" ? "Send" : "ارسال"}</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
