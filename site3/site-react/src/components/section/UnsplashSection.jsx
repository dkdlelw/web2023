import React from 'react';

const unsplashTitle = {
  title: '이미지 다운로드 추천',
  desc: (
    <p>
      SF와 관련된 주제를 다룬 이미지를 추천합니다.
      <br />더 많은 이미지는 자세히 보기를 눌러주세요.
    </p>
  ),
};

const unsplashItem = [
  {
    img: './assets/images/unsplash/unsplash01.jpg',
    title: '이미지1',
    num: 'dkelkt442',
  },
  {
    img: './assets/images/unsplash/unsplash02.jpg',
    title: '이미지2',
    num: 'dkelkt442',
  },
  {
    img: './assets/images/unsplash/unsplash03.jpg',
    title: '이미지3',
    num: 'dkelkt442',
  },
  {
    img: './assets/images/unsplash/unsplash04.jpg',
    title: '이미지4',
    num: 'dkelkt442',
  },
];
function UnsplashDesc({ img, title }) {
  return (
    <div>
      <img src={img} alt={title} />
    </div>
  );
}

function UnsplashSection(props) {
  return (
    <section id="unsplashSection" className={props.attr}>
      <div className="unsplash__inner  container">
        <div className="unsplash__text">
          <h3>{unsplashTitle.title}</h3>
          <>{unsplashTitle.desc}</>
          <a href="/" className="button-blue">
            자세히 보기
          </a>
        </div>
        <div className="unsplash__item">
          {unsplashItem.map((item, index) => (
            <UnsplashDesc key={index} img={item.img} />
          ))}
        </div>
        <p></p>
      </div>
    </section>
  );
}
export default UnsplashSection;
