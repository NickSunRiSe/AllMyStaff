import React, { useState } from "react";
import "../src/index";
import End from "./components/End";
import Image1 from "./components/images/Picture1";
import Image2 from "./components/images/Picture2";
import Image3 from "./components/images/Picture3";
import Singlee from "./components/Singlee";
import Text1 from "./components/Text1";
import Text2 from "./components/Text2";
import Image4 from "./components/images/Vuga";
import Image5 from "./components/images/We";
import Image6 from "./components/images/Td";
import Image7 from "./components/images/Td2";
import Image8 from "./components/images/Light";

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
      body: "Альбом который на данный момент является самым большим во всей дискрографии Истень по количеству треков, а так же первый альбом который почти полностью состоял из не изданных ранее песен",
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
      title: "Вьюга",
      body: "Трек который потом вышел как часть альбома Грустные песни о успехах моей жизни",
      date: "2020-02-05",
      spotify:
        "https://open.spotify.com/album/4dPZvHZslBHYOYjk2AiKW9?si=1wad1c6bRmS21LjqhYYClA",
      Vk: "https://vk.com/music/album/-2000484574_7484574_2c6a87c785875f1241",
      Yandex: "https://music.yandex.ru/album/10697685",
      Apple:
        "https://music.apple.com/ru/album/%D0%B2%D1%8C%D1%8E%D0%B3%D0%B0-live-single/1512717310",
      picture: <Image4 />,
    },
    {
      id: 2,
      title: "Мы",
      body: "Сингл вышедший ко дню всех влюблённых, единственный сингл Истень, который вышел к какому либо празднику",
      date: "2020-02-14",
      spotify:
        "https://open.spotify.com/album/1EHbwx01f4IzJPbPfLJHTh?si=yEA-U4WcRZ-lUT5fv_6_2g",
      Vk: "https://vk.com/music/album/-2000773300_6773300_451bbc67ca36f0b64e",
      Yandex: "https://music.yandex.ru/album/9969550",
      Apple:
        "https://music.apple.com/ru/album/%D0%BC%D1%8B-live-single/1499823924",
      picture: <Image5/>,
    },
    {
      id: 3,
      title: "Этот день 24",
      body: "ЕР на укулеле состоящий из трёх песен, которые составляют одну целую историю",
      date: "2020-02-24",
      spotify:
        "https://open.spotify.com/album/0om9wxRlwabDGQj8lA82Nk?si=WG-Tych8Q5SeSeBOVPx5KQ",
      Vk: "https://vk.com/music/album/-2000834406_6834406_5d0f8ea7ee8a3202b0",
      Yandex: "https://music.yandex.ru/album/10043905",
      Apple:
        "https://music.apple.com/ru/album/%D1%8D%D1%82%D0%BE%D1%82-%D0%B4%D0%B5%D0%BD%D1%8C-24-live-single/1501031273",
      picture: <Image6 />,
    },
    {
      id: 4,
      title: "Этот день (Гитара)",
      body: "Тот же Этот день 24, только на гитаре",
      date: "2020-03-07",
      spotify:
        "https://open.spotify.com/album/3lZzvMcX80Heyu6fCZgMLO?si=IdKXfIDSTPq1rMCS5qJN_Q",
      Vk: "https://vk.com/music/album/-2000887293_6887293_f70f3773483d08e2b2",
      Yandex: "https://music.yandex.ru/album/10105803",
      Apple:
        "https://music.apple.com/ru/album/%D1%8D%D1%82%D0%BE%D1%82-%D0%B4%D0%B5%D0%BD%D1%8C-%D0%B3%D0%B8%D1%82%D0%B0%D1%80%D0%B0-live-single/1502012740",
      picture: <Image7 />,
    },
    {
      id: 5,
      title: "Свет",
      body: "Один из первых полноценных синглов",
      date: "2020-04-04",
      spotify:
        "https://open.spotify.com/album/4FCwu470TBXDjFeHKljhBZ?si=-7LKu5jNS1WeYUkcqLDkiA",
      Vk: "https://vk.com/music/album/-2000205778_7205778_bde069d2b2680bdc07",
      Yandex: "https://music.yandex.ru/album/10432056",
      Apple:
        "https://music.apple.com/ru/album/%D1%81%D0%B2%D0%B5%D1%82-live-single/1507980438",
      picture: <Image8 />,
    },
  ]);

  return (
    <div className="con">
      <Text1 />
      <h1 style={{ textAlign: "center" }}>Список альбомов</h1>
      {posts.map((post) => 
        <Text2 post={post} key={post.id} />
      )}
      <h1 style={{ textAlign: "center" }}>Список синглов и ЕР*</h1>
      {singles.map((single) => 
        <Singlee single={single} key={single.id} />
      )}
      <End />
    </div>
  );
}

export default App;
