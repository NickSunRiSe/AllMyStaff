import React from "react";

function App() {
  return(
    <div className="con">
      <header className="up"> 
        Истень
        <button class="play" type="button"></button>
        <button class="pause" type="button"></button>
        <button class="prev" type="button"></button>
        <button class="next" type="button"></button>
        <div class="audio-track"></div>
        <div class="time"></div>
        </header>
       <div class="left">
        <p>
          Это сайт посвещён творчеству исполнителя Истень <br />
          Моё имя Никита Рассветов и я Истень! <br />
          Тут находится вся основная информация про мою группу,<br />
          а также полная дискография со всеми песнями вышедшими на площадки<br />
        </p>
      </div>
      <footer class="end">
      <hr />
      <p>
        2022 <br />
        Завхоз Инкорпарейтед <br />
        Сратов, РА СИ Я. <br />
      </p>
    </footer>
    
    </div>
  );
}

export default App;
