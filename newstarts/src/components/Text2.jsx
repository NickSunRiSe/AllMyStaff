import React from "react";
import classes from "./Text2.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSpotify,
  faVk,
  faYandex,
  faApple,
} from "@fortawesome/free-brands-svg-icons";

const Text2 = (props) => {
  library.add(faSpotify, faVk, faYandex, faApple);

  return (
    <div className={classes.teht}>
      {props.post.id} . {props.post.title} <br />
      {props.post.body}
      <div className="logosfoto">
        <div className="logos">
          <a
            href={props.post.spotify}
            className="links"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faSpotify} size="4x" />
          </a>
          <a
            href={props.post.Vk}
            className="links"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faVk} size="4x" />
          </a>
          <a
            href={props.post.Yandex}
            className="links"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faYandex} size="4x" />
          </a>
          <a
            href={props.post.Apple}
            className="links"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faApple} size="4x" />
          </a>
        </div>
        {props.post.picture}
      </div>
      <div className="dataa">Дата релиза: {props.post.date}</div>
    </div>
  );
};

export default Text2;
