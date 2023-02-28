import React from "react";
import { FiEdit2, FiTrash } from "react-icons/fi";
import "./style.css";
export default function Cart(props) {
  const { name, lastname, email, phone, role } = props;
  return (
    <div className="cart__container">
      <div className="cart__info">
        <p>
          {name} {lastname}
        </p>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
      <div className="up">
        <p>{role}</p>
        <div className="cart__icons">
          <FiEdit2 id="edit" />
          <FiTrash id="trash" />
        </div>
      </div>
    </div>
  );
}
