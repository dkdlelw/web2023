function PortSection(props) {
  return (
    <section id="portSection" className={props.attr}>
      <h3>SF 작품 소개</h3>
      <p>각 유명작품들을 소개합니다.</p>
      <div className="port__inner container">
        <div className="port__btn">
          <ul>
            <li className="active">
              <a href="#">문학</a>
            </li>
            <li>
              <a href="#">애니메이션</a>
            </li>
            <li>
              <a href="#">영화/드라마</a>
            </li>
            <li>
              <a href="#">게임</a>
            </li>
          </ul>
        </div>
        <div className="port__cont">
          <div className="port">
            <figure className="port__header">
              <img src="./assets/images/port/port_01.png" alt="포트폴리오" />
            </figure>
            <div className="port__body">
              <span className="pic">
                <img src="./assets/images/member/member-1.svg" alt="멤버" />
              </span>
              <div className="title">
                <h4>아이, 로봇</h4>
                <span>아이작 아시모프(Isaac Asimov) </span>
              </div>
            </div>
          </div>
          <div className="port">
            <figure className="port__header">
              <img src="./assets/images/port/port_02.png" alt="포트폴리오" />
            </figure>
            <div className="port__body">
              <span className="pic">
                <img src="./assets/images/member/member-2.svg" alt="멤버" />
              </span>
              <div className="title">
                <h4>안드로이드는 전기양을 꿈꾸는가?</h4>
                <span>필립 K. 딕 (Philip K. Dick)</span>
              </div>
            </div>
          </div>
          <div className="port">
            <figure className="port__header">
              <img src="./assets/images/port/port_03.png" alt="포트폴리오" />
            </figure>
            <div className="port__body">
              <span className="pic">
                <img src="./assets/images/member/member-3.svg" alt="멤버" />
              </span>
              <div className="title">
                <h4>스페이스 오디세이 2001</h4>
                <span>스탠리 큐브릭 (Stanley Kubrick)</span>
              </div>
            </div>
          </div>
          <div className="port">
            <figure className="port__header">
              <img src="./assets/images/port/port_04.png" alt="포트폴리오" />
            </figure>
            <div className="port__body">
              <span className="pic">
                <img src="./assets/images/member/member-4.svg" alt="멤버" />
              </span>
              <div className="title">
                <h4>김김김 포트폴리오</h4>
                <span>프론트앤드 개발자 포트폴리오</span>
              </div>
            </div>
          </div>
          <div className="port">
            <figure className="port__header">
              <img src="./assets/images/port/port_05.png" alt="포트폴리오" />
            </figure>
            <div className="port__body">
              <span className="pic">
                <img src="./assets/images/member/member-5.svg" alt="멤버" />
              </span>
              <div className="title">
                <h4>김김김 포트폴리오</h4>
                <span>프론트앤드 개발자 포트폴리오</span>
              </div>
            </div>
          </div>
          <div className="port">
            <figure className="port__header">
              <img src="./assets/images/port/port_06.png" alt="포트폴리오" />
            </figure>
            <div className="port__body">
              <span className="pic">
                <img src="./assets/images/member/member-6.svg" alt="멤버" />
              </span>
              <div className="title">
                <h4>김김김 포트폴리오</h4>
                <span>프론트앤드 개발자 포트폴리오</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default PortSection;
