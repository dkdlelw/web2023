import React from 'react';

const portTitle = {
  title: 'SF 작품 소개',
  desc: '각 유명작품들을 소개합니다.',
};
const portText = [
  {
    portImg: './assets/images/port/port_01.png',
    iconImg: './assets/images/member/member01.jpg',
    title: '아이, 로봇',
    desc: '아이작 아시모프(Isaac Asimov)',
  },
  {
    portImg: './assets/images/port/port_02.png',
    iconImg: './assets/images/member/member02.jpg',
    title: '안드로이드는 전기양을 꿈꾸는가?',
    desc: '필립 K. 딕 (Philip K. Dick)',
  },
  {
    portImg: './assets/images/port/port_03.png',
    iconImg: './assets/images/member/member04.jpg',
    title: '스페이스 오디세이 2001',
    desc: '아서 C. 클라크 (Stanley Kubrick)',
  },
  {
    portImg: './assets/images/port/port_04.png',
    iconImg: './assets/images/member/member05.jpg',
    title: '1984',
    desc: '조지 오웰(George Orwell)',
  },
  {
    portImg: './assets/images/port/port_05.png',
    iconImg: './assets/images/member/member06.jpg',
    title: '듄',
    desc: '프랭크 허버트(Frank Herbert)',
  },
  {
    portImg: './assets/images/port/port_06.png',
    iconImg: './assets/images/member/member07.jpg',
    title: '11/22/63',
    desc: '스티븐 킹(Stephen King)',
  },
];

function PortDesc({ portImg, iconImg, title, desc }) {
  return (
    <div className="port">
      <figure className="port__header">
        <img src={portImg} alt={title} />
      </figure>
      <div className="port__body">
        <span className="pic">
          <img src={iconImg} alt={desc} />
        </span>
        <div className="title">
          <h4>{title}</h4>
          <span>{desc}</span>
        </div>
      </div>
    </div>
  );
}
function PortSection(props) {
  return (
    <section id="portSection" className={props.attr}>
      <h3>{portTitle.title}</h3>
      <p>{portTitle.desc}</p>
      <div className="port__inner container">
        <div className="port__btn">
          <ul>
            <li className="active">
              <a href="/">문학</a>
            </li>
            <li>
              <a href="/">애니메이션</a>
            </li>
            <li>
              <a href="/">영화/드라마</a>
            </li>
            <li>
              <a href="/">게임</a>
            </li>
          </ul>
        </div>
        <div className="port__cont">
          {portText.map((text, index) => (
            <PortDesc
              key={index}
              portImg={text.portImg}
              iconImg={text.iconImg}
              title={text.title}
              desc={text.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
export default PortSection;
