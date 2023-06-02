function UnsplashSection(props) {
  return (
    <section id="unsplashSection" className={props.attr}>
      <div className="unsplash__inner  container">
        <div className="unsplash__text">
          <h3>이미지 다운로드 추천</h3>
          <p>
            다양한 정보 제공중 <br />
            좋댓구알
          </p>
          <a href="#" className="button-blue">
            자세히 보기
          </a>
        </div>
        <div className="unsplash__item">
          <div>
            <img src="./assets/images/youtube/youtube01.jpg" alt="유튜브" />
          </div>
          <div>
            <img src="./assets/images/youtube/youtube02.jpg" alt="유튜브" />
          </div>
          <div>
            <img src="./assets/images/youtube/youtube03.jpg" alt="유튜브" />
          </div>
          <div>
            <img src="./assets/images/youtube/youtube04.jpg" alt="유튜브" />
          </div>
        </div>
        <p></p>
      </div>
    </section>
  );
}
export default UnsplashSection;
