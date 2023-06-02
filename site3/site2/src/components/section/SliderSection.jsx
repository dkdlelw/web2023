function SliderSection(props) {
  return (
    <section id="sliderSection" className={props.attr}>
      <div className="slider__inner">
        <h2 className="blind">이미지 슬라이드</h2>
        <div className="slider__img">
          <div className="slider s1 container">
            <div className="text">
              <div className="slider">
                <h3>
                  sience
                  <br />
                  fiction
                </h3>
                <p>
                  상상력과 과학의 발전을 통해 미래를 탐구하고
                  <br />
                  경험과 사회적, 윤리적 질문을 제기하는 공상과학에 대하여
                </p>
                <a href="/" className="more button-blue ">
                  더보기
                </a>
              </div>
            </div>
            <div className="img" aria-label="hidden">
              <img src="./assets/images/slider/sliderIcon1.png" alt="이미지1" />
              <img src="./assets/images/slider/sliderIcon2.png" alt="이미지2" />
              <img src="./assets/images/slider/sliderIcon3.png" alt="이미지3" />
            </div>
            <div className="circle" aria-label="hidden">
              <span className="circle c1"></span>
              <span className="circle c2"></span>
              <span className="circle c3"></span>
              <span className="circle c4"></span>
              <span className="circle c5"></span>
            </div>
          </div>
          {/* <!-- <div className="slider s2">
                        <div className="slider">
                            <h3>New<br/>portfolio</h3>
                            <p>재능은! 노력 끝에서 발견된다<br/>어떤 일이라도 노력하고 즐기면 성과로 돌아온다</p>
                            <a href="/">더보기</a>
                        </div>
                    </div>
                    <div className="slider s3">
                        <div className="slider">
                            <h3>New<br/>portfolio</h3>
                            <p>재능은! 노력 끝에서 발견된다<br/>어떤 일이라도 노력하고 즐기면 성과로 돌아온다</p>
                            <a href="/">더보기</a>
                        </div>
                    </div> --> */}
        </div>
        <div className="slider__btn">
          <a href="/" className="left">
            <span className="ir">이전이미지</span>
          </a>
          <a href="/" className="right">
            <span className="ir">다음이미지</span>
          </a>
        </div>
        <div className="slider__dot">
          <a href="/" className="dot active">
            <span className="ir">1번이미지</span>
          </a>
          <a href="/" className="dot">
            <span className="ir">2번이미지</span>
          </a>
          <a href="/" className="dot">
            <span className="ir">3번이미지</span>
          </a>
        </div>
      </div>
    </section>
  );
}
export default SliderSection;
