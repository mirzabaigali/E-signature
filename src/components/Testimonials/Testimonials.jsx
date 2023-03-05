import React, { useEffect, useState } from "react";
import Title from "../Title";
import Button from "./Button";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    handleClick();
  }, [testimonials]);
  const handleClick = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/${testimonials}`
    );
    const data = await res.json();
    setItems(data);
  };

  return (
    <div>
      <Title text={"Testimonials"} />
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button
          text={"Posts"}
          btnText={"btnText"}
          icon={<BsFillFileEarmarkPostFill />}
          onclick={() => setTestimonials("posts")}
        />
        <Button
          text={"Users"}
          btnText={"btnText"}
          icon={<FaUserAlt />}
          onclick={() => setTestimonials("users")}
        />
        <Button
          text={"Comments"}
          btnText={"btnText"}
          icon={<BiCommentDetail />}
          onclick={() => setTestimonials("comments")}
        />
      </div>
      <Title
        text={!testimonials ? "Select from above!" : testimonials}
        classes={"color"}
      />
      {!items
        ? null
        : items.map((item) => {
            let { id, body, name, title } = item;
            return (
              <div key={id} className="cardBox">
                <p>
                  {name && (
                    <div className="cardBox card-cardBox">
                      <h2>{name}</h2>
                    </div>
                  )}
                  <div>
                    <h4>{title}</h4>
                    <p>{body}</p>
                  </div>
                </p>
              </div>
            );
          })}
    </div>
  );
};

export default Testimonials;
