import React, { useState } from "react";
import Title from "./Title";

const Esignature = () => {
  const [name, setName] = useState("");
  const [date, setdate] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleDate = (e) => {
    setdate(e.target.value);
  };

  const inputStyle = {
    border: "none",
    borderBottom: "2px dotted",
    outline: "none",
    padding: ".345rem 0",
  };
  return (
    <div>
      <Title text={!name ? "Name" : name} classes={"subtitle"} />
      <Title text={!date ? "Dob" : date} classes={"subtitle"} />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
        laudantium temporibus sit error facilis ex possimus quasi quaerat
        quidem, tempora dolorem sed! Ratione, nulla officiis quod voluptates
        sint eveniet culpa! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Vero, facilis. Quibusdam quaerat, nihil autem nostrum nulla, sed
        veritatis tempore reprehenderit ratione officiis aut id magni impedit
        tempora distinctio explicabo! Nesciunt.
      </p>
      <footer
        style={{
          display: "flex",
          justifyContent: "space-around",
          position: "relative",
          top: "10vh",
        }}
      >
        <input
          type="date"
          value={date}
          onChange={handleDate}
          style={inputStyle}
        />
        <input
          type="text"
          value={name}
          onChange={handleName}
          style={inputStyle}
        />
      </footer>
    </div>
  );
};

export default Esignature;
