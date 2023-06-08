import React from 'react';

const youtubeTitle = {
  title: '관련 유튜브 추천',
  desc: (
    <p>
      SF와 관련된 주제를 다룬 유튜브를 추천합니다.
      <br />
      썸네일을 누르시면 해당 유튜브로 이동합니다.
    </p>
  ),
};
const youtubeItem = [
  {
    img: './assets/images/youtube/youtube01.jpg',
    title: 'SF 작품, "지구 제국"의 등장을 예고하고 있다?',
    num: 'dkelkt442',
  },
  {
    img: './assets/images/youtube/youtube02.jpg',
    title: '사이버펑크란 무엇인가? 간략한 역사',
    num: 'dkelkt442',
  },
  {
    img: './assets/images/youtube/youtube03.jpg',
    title: '스팀펑크에 대해 알아보자 (빅토리아, 벨에포크 시대)',
    num: 'dkelkt442',
  },
  {
    img: './assets/images/youtube/youtube04.jpg',
    title: '1902년에 만들어진 세계 최초의 SF영화 [영화리뷰 스토리편]',
    num: 'dkelkt442',
  },
];

function YoutubeDesc({ img, title }) {
  return (
    <div>
      <img src={img} alt={title} />
    </div>
  );
}
function YoutubeSection(props) {
  return (
    <section id="youtubeSection" className={props.attr}>
      <div className="youtube__inner">
        <div className="youtube__text container">
          <h3>{youtubeTitle.title}</h3>
          <>{youtubeTitle.desc}</>
          <a href="/" className="button-red">
            자세히 보기
          </a>
          <div class="youtube__item">
            {youtubeItem.map((item, index) => (
              <YoutubeDesc key={index} img={item.img} />
            ))}
            ;
          </div>
        </div>
      </div>
    </section>
  );
}
export default YoutubeSection;
