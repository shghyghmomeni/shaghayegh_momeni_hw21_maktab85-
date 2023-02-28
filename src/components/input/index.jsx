import React from "react";
import "./style.css";
function Input(props) {
  const { name, type, id, placeholder, onChange } = props;
  return (
    <input
      name={name}
      type={type}
      id={id}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
export default Input;
