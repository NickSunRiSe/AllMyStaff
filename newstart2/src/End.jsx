import React from "react";
import Endlinks from "./Endlinks";
import EyesF from "./components/images/ISten.jpg";

const End = () => {
  return (
    <footer class="end">
      <img className="Iste" src={EyesF}></img>
      <div className="endtext1">
        Контакты <br/>
        <br/>
        Рассветов Никита <br/>
        https://vk.com/nicksunrise <br/>
        istenoff@gmail.com<br/>
        </div>
      <div className="endtext2">
        <Endlinks />
        <br />
      </div>
      <div className="endtext3">
        2022 <br />
        Завхоз Инкорпарейтед <br />
        Сратов, РА СИ Я. <br />
      </div>
    </footer>
  );
};

export default End;
