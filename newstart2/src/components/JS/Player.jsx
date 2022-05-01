import React from 'react';
import Ustal from "../sounds/Ustal.mp3"
import Reactaudio from 'react-audio-player'

const Player = () => {
  return (
    <div class="tabs-albums" id="tabs-1">
                <div class="tabs-albums-select">
                  <div className='Albumschoose'>Альбом</div>
                  <ul class="nav-tabs">
                    <li class="nav-item" role="presentation"><a class="nav-link active" href="#tabs-1-1" data-toggle="tab">Вьюга</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-2" data-toggle="tab">Мы</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-3" data-toggle="tab">Этот день 24</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-4" data-toggle="tab">Этот день (Гитара)</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-5" data-toggle="tab">Свет</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-6" data-toggle="tab">Миг</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-7" data-toggle="tab">Дождь</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-8" data-toggle="tab">Солнечный диск</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-9" data-toggle="tab">Небо</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-10" data-toggle="tab">Глаза</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-11" data-toggle="tab">Место (Укулеле)</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-12" data-toggle="tab">Место (Гитара)</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-13" data-toggle="tab">Когда</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-14" data-toggle="tab">Страшный сон</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-15" data-toggle="tab">Сломанный телефон</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-16" data-toggle="tab">Причины искусства</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-17" data-toggle="tab">Грустные песни о успехах моей жизни</a></li>
                  </ul>
                </div>
                <Reactaudio
             src={Ustal}
               controls
            />
                <div class="tab-content">
                <div class="tab-pane fade show active" id="tabs-1-1">
            <ul class="jp-player-list">
            <li class="jp-player-list-item" data-jp-title="Истень - Вьюга"></li>
            <Reactaudio
             src={Ustal}
               controls
            />
            </ul>
            </div>
            <div class="tab-pane fade show active" id="tabs-1-2">
            <ul class="jp-player-list">
            <li class="jp-player-list-item" data-jp-title="Истень - Мы"></li>
            <Reactaudio
             src={Ustal}
               controls
            />
            </ul>
            </div>
            <div class="tab-pane fade show active" id="tabs-1-3">
            <ul class="jp-player-list">
            <li class="jp-player-list-item" data-jp-title="Истень - Этот день 24"></li>
            <Reactaudio
             src={Ustal}
               controls
            />
            </ul>
            </div>
            <div class="tab-pane fade show active" id="tabs-1-4">
            <ul class="jp-player-list">
            <li class="jp-player-list-item" data-jp-title="Истень - Этот день (Гитара)"></li>
            <Reactaudio
             src={Ustal}
               controls
            />
            </ul>
            </div>
            <div class="tab-pane fade show active" id="tabs-1-5">
            <ul class="jp-player-list">
            <li class="jp-player-list-item" data-jp-title="Истень - Свет"></li>
            <Reactaudio
             src={Ustal}
               controls
            />
            </ul>
            </div>
            <div class="tab-pane fade show active" id="tabs-1-6">
            <ul class="jp-player-list">
            <li class="jp-player-list-item" data-jp-title="Истень - Миг"></li>
            <Reactaudio
             src={Ustal}
               controls
            />
            </ul>
            </div>
            <div class="tab-pane fade show active" id="tabs-1-7">
            <ul class="jp-player-list">
            <li class="jp-player-list-item" data-jp-title="Истень - Дождь"></li>
            <Reactaudio
             src={Ustal}
               controls
            />
            </ul>
            </div>
            <div class="tab-pane fade show active" id="tabs-1-8">
            <ul class="jp-player-list">
            <li class="jp-player-list-item" data-jp-title="Истень - Солнечный диск"></li>
            <Reactaudio
             src={Ustal}
               controls
            />
            </ul>
            </div>
            <div class="tab-pane fade show active" id="tabs-1-9">
            <ul class="jp-player-list">
            <li class="jp-player-list-item" data-jp-title="Истень - Небо"></li>
            <Reactaudio
             src={Ustal}
               controls
            />
            </ul>
            </div>
            <div class="tab-pane fade show active" id="tabs-1-10">
            <ul class="jp-player-list">
            <li class="jp-player-list-item" data-jp-title="Истень - Глаза"></li>
            <Reactaudio
             src={Ustal}
               controls
            />
            </ul>
            </div>
            <div class="tab-pane fade show active" id="tabs-1-11">
            <ul class="jp-player-list">
            <li class="jp-player-list-item" data-jp-title="Истень - Место (Укулеле)"></li>
            <Reactaudio
             src={Ustal}
               controls
            />
            </ul>
            </div>
            <div class="tab-pane fade show active" id="tabs-1-12">
            <ul class="jp-player-list">
            <li class="jp-player-list-item" data-jp-title="Истень - Место (Гитара)"></li>
            <Reactaudio
             src={Ustal}
               controls
            />
            </ul>
            </div> 
            <div class="tab-pane fade show active" id="tabs-1-13">
            <ul class="jp-player-list">
            <li class="jp-player-list-item" data-jp-title="Истень - Когда"></li>
            <Reactaudio
             src={Ustal}
               controls
            />
            </ul>
            </div> 
            <div class="tab-pane fade show active" id="tabs-1-14">
            <ul class="jp-player-list">
            <li class="jp-player-list-item" data-jp-title="Истень - Страшный сон"></li>
            <Reactaudio
             src={Ustal}
               controls
            />
            </ul>
            </div> 
            <div class="tab-pane fade show active" id="tabs-1-15">
            <ul class="jp-player-list">
            <li class="jp-player-list-item" data-jp-title="Истень - Сломанный телефон"></li>
            <Reactaudio
             src={Ustal}
               controls
            />
            </ul>
            </div>
            <div class="tab-pane fade show active" id="tabs-1-16">
            <ul class="jp-player-list">
            <li class="jp-player-list-item" data-jp-title="Истень - Причины искусства"></li>
            <Reactaudio
             src={Ustal}
               controls
            />
            </ul>
            </div>
            <div class="tab-pane fade show active" id="tabs-1-17">
            <ul class="jp-player-list">
            <li class="jp-player-list-item" data-jp-title="Истень - Грустные песни о успехах моей жизни"></li>
            <Reactaudio
             src={Ustal}
               controls
            />
            </ul>
            </div>

            



</div>
</div>




                
  );
};

export default Player;