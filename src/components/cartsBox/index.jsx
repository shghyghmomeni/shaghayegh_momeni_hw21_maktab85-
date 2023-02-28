import axios from "axios";
import React, { useEffect, useState } from "react";
import Cart from "../cart";
import "./style.css";
export default function CartsBox() {
  const [data, setData] = useState();
  useEffect(() => {
    axios.get("http://localhost:3000/users").then((res) => setData(res.data));
  }, []);

  return (
    <>
      <h3>لیست مخاطبین</h3>
      <div className="box__container">
        {data?.map((item) => (
          <Cart
            key={item.id}
            name={item.name}
            lastname={item.lastname}
            email={item.email}
            phone={item.phone}
            role={item.role}
          />
        ))}
      </div>
    </>
  );
}
