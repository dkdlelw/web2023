import React from 'react';

const memberTitle = {
  title: 'SF 장르 작가 & 영화감독 소개',
  desc: 'SF에서 유명한 작가와 감독들을 소개합니다.',
};
const memberText = [
  {
    img: './assets/images/member/member01.jpg',
    title: '아이작 아시모프 (Isaac Asimov)',
    link: '작품 보기',
  },
  {
    img: './assets/images/member/member02.jpg',
    title: '필립 K. 딕 (Philip K. Dick)',
    link: '작품 보기',
  },
  {
    img: './assets/images/member/member03.jpg',
    title: '스탠리 큐브릭 (Stanley Kubrick)',
    link: '작품 보기',
  },
];

function MemberDesc({ img, title, link }) {
  return (
    <div className="member">
      <figure className="member__header">
        <img src={img} alt={title} />
      </figure>
      <div className="member_body">
        <h4>{title}</h4>
        <a href={link} className="btn">
          작품보기
        </a>
      </div>
    </div>
  );
}
function MemberSection(props) {
  return (
    <section id="memberSection" className={props.attr}>
      <h3>{memberTitle.title}</h3>
      <p>{memberTitle.desc}</p>
      <div className="member__inner container">
        {memberText.map((text, index) => (
          <MemberDesc
            key={index}
            img={text.img}
            title={text.title}
            desc={text.link}
          />
        ))}
        ;
      </div>
    </section>
  );
}
export default MemberSection;
