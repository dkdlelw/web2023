function YoutubeSection(props) {
  return (
    <section id="youtubeSection" className={props.attr}>
      <div className="youtube__inner">
        <div className="youtube__text container">
          <h3>관련 유튜버 추천</h3>
          <p>
            다양한 정보 제공중 <br />
            좋댓구알
          </p>
          <a href="#" className="button-red">
            자세히 보기
          </a>
          <div className="youtube__item">
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
        </div>
      </div>
    </section>
  );
}
export default YoutubeSection;
