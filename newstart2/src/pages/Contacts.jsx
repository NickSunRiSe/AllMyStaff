import React from "react";
import End from "../End";
import Header from "../Header";

const Contacts = () => {
  return (
    <div className="con">
      <Header />
      <div className="Zag1">КОНТАКТЫ</div>
      <div className="te">По вопросам сотрудничества и предложений пишите и обращайтесь на почту.</div>
      <br />
      <div className="ContactsLine">
      <div className="contact1">
        <div className="zag1">все коммерческие<br /> предложения</div> <br />
        istenoff@gmail.com <br />
        Рассветов Никита <br />
      </div>
      <div className="contact1">
      <div className="zag1">обращения <br />с дополнительными<br /> вопросами</div> <br />
        istenoff@gmail.com <br />
        Рассветов Никита <br />
      </div>
      <div className="contact1">
      <div className="zag1">обращения<br /> напрямую к Истень</div> <br />
        https://vk.com/nicksunrise <br />
        Рассветов Никита <br />
      </div>
      </div>
      <End />
    </div>
  );
};

export default Contacts;
