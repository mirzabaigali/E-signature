import React, { useState } from "react";
import Title from "../Title";
import doggy from "../img/doggy.jpg";
import {
  AiFillHeart,
  AiFillSmile,
  AiOutlineHeart,
  AiOutlineComment,
} from "react-icons/ai";
const LikePhoto = () => {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);
  const handleLike = () => {
    if (!like) {
      setLike(true);
      setCount(count + 1);
    } else {
      setLike(false);
      setCount(count - 1);
    }
  };
  return (
    <div>
      <Title text={"LikeMyPhoto"} />
      <h2>Likes {count}</h2>
      <div className="cardWrapper">
        <div class="card">
          <img src={doggy} alt="Profile" />
          <h1>
            <AiFillSmile style={{ color: "blue" }} />
            johndoe
          </h1>
          <p>Web Developer</p>
          <ul>
            <li>
              <strong>2,000</strong> posts
            </li>
            <li>
              <strong>10,000</strong> followers
            </li>
            <li>
              <strong>1,000</strong> following
            </li>
          </ul>
          <footer className="card-footer">
            <AiOutlineComment />
            {like ? (
              <AiFillHeart style={{ color: "red" }} onClick={handleLike} />
            ) : (
              <AiOutlineHeart onClick={handleLike} />
            )}
          </footer>
        </div>
      </div>
    </div>
  );
};

export default LikePhoto;
