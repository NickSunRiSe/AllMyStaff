import React from 'react';
import Apple from "./svg/Apple";
import Spotify from "./svg/SpotL";
import Vk from "./svg/Vk";
import Yan from "./svg/Yan";
import classes from "./Text2.module.css";

const Singles = (props) => {
    return (
      <div className={classes.teht}>
          {props.single.id} . {props.single.title} <br/>
        {props.single.body}
        <div className="logosfoto">
        <div className="logos">
          <a href={props.single.spotify} target={"_blank"} className="links">
            <Spotify/>
          </a>
          <a href={props.single.Vk} target={"_blank"} className="links">
            <Vk/>
          </a>
          <a href={props.single.Yandex} target={"_blank"} className="links">
            <Yan/>
          </a>
          <a href={props.single.Apple} target={"_blank"} className="links">
            <Apple/>
          </a>
          </div>
      {props.single.picture}
      </div>
      <div className="dataa">Дата релиза: {props.single.date}</div>
    </div>
    );
};

export default Singles;