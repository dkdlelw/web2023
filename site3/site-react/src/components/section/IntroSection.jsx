import React from 'react';

const introTitle = {
  sub: 'Sience Fiction',
  title: (
    <h3>
      SF에
      <br />
      대하여
    </h3>
  ),
  desc: '공상과학(Sience Fiction)<br />장르에 대한 설명입니다.',
};
const introText = [
  {
    iconClass: 'icon-bg1',
    title: 'SF란 무엇인가',
    desc: 'SF는 "Science Fiction"의 약자로, 과학적 요소와 상상력을 결합한 문학적 장르를 가리킵니다. SF는 과학의 발전과 기술의 혁신, 미래의 사회와 문명, 외계 생명체 등과 같은 주제들을 다룹니다. 이 장르는 가상의 세계나 미래를 배경으로 한 이야기를 통해 현실과 상상의 경계를 모호하게 만들어서, 독자나 관객들에게 새로운 경험과 시각을 제공합니다.인간의 상상력과 과학의 발전을 통해 미래를 탐구하고 인간의 경험과 사회적, 윤리적 질문을 제기하는 중요한 장르로 자리매김하고 있습니다.',
  },
  {
    iconClass: 'icon-bg2',
    title: 'SF의 역사',
    desc: 'SF의 역사는 고대 이야기나 신화에까지 거슬러 올라갈 수 있습니다. 그러나 현대 공상과학의 뿌리는 19세기 과학의 발전과 혁신에 있습니다.20세기에는 공상과학 작품이 급속하게 성장하였습니다. 과학의 발전과 기술의 혁신은 작가들에게 더욱 다양하고 풍부한 아이디어를 제공했습니다. 현대에 이르러서는 공상과학이 더욱 다양한 형태로 발전하고 있습니다. 공상과학 영화와 소설은 대중문화에 큰 영향을 주며, 과학기술의 발전과 사회 변화에 대한 우려와 상상력을 반영합니다.',
  },
  {
    iconClass: 'icon-bg3',
    title: 'SF의 장르들',
    desc: '과학적 원리와 기술에 엄격하게 충실한 하드 SF, 사회, 인간 심리, 인간관계 등과 같은 인문학적인 요소에 더 초점을 둔 소프트 SF, 도로 기술화된 미래 사회를 배경으로 한 장르로, 가상현실, 인공지능, 컴퓨터 해킹 등과 같은 요소를 강조하는 사이버펑크, 과거의 산업 혁명 시기를 기반으로 하고 스팀 엔진과 기계 장치가 주요한 기술 요소인 스팀펑크, SF와 판타지 요소가 결합된 사이언스 판타지 등이 있습니다.',
  },
  {
    iconClass: 'icon-bg4',
    title: 'SF에서 현실로',
    desc: (
      <p>
        휴대전화: 예를 들어 스타 트렉 시리즈에서 등장한 통신 기능이 탑재된
        커뮤니케이터는 휴대전화의 원형으로 볼 수 있습니다.
        <br />
        태블릿 PC: 예를 들어 영화 "2001 스페이스 오디세이"에서 등장한 신문을
        읽는 장면에서 사용된 기기가 그 예시입니다
        <br />
        VR: 영화 "매트릭스"에서 등장한 가상현실 세계와 인터페이스는 VR 기술의
        발전을 영감으로 한 것입니다.
        <br />
        음성인식 기술: SF 작품에서는 음성인식 기술이 자주 등장합니다. 실제로
        현실에서도 음성인식 기술이 발전하여 음성 명령을 통해 컴퓨터를 제어하거나
        가정용 스마트 스피커와 같은 기기를 사용할 수 있게 되었습니다.
        <br />
        드론 (무인 항공기): SF 작품에서는 자율 비행하는 드론이나 무인 항공기가
        많이 등장합니다. 현실에서는 이러한 드론 기술이 발전하여 산업용, 군사용,
        예술 등 다양한 분야에서 활용되고 있습니다.
        <br />
      </p>
    ),
  },
];

function IntroDesc({ iconClass, title, desc }) {
  return (
    <div>
      <h4 className={iconClass}>{title}</h4>
      <p>{desc}</p>
    </div>
  );
}

function IntroSection(props) {
  return (
    <section id="introtSection" className={props.attr}>
      <h3 className="blind">SF 소개</h3>
      <div className="intro__inner container">
        <div className="intro__title">
          <span>{introTitle.sub}</span>
          <>{introTitle.title}</>
          <p>{introTitle.desc}</p>
        </div>
        <div className="intro__desc">
          {introText.map((text, index) => (
            <IntroDesc
              key={index}
              iconClass={text.iconClass}
              title={text.title}
              desc={text.desc}
            />
          ))}
          ;
        </div>
      </div>
    </section>
  );
}
export default IntroSection;
