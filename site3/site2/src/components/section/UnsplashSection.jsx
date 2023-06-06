function UnsplashSection(props) {
  return (
    <section id="unsplashSection" className={props.attr}>
      <div className="unsplash__inner  container">
        <div className="unsplash__text">
          <h3>이미지 다운로드 추천</h3>
          <p>
            SF와 관련된 주제를 다룬 이미지를 추천합니다.<br />
            더 많은 이미지는 자세히 보기를 눌러주세요.
          </p>
          <a href="#" className="button-blue">
            자세히 보기
          </a>
        </div>
        <div className="unsplash__item">
          <div>
            <img src="./assets/images/unsplash/unsplash01.jpg" alt="이미지" />
          </div>
          <div>
            <img src="./assets/images/unsplash/unsplash02.jpg" alt="이미지" />
          </div>
          <div>
            <img src="./assets/images/unsplash/unsplash03.jpg" alt="이미지" />
          </div>
          <div>
            <img src="./assets/images/unsplash/unsplash04.jpg" alt="이미지" />
          </div>
        </div>
        <p></p>
      </div>
    </section>
  );
}
export default UnsplashSection;
