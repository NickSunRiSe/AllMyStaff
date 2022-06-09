import React from 'react';

const Header = () => {
    return (
        <header class="header">
        <audio id="audio" type="audio/mpeg">
          <source src="C:\Users\Некит\Desktop\hjvfy\САЙТ\Портфолио\Классика\Assets\sounds\111.mp3" />
          <source src="C:\Users\Некит\Desktop\hjvfy\САЙТ\Портфолио\Классика\Assets\sounds\222.mp3" />
          <source src="C:\Users\Некит\Desktop\hjvfy\САЙТ\Портфолио\Классика\Assets\sounds\333.mp3" />
        </audio>
        <div class="audio__track"> </div>
        <a class="audio__play">&#9655;</a>
        <a class="audio__pause">&#9723;</a>
        <a class="audio__next" onclick="next_track()">&#8811;</a>
        <a class="audio__prev" onclick="prev_track()">&#8810;</a>
        <div class="audio__line"><div class="audio__time"></div></div>
      </header>
    );
};

export default Header;