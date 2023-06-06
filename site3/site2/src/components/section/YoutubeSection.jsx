function YoutubeSection(props) {
  return (
    <section id="youtubeSection" className={props.attr}>
      <div className="youtube__inner">
        <div className="youtube__text container">
          <h3>관련 유튜브 추천</h3>
          <p>
            SF와 관련된 주제를 다룬 유튜브를 추천합니다.<br />
            썸네일을 누르시면 해당 유튜브로 이동합니다.
          </p>
          <a href="#" className="button-red">
            자세히 보기
          </a>
          <div class="youtube__item">
              <div>
                  <a href="https://youtu.be/ncSc2CPf454"><img src="./assets/images/youtube/youtube01.jpg" alt="유튜브"/></a>
              </div>
              <div>
                  <a href="https://youtu.be/spn7aihll0E"><img src="./assets/images/youtube/youtube02.jpg" alt="유튜브"/></a>
              </div>
              <div>
                  <a href="https://youtu.be/FrDNhukh2IM"><img src="./assets/images/youtube/youtube03.jpg" alt="유튜브"/></a>
              </div>
              <div>
                  <a href="https://youtu.be/Tj3k-oL53Sg"><img src="./assets/images/youtube/youtube04.jpg" alt="유튜브"/></a>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default YoutubeSection;
