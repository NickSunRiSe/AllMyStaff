import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVk,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
//sdasd
const End = () => {
  return (
    <footer class="End">
      <div className="End__Text1">
      Контакты <br/>
        <br/>
        Рассветов Никита <br/>
        https://vk.com/nicksunrise <br/>
        istenoff@gmail.com<br/>
        </div>
        <div className="End__Text2">
        <a
            href={"https://vk.com/nicksunrise"}
            className="Vk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faVk} size="5x" />
           </a>
            <a
            href={"https://github.com/NickSunRiSe"}
            className="Vk"
            target="_blank"
            rel="noopener noreferrer"
          >
          <FontAwesomeIcon icon={faGithub} size="5x" />
          </a>
          </div>
          
      <div className="End__Text3">
        2022 <br />
        Завхоз Инкорпарейтед <br />
        Сратов, РА СИ Я. <br />
      </div>
    </footer>
  );
};

export default End;
