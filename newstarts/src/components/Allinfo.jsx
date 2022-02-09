import React, { useState } from "react";
import "../index.css";
import End from "./End";
import Image1 from "./images/Picture1";
import Image2 from "./images/Picture2";
import Image3 from "./images/Picture3";
import Singlee from "./Singlee";
import Text1 from "./Text1";
import Text2 from "./Text2";
import Image4 from "./images/Vuga";
import Image5 from "./images/We";
import Image6 from "./images/Td";
import Image7 from "./images/Td2";
import Image8 from "./images/Light";
import Image9 from "./images/Mig";
import Image10 from "./images/Rain";
import Image11 from "./images/Sundisc";
import Image12 from "./images/Sky";
import Image13 from "./images/Eyes";
import Image14 from "./images/PlaceU";
import Image15 from "./images/PlaceG";
import Image16 from "./images/When";
import Image17 from "./images/Nightmare";
import Text3 from "./Text3";

const Allinfo = () => {
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
      body: "Одна из ранних песен, которая долгое время была только в ВК, позже была добавлена на все площадки",
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
      picture: <Image5 />,
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
    {
      id: 6,
      title: "Миг",
      body: "Песня написанная за один день и записанная сразу, так же в самом конце есть небольшой эмбиент, очень особенная песня",
      date: "2020-04-28",
      spotify:
        "https://open.spotify.com/album/3FpFnjv2blmpokSrdjqSH1?si=FkUJrcCGQfG_-cyhY7OaVg",
      Vk: "https://vk.com/music/album/-2000354095_7354095_bc188442a4005f1610",
      Yandex: "https://music.yandex.ru/album/10574071",
      Apple:
        "https://music.apple.com/ru/album/%D0%BC%D0%B8%D0%B3-single/1510549707",
      picture: <Image9 />,
    },
    {
      id: 7,
      title: "Дождь",
      body: "Песня в двух вариантах, на гитаре и укулеле, которая долгое время на многих площадках является самой прослушиваемой из всех",
      date: "2020-05-16",
      spotify:
        "https://open.spotify.com/album/2i2DjqgnXZnUMn1AI0vsxc?si=EzYOx3rfQRqpGC028N0KiQ",
      Vk: "https://vk.com/music/album/-2000551582_7551582_5750aa43f3bcb35f50",
      Yandex: "https://music.yandex.ru/album/10765729",
      Apple:
        "https://music.apple.com/ru/album/%D0%B4%D0%BE%D0%B6%D0%B4%D1%8C-live-single/1513786182",
      picture: <Image10 />,
    },
    {
      id: 8,
      title: "Солнечный диск",
      body: "ЕР из трёх треков, являлся одним из самых популярных ЕР во всей дискографии на протяжении долгого времени",
      date: "2020-06-13",
      spotify:
        "https://open.spotify.com/album/13yv1wTJJsmGiwHoTxixo6?si=CgSSAcqqRdi2sv__ewQ2yw",
      Vk: "https://vk.com/music/album/-2000802901_7802901_e66147b73bfeeb6230",
      Yandex: "https://music.yandex.ru/album/11064391",
      Apple:
        "https://music.apple.com/ru/album/%D1%81%D0%BE%D0%BB%D0%BD%D0%B5%D1%87%D0%BD%D1%8B%D0%B9-%D0%B4%D0%B8%D1%81%D0%BA-live-single/1518276215",
      picture: <Image11 />,
    },
    {
      id: 9,
      title: "Небо",
      body: "Песня эксперимент, который удался",
      date: "2020-06-27",
      spotify:
        "https://open.spotify.com/album/1nYRYiMzGG0M0Qp00HdShT?si=SEdYZ-FLSV-qiqKk_qr6ZQ",
      Vk: "https://vk.com/music/album/-2000929736_7929736_3e565cc26c43c17741",
      Yandex: "https://music.yandex.ru/album/11232883",
      Apple:
        "https://music.apple.com/ru/album/%D0%BD%D0%B5%D0%B1%D0%BE-live-single/1520925582",
      picture: <Image12 />,
    },
    {
      id: 10,
      title: "Глаза",
      body: "Одна из моих любимых песен моего производства, доказательство самому себе, что я могу сделать что-то хорошее",
      date: "2020-07-16",
      spotify:
        "https://open.spotify.com/album/3neP7w26CkizfwL4QDt2jK?si=_IkgZELBTdO4xFBT_-b2sg",
      Vk: "https://vk.com/music/album/-2000105156_8105156_749f9480d17e47938b",
      Yandex: "https://music.yandex.ru/album/11433024",
      Apple:
        "https://music.apple.com/ru/album/%D0%B3%D0%BB%D0%B0%D0%B7%D0%B0-live-single/1523625671",
      picture: <Image13 />,
    },
    {
      id: 11,
      title: "Место (Укулеле)",
      body: "ЕР из четырёх треков, ставший последней работой на укулеле в моём творчестве и по совместительству, самой популярной моей работой в Вконтакте по количеству прослушиваний",
      date: "2020-08-06",
      spotify:
        "https://open.spotify.com/album/4ZFARLrzwnO6VUiDhWuyAq?si=WIqXLDL2Q2ejVUf8OQ5LvQ",
      Vk: "https://vk.com/music/album/-2000309725_8309725_e28937fe6be49659eb",
      Yandex: "https://music.yandex.ru/album/11684590",
      Apple:
        "https://music.apple.com/ru/album/%D0%BC%D0%B5%D1%81%D1%82%D0%BE-%D1%83%D0%BA%D1%83%D0%BB%D0%B5%D0%BB%D0%B5-live-ep/1526423961",
      picture: <Image14 />,
    },
    {
      id: 12,
      title: "Место (Гитара)",
      body: "Гитарная версия самого популярного ЕР в моём творчестве",
      date: "2020-08-06",
      spotify:
        "https://open.spotify.com/album/0xWGO6GkFbI3anHZH9qCBY?si=pYWvutfNQlCSZfjQNikICA",
      Vk: "https://vk.com/music/album/-2000309733_8309733_44cacd16c65c2eec43",
      Yandex: "https://music.yandex.ru/album/11684587",
      Apple:
        "https://music.apple.com/ru/album/%D0%BC%D0%B5%D1%81%D1%82%D0%BE-%D0%B3%D0%B8%D1%82%D0%B0%D1%80%D0%B0-live-ep/1526424187",
      picture: <Image15 />,
    },
    {
      id: 13,
      title: "Когда",
      body: "Первый и последний ЕР вышедший в 21 году, написанные за одну ночь две песни, которые стали чем то особенным",
      date: "2021-10-04",
      spotify:
        "https://open.spotify.com/album/1RLA1ZXQL874FSEfJjy1by?si=i0u2vn7dSnCpo9c-xH7OKg",
      Vk: "https://vk.com/music/album/-2000209785_13209785_696e8cd3d868d5e8d8",
      Yandex: "https://music.yandex.ru/album/18531933",
      Apple:
        "https://music.apple.com/ru/album/%D0%BA%D0%BE%D0%B3%D0%B4%D0%B0-single/1588795714",
      picture: <Image16 />,
    },
    {
      id: 14,
      title: "Страшный сон",
      body: "Песня, которая позже, стала частью альбома Грустные песни о успехах моей жизни",
      date: "2021-10-31",
      spotify:
        "https://open.spotify.com/album/1jPDXUyJtMDBBUN6knga77?si=XdWlBQowQRWuKEnZmmYmwg",
      Vk: "https://vk.com/music/album/-2000517944_13517944_3d9e20b0f9e0e9afe9",
      Yandex: "https://music.yandex.ru/album/19093753",
      Apple:
        "https://music.apple.com/ru/album/%D1%81%D1%82%D1%80%D0%B0%D1%88%D0%BD%D1%8B%D0%B9-%D1%81%D0%BE%D0%BD-single/1592952461",
      picture: <Image17 />,
    },
  ]);

  return (
    <div className="con">
      <Text1 />
      <Text3/>
      <h1 style={{ textAlign: "center" }}>Список альбомов</h1>
      {posts.map((post) => (
        <Text2 post={post} key={post.id} />
      ))}
      <h1 style={{ textAlign: "center" }}>Список синглов и ЕР</h1>
      {singles.map((single) => (
        <Singlee single={single} key={single.id} />
      ))}
      <End />
    </div>
  );
};
export default Allinfo;
