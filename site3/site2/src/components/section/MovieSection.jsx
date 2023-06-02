function MovieSection(props) {
  return (
    <section id="movieSection" className={props.attr}>
      <div className="movie__inner">
        <div className="movie__text container">
          <h3>SF 추천 영화</h3>
          <p>
            SF 장르를 다룬
            <br />
            영화들을 추천합니다.
          </p>
          <a href="#" className="button-green">
            자세히 보기
          </a>
          <div className="movie__item">
            <div>
              <img src="./assets/images/movie/movie01.png" alt="영화" />
            </div>
            <div>
              <img src="./assets/images/movie/movie02.png" alt="영화" />
            </div>
            <div>
              <img src="./assets/images/movie/movie03.png" alt="영화" />
            </div>
            <div>
              <img src="./assets/images/movie/movie04.png" alt="영화" />
            </div>
            <div>
              <img src="./assets/images/movie/movie05.png" alt="영화" />
            </div>
            <div>
              <img src="./assets/images/movie/movie06.png" alt="영화" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default MovieSection;
