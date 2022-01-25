import React, { useState } from "react";
import "../src/index";
import End from "./components/End";
import Image1 from "./components/images/Picture1";
import Image2 from "./components/images/Picture2";
import Image3 from "./components/images/Picture3";
import Singlee from "./components/Singlee";
import Text1 from "./components/Text1";
import Text2 from "./components/Text2";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Сборник 1: Сломанный телефон",
      body: "Первый полноценный альбом, который является по сути всего лишь сборником вышедших на тот момент песен",
      date: "2020-01-18",
      spotify:
        "https://open.spotify.com/album/71qVPxVAsNKGMSJZr9tFTr?si=Ib87m1M9TliUIOyFyu-C7Q",
      Vk: "https://vk.com/music/album/-2000710908_6710908_3955b575cc9561fda2",
      Yandex: "https://music.yandex.ru/album/9736742",
      Apple:
        "https://music.apple.com/us/album/%D1%81%D0%B1%D0%BE%D1%80%D0%BD%D0%B8%D0%BA-1-%D1%81%D0%BB%D0%BE%D0%BC%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9-%D1%82%D0%B5%D0%BB%D0%B5%D1%84%D0%BE%D0%BD-live/1498365925",
      picture: <Image1 />,
    },
    {
      id: 2,
      title: "Причины искусства",
      body: "Второй полноформатный альбом вышедший через полтора года после первого и также вместивший много песен вышедших ранее",
      date: "2021-06-26",
      spotify:
        "https://open.spotify.com/album/2I3rLbkC1KTlHzSWrYJkXG?si=183vuUoATYuyOVaAdAnf8w",
      Vk: "https://vk.com/music/album/-2000092909_12092909_f2d1bec14a31843b32",
      Yandex: "https://music.yandex.ru/album/16513805",
      Apple:
        "https://music.apple.com/us/album/%D0%BF%D1%80%D0%B8%D1%87%D0%B8%D0%BD%D1%8B-%D0%B8%D1%81%D0%BA%D1%83%D1%81%D1%81%D1%82%D0%B2%D0%B0/1574058350",
      picture: <Image2 />,
    },
    {
      id: 3,
      title: "Грустные песни о успехах моей жизни",
      body: "Альбом который на данный момент является самым большим во всей дискрографии Истень по количеству треков",
      date: "2022-01-20",
      spotify:
        "https://open.spotify.com/album/3nxORQNKqPjc1ek2DKHyzF?si=ll-3oRp_SBe7CYdiCcv2Gw",
      Vk: "https://vk.com/music/album/-2000379399_14379399_4b18ef5b9a6aea30d7",
      Yandex: "https://music.yandex.ru/album/20668896",
      Apple:
        "https://music.apple.com/ru/album/%D0%B3%D1%80%D1%83%D1%81%D1%82%D0%BD%D1%8B%D0%B5-%D0%BF%D0%B5%D1%81%D0%BD%D0%B8-%D0%BE-%D1%83%D1%81%D0%BF%D0%B5%D1%85%D0%B0%D1%85-%D0%BC%D0%BE%D0%B5%D0%B9-%D0%B6%D0%B8%D0%B7%D0%BD%D0%B8/1605454428",
      picture: <Image3 />,
    },
  ]);
  const [singles, setSingle] = useState([
    {
      id: 1,
      title: "Страшный сон",
      body: "Трек который потом вышел как альбом",
      date: "2022-01-20",
      spotify:
        "https://open.spotify.com/album/2I3rLbkC1KTlHzSWrYJkXG?si=183vuUoATYuyOVaAdAnf8w",
      Vk: "https://vk.com/music/album/-2000092909_12092909_f2d1bec14a31843b32",
      Yandex: "https://music.yandex.ru/album/16513805",
      Apple:
        "https://music.apple.com/us/album/%D0%BF%D1%80%D0%B8%D1%87%D0%B8%D0%BD%D1%8B-%D0%B8%D1%81%D0%BA%D1%83%D1%81%D1%81%D1%82%D0%B2%D0%B0/1574058350",
      picture: <Image1 />,
    },
  ]);

  return (
    <div className="con">
      <Text1 />
      <h1 style={{ textAlign: "center" }}>Список альбомов</h1>
      {posts.map((post) => 
        <Text2 post={post} key={post.id} />
      )}
      <h1 style={{ textAlign: "center" }}>Список синглов*</h1>
      <div>* В данном списке используются официальные даты релизов синглов</div>
      {singles.map((single) => 
        <Singlee single={single} key={single.id} />
      )}
      <End />
    </div>
  );
}

export default App;
