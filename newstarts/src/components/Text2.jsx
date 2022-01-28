import React from "react";
import Apple from "./svg/Apple";
import Spotify from "./svg/SpotL";
import Vk from "./svg/Vk";
import Yan from "./svg/Yan";
import classes from "./Text2.module.css";

const Text2 = (props) => {
  return (
    <div className={classes.teht}>
      <div className="post__content">
        {props.post.id} . {props.post.title}
      </div>
      {props.post.body}
      <div className="logosfoto">
      <div className="logos">
        <a href={props.post.spotify} target={"_blank"} className="links">
          <Spotify />
        </a>
        <a href={props.post.Vk} target={"_blank"} className="links">
          <Vk />
        </a>
        <a href={props.post.Yandex} target={"_blank"} className="links">
          <Yan />
        </a>
        <a href={props.post.Apple} target={"_blank"} className="links">
          <Apple />
        </a>
      </div>
      {props.post.picture}
      </div>
      <div className="dataa">Дата выхода: {props.post.date}</div>
    </div>
  );
};

export default Text2;
