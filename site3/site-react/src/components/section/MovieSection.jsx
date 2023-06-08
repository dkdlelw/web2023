import React from 'react';

const movieTitle = {
  title: 'SF 추천 영화',
  desc: (
    <p>
      SF장르를 기반으로 한 영화들을 추천합니다.
      <br />더 많은 정보들은 자세히 보기를 눌러주세요.
    </p>
  ),
};
const movieItem = [
  {
    img: './assets/images/movie/movie01.png',
    title: 'movie1',
    num: 'dkelkt442',
  },
  {
    img: './assets/images/movie/movie02.png',
    title: 'movie2',
    num: 'dkelkt442',
  },
  {
    img: './assets/images/movie/movie03.png',
    title: 'movie3',
    num: 'dkelkt442',
  },
  {
    img: './assets/images/movie/movie04.png',
    title: 'movie4',
    num: 'dkelkt442',
  },
  {
    img: './assets/images/movie/movie05.png',
    title: 'movie4',
    num: 'dkelkt442',
  },
  {
    img: './assets/images/movie/movie06.png',
    title: 'movie4',
    num: 'dkelkt442',
  },
];

function MovieDesc({ img, title }) {
  return (
    <div>
      <img src={img} alt={title} />
    </div>
  );
}
function MovieSection(props) {
  return (
    <section id="movieSection" className={props.attr}>
      <div className="movie__inner">
        <div className="movie__text container">
          <h3>{movieTitle.title}</h3>
          <>{movieTitle.desc}</>
          <a href="/" className="button-green">
            자세히 보기
          </a>
          <div className="movie__item">
            {movieItem.map((item, index) => (
              <MovieDesc key={index} img={item.img} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default MovieSection;
