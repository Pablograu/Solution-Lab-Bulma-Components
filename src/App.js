import React from "react";
import Navbar from "./components/Navbar";
import FormField from "./components/FormField";
import CoolButton from "./components/CoolButton";
import styles from "./styles.css"

export default function App() {
  return (
    <div>
      <Navbar />
      <FormField
        name={"Name"}
        type={"text"}
        placeholder={"placeholder for name"}
      />
      <FormField
        name={"Email"}
        type={"email"}
        placeholder={"placeholder for email"}
      />
      <div className="buttons-wrapper">
        <CoolButton
          name={"Button 1"}
          className={"button is-rounded my-class is-danger is-small"}
        />
        <CoolButton
          name={"Button 2"}
          className={"button is-small is-success"}
        />
      </div>
    </div>
  );
}
