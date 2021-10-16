var images = [
    'РНП1.jpg',
    'РНП2.jpg',
    'РНП3.jpg'
    ];
    var num = 0;
    function nextfoto() {
    var foto = document.getElementById('foto');
    num++;
    if(num >= images.length) {
    num = 0;
    }
    foto.src = images[num];
    }
    function prevfoto() {
    var foto = document.getElementById('foto');
    num--;
    if(num < 0) {
    num = images.length-1;
    }
    foto.src = images[num];
    };
    let audio = document.getElementById("audio");  
    let time = document.querySelector(".time");       
    let btnPlay = document.querySelector(".play");   
    let btnPause = document.querySelector(".pause"); 
    let btnPrev = document.querySelector(".prev");   
    let btnNext = document.querySelector(".next");
    let lp = document.querySelector(".lp");
    let playlist = [
        '111.mp3',
        '333.mp3',
        '222.mp3',
    ];
    let treck; 
    window.onload = function() {
        treck = 0; 
    }
    btnPlay.addEventListener("click", function() {
        audio.play(); 
        audioPlay = setInterval(function() {
            let audioTime = Math.round(audio.currentTime);
            let audioLength = Math.round(audio.duration);
            time.style.width = (audioTime * 100) / audioLength + '%';
            if (audioTime == audioLength && treck < 2) { //колличество треков ручное, длинна не срабатывает 
                treck++;
                audio.src = playlist[treck];
                audio.play();
                } 
                else if (audioTime == audioLength) {
                treck = 0;
                audio.src = playlist[treck];
                audio.play();
                }
        }, 10)
    });
    btnPause.addEventListener("click", function() {
        audio.pause(); 
        clearInterval(audioPlay) 
    });
    btnPrev.addEventListener("click", function() {
        treck--;
        if(treck < 0) {
            treck=2;
        }
        audio.src = playlist[treck];
        audio.play();
    });
    btnNext.addEventListener("click", function() {
        treck++;
        if(treck >= playlist.length) {
            treck = 0;
        }
        audio.src = playlist[treck];
        audio.play();
    })
    