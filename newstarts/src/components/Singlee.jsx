import React from 'react';
import classes from "./Text2.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSpotify,
  faVk,
  faYandex,
  faApple
} from '@fortawesome/free-brands-svg-icons';

const Singles = (props) => {
  library.add(
    faSpotify,
    faVk,
    faYandex,
    faApple
  );
    return (
      <div className={classes.teht}>
          {props.single.id} . {props.single.title} <br/>
        {props.single.body}
        <div className="logosfoto">
        <div className="logos">
        <a href={props.single.spotify} className="links" target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon icon={faSpotify} size='4x' />
</a>
<a href={props.single.Vk} className="links" target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon icon={faVk} size='4x' />
</a>
<a href={props.single.Yandex} className="links" target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon icon={faYandex} size='4x' />
</a>
<a href={props.single.Apple} className="links" target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon icon={faApple} size='4x' />
</a>
          </div>
      {props.single.picture}
      </div>
      <div className="dataa">Дата релиза: {props.single.date}</div>
    </div>
    );
};

export default Singles;