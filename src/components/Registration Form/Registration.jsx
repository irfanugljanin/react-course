import React from "react";
import Input from "./input";
import "./style.css";
import { useState } from "react";

const Registration = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const firstnameChangeEvent = (event) => {
    setValues({ ...values, firstName: event.target.value });
  };

  const lastnameChangeEvent = (event) => {
    setValues({ ...values, lastName: event.target.value });
  };

  const emailChangeEvent = (event) => {
    setValues({ ...values, email: event.target.value });
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <div className="registration">
      <form className="form" onSubmit={handlerSubmit}>
        {submitted && valid ? (
          <div className="succes-message">Succes! Thank you</div>
        ) : null}
        <Input
          onChange={firstnameChangeEvent}
          value={values.firstName}
          inputName={"Name"}
        />
        {submitted && !values.firstName ? (
          <span className="message">Please enter your first name</span>
        ) : null}

        <Input
          disabled={submitted}
          onChange={lastnameChangeEvent}
          value={values.lastName}
          inputName={"Lastname"}
        />
        {submitted && !values.lastName ? (
          <span className="message">Please enter your last name</span>
        ) : null}
        <Input
          onChange={emailChangeEvent}
          value={values.email}
          inputName={"Email"}
        />
        {submitted && !values.email ? (
          <span className="message">Please enter your email</span>
        ) : null}
        <button type="submit" className="button">
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;
