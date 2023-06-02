import React from 'react';
import Header from './components/layout/Header.jsx';
import Main from './components/layout/main.jsx';
import Footer from './components/layout/Footer.jsx';
import SliderSection from './components/section/SliderSection.jsx';
import IntroSection from './components/section/IntroSection.jsx';
import MemberSection from './components/section/MemberSection.jsx';
import PortSection from './components/section/PortSection.jsx';
import YoutubeSection from './components/section/YoutubeSection.jsx';
import UnsplashSection from './components/section/UnsplashSection.jsx';
import MovieSection from './components/section/MovieSection.jsx';

function App() {
  return (
    <>
      <Header attr={['header__wrap', 'SebangGothic4', 'bg-blue']} />
      <Main>
        <SliderSection attr={'slider__wrap SebangGothic4 section'} />
        <IntroSection attr={'intro__wrap SebangGothic4 section bg-blue'} />
        <MemberSection attr={'member__wrap SebangGothic4 section center'} />
        <PortSection attr={'port__wrap SebangGothic4 section center bg-blue'} />
        <YoutubeSection attr={'youtube__wrap SebangGothic4 section'} />
        <UnsplashSection attr={'unsplash__wrap SebangGothic4 section bg-blue'} />
        <MovieSection attr={'movie__wrap SebangGothic4 section'} />
      </Main>
      <Footer attr={'footer__wrap SebangGothic4 section bg-blue'} />
    </>
  );
}
export default App;
