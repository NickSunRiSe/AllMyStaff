import React from "react";
import End from "../End";
import Header from "../Header";

const Contacts = () => {
  return (
    <div className="con">
      <Header />
      <h1>Контакты</h1>
      По вопросам сотрудничества и предложений пишите и обращайтесь на почту.
      <br />
      <div className="ContactsLine">
      <div className="contact1">
        Все коммерческие предложения <br />
        istenoff@gmail.com <br />
        Рассветов Никита <br />
      </div>
      <div className="contact1">
        Обращения с дополнительными вопросами <br />
        istenoff@gmail.com <br />
        Рассветов Никита <br />
      </div>
      <div className="contact1">
        Обращения напрямую к Истень <br />
        https://vk.com/nicksunrise <br />
        Рассветов Никита <br />
      </div>
      </div>
      <End />
    </div>
  );
};

export default Contacts;
