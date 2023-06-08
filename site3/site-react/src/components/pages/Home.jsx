import React from 'react';
import Main from '../layout/Main';
import SliderSection from '../section/SliderSection.jsx';
import IntroSection from '../section/IntroSection.jsx';
import MemberSection from '../section/MemberSection.jsx';
import PortSection from '../section/PortSection.jsx';
import YoutubeSection from '../section/YoutubeSection.jsx';
import UnsplashSection from '../section/UnsplashSection.jsx';
import MovieSection from '../section/MovieSection.jsx';

function Home() {
  return (
    <>
      <Main>
        <SliderSection attr={'slider__wrap SebangGothic4 section'} />
        <IntroSection attr={'intro__wrap SebangGothic4 section bg-blue'} />
        <MemberSection attr={'member__wrap SebangGothic4 section center'} />
        <PortSection attr={'port__wrap SebangGothic4 section center bg-blue'} />
        <YoutubeSection attr={'youtube__wrap SebangGothic4 section'} />
        <UnsplashSection attr={'unsplash__wrap SebangGothic4 section bg-blue'} />
        <MovieSection attr={'movie__wrap SebangGothic4 section'} />
      </Main>
    </>
  );
}

export default Home;
