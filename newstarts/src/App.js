import React, {useState} from "react";
import '../src/index';
import End from "./components/End";
import Start from "./components/Start";
import Text1 from "./components/Text1";
import Text2 from "./components/Text2";


function App() {
  const [posts, setPosts] = useState ([
    {id: 1, title:'Сборник 1: Сломанный телефон', body:'Первый полноценный альбом, который является по сути всего лишь сборником вышедших на тот момент песен'},
    {id: 2, title:'Причины искусства', body:'Второй полноформатный альбом вышедший через полтора года после первого и также вместивший много песен вышедших ранее'},
    {id: 3, title:'Грустные песни о успехах моей жизни', body:'Альбом вышедший в начале 2022 года'},
  ])



  return(
     <div className="con">
      <Start/>
      <Text1/>
      <h1 style={{textAlign:"center"}}>Список альбомов</h1>
      {posts.map(post =>
      <Text2 post = {post} key={post.id}/>

      )}
      <End/>
     </div>
    
  );
}

export default App;
