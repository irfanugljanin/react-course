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

  const handlerChangeEvent = (e) => {
    setValues({ ...values, firstName: e.target.value });
  };

  return (
    <section className="registration">
      <div className="form">
        <Input
          onChange={handlerChangeEvent}
          value={values.firstName}
          inputName={"Name"}
        />
        <Input value={values.lastName} inputName={"Lastname"} />
        <Input value={values.email} inputName={"Email"} />
        <button className="button">Register</button>
      </div>
      ;
    </section>
  );
};

export default Registration;
