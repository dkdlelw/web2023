function MemberSection(props) {
  return (
    <section id="memberSection" className={props.attr}>
      <h3>SF 장르 작가 & 영화감독 소개</h3>
      <p>SF에서 유명한 작가와 감독들을 소개합니다.</p>
      <div className="member__inner container">
        <div className="member">
          <figure className="member__header">
            <img src="./assets/images/member/member-1.svg" alt="" />
          </figure>
          <div className="member_body">
            <h4>아이작 아시모프 (Isaac Asimov)</h4>
            <a href="#" className="btn">
              작품 보기
            </a>
          </div>
        </div>
        <div className="member">
          <figure className="member__header">
            <img src="./assets/images/member/member-2.svg" alt="입양하기" />
          </figure>
          <div className="member_body">
            <h4>필립 K. 딕 (Philip K. Dick):</h4>
            <a href="#" className="btn">
              작품 보기
            </a>
          </div>
        </div>
        <div className="member">
          <figure className="member__header">
            <img src="./assets/images/member/member-3.svg" alt="입양하기" />
          </figure>
          <div className="member_body">
            <h4>스탠리 큐브릭 (Stanley Kubrick)</h4>
            <a href="#" className="btn">
              작품 보기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default MemberSection;
