import React from 'react';
import Apple from "./svg/Apple";
import Spotify from "./svg/SpotL";
import Vk from "./svg/Vk";
import Yan from "./svg/Yan";

const Singles = (props) => {
    return (
        <div className="text">
        <div className="post__content">
          {props.singles.id} . {props.singles.title}
        </div>
        {props.singles.body}
        <div className="logos">
          <a href={props.singles.spotify} target={"_blank"}>
            <Spotify/>
          </a>
          <a href={props.singles.Vk} target={"_blank"}>
            <Vk/>
          </a>
          <a href={props.singles.Yandex} target={"_blank"}>
            <Yan/>
          </a>
          <a href={props.singles.Apple} target={"_blank"}>
            <Apple/>
          </a>
        </div>
        {props.singles.picture}
        Дата выхода: {props.singles.date}
      </div>
    );
};

export default Singles;