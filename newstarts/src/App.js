import React, { useState } from "react";
import "../src/index";
import End from "./components/End";
import Image1 from "./components/Picture1";
import Image2 from "./components/Picture2";
import Image3 from "./components/Picture3";
import Start from "./components/Start";
import Text1 from "./components/Text1";
import Text2 from "./components/Text2";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Сборник 1: Сломанный телефон",
      body: "Первый полноценный альбом, который является по сути всего лишь сборником вышедших на тот момент песен",
      picture: <Image1 />,
    },
    {
      id: 2,
      title: "Причины искусства",
      body: "Второй полноформатный альбом вышедший через полтора года после первого и также вместивший много песен вышедших ранее",
      picture: <Image2 />,
    },
    {
      id: 3,
      title: "Грустные песни о успехах моей жизни",
      body: "Альбом который на данный момент является самым большим во всей дискрографии Истень по количеству треков",
      picture: <Image3 />,
    },
  ]);
  const [singles, setSingles] = useState([
    {
      Name: "Страшный сон",
      body: "Трек который потом вышел как альбом",
      picture: <Image1 />,
    },
  ]);

  return (
    <div className="con">
      <Start />
      <Text1 />
      <h1 style={{ textAlign: "center" }}>Список альбомов</h1>
      {posts.map((post) => (
        <Text2 post={post} key={post.id} />
      ))}

      <End />
    </div>
  );
}

export default App;
