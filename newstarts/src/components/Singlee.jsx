import React from 'react';
import Apple from "./svg/Apple";
import Spotify from "./svg/SpotL";
import Vk from "./svg/Vk";
import Yan from "./svg/Yan";

const Singles = (props) => {
    return (
        <div className="text">
        <div className="post__content">
          {props.single.id} . {props.single.title}
        </div>
        {props.single.body}
        <div className="logos">
          <a href={props.single.spotify} target={"_blank"}>
            <Spotify/>
          </a>
          <a href={props.single.Vk} target={"_blank"}>
            <Vk/>
          </a>
          <a href={props.single.Yandex} target={"_blank"}>
            <Yan/>
          </a>
          <a href={props.single.Apple} target={"_blank"}>
            <Apple/>
          </a>
        </div>
        {props.single.picture}
        Дата выхода: {props.single.date}
      </div>
    );
};

export default Singles;