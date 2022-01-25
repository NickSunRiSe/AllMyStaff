import React from "react";
import Apple from "./svg/Apple";
import Spotify from "./svg/SpotL";
import Vk from "./svg/Vk";
import Yan from "./svg/Yan";
import classes from './Text2.module.css'


const Text2 = (props) => {
  return (
    <div className={classes.teht}>
      <div className="post__content">
        {props.post.id} . {props.post.title}
      </div>
      {props.post.body}
      <div className="logos">
        <a href={props.post.spotify} target={"_blank"}>
          <Spotify/>
        </a>
        <a href={props.post.Vk} target={"_blank"}>
          <Vk/>
        </a>
        <a href={props.post.Yandex} target={"_blank"}>
          <Yan/>
        </a>
        <a href={props.post.Apple} target={"_blank"}>
          <Apple/>
        </a>
      </div>
      {props.post.picture}
      Дата выхода: {props.post.date}
    </div>
  );
};

export default Text2;
