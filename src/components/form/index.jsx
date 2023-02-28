import axios from "axios";
import React, { useState, useEffect } from "react";
import Input from "../input";
import "./style.css";
// import { API_URL } from "../../api/index";

export default function AddNumberForm() {
  //User state
  const [user, setUser] = useState({
    id: "",
    name: "",
    lastname: "",
    phone: "",
    role: "default",
    email: "",
  });

  //Errors
  const [nameErr, setnameErr] = useState("");
  const [lastnameErr, setlastnameErr] = useState("");
  const [phoneErr, setphoneErr] = useState("");
  const [emailErr, setemailErr] = useState("");

  const addNumberHandler = (e) => {
    // e.preventDefault();
    axios.post("http://localhost:3000/users", user);
  };

  const validationForm = (type, value) => {
    //RegExp
    const emailValidationCheck = RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    const nameValidationCheck = RegExp(/^[a-zA-Zا-ی]/);

    const numberValidationCheck = RegExp(/^[0-9]*$/);

    //validations
    switch (type) {
      case "name":
        value.length < 2 || !nameValidationCheck.test(value)
          ? setnameErr("باید بیشتر از ۲ کاراکتر و فقط دارای حروف الفبا باشد")
          : setnameErr("");
        break;

      case "lastname":
        value.length < 2 || !nameValidationCheck.test(value)
          ? setlastnameErr(
              "نام شما باید بیشتر از ۲ کاراکتر باشد و فقط دارای حروف الفبا باشد"
            )
          : setlastnameErr("");
        break;

      case "phone":
        console.log(value, value.length);
        !numberValidationCheck.test(value) ||
        value.length < 11 ||
        value.match(/^09*$/)
          ? setphoneErr(
              "شماره تماس باید ۱۱ کاراکتر از نوع عدد باشد و با ۰۹ شروع شود"
            )
          : setphoneErr("");
        break;

      case "email":
        !emailValidationCheck.test(value)
          ? setemailErr(
              " (با فرمت youremail@gmail.com) لطفا ایمیل را درست وارد کنید"
            )
          : setemailErr("");
        break;

      default:
        break;
    }
  };

  return (
    <div className="form__container">
      <h4>فرم ثبت شماره تلفن</h4>
      <form>
        <Input
          value={user.name}
          onChange={(e) => {
            setUser((testItem) => ({ ...testItem, name: e.target.value }));
            validationForm("name", user.name);
          }}
          type="text"
          placeholder="نام"
        />
        <span>{nameErr}</span>

        <Input
          value={user.lastname}
          onChange={(e) => {
            setUser((testItem) => ({ ...testItem, lastname: e.target.value }));
            validationForm("lastname", user.lastname);
          }}
          type="text"
          placeholder="نام خانوادگی"
        />
        <span>{lastnameErr}</span>

        <Input
          value={user.phone}
          onChange={(e) => {
            setUser((testItem) => ({ ...testItem, phone: e.target.value }));
            validationForm("phone", user.phone);
          }}
          type="text"
          placeholder="شماره تماس ..."
        />
        <span>{phoneErr}</span>

        <select
          value={user.role}
          onChange={(e) => {
            setUser((testItem) => ({ ...testItem, role: e.target.value }));
          }}
        >
          <option value="default">نسبت</option>
          <option value="family">خانواده</option>
          <option value="friend">دوست</option>
          <option value="teamate">همکار</option>
        </select>
        <span></span>

        <Input
          value={user.email}
          onChange={(e) => {
            setUser((testItem) => ({ ...testItem, email: e.target.value }));
            validationForm("email", user.email);
          }}
          type="text"
          placeholder="ایمیل"
        />
        <span>{emailErr}</span>

        <button
          type="submit"
          onClick={addNumberHandler}
          disabled={
            !(
              user.name &&
              user.lastname &&
              user.phone &&
              user.role !== "default" &&
              user.email
            )
          }
        >
          اضافه کردن
        </button>
      </form>
    </div>
  );
}
