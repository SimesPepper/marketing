import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import styled from 'styled-components';


import './Styles/App.scss';
import IntroCard from './Components/IntroCard';
import MiddleCard from './Components/MiddleCard';
import PictureWindow from './Components/PictureWindow';
import Contact from './Components/Contact'

function App() {
  return (
    <div className="app">
      
     <SectionWipes2Styled>
      <Controller>
        <Scene
          triggerElement="#pinContainer"
          triggerHook="onLeave"
          duration="900%"
          pin="#pinContainer"
        >
        <Timeline
          wrapper={<div id="pinContainer" />}
        >
          <section className="panel blue"><IntroCard /></section>
          <Tween
            from={{ x: '-100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel turqoise"><MiddleCard /></section>
          </Tween>
          <Tween
            from={{ y: '-100%' }}
            to={{ y: '0%' }}
          >
            <section className="panel green"><PictureWindow /> </section>
          </Tween>
          <Tween
            from={{ y: '1600%' }}
            to={{ y: '0%' }}
          >
            <section className="panel bordeaux"><Contact /> </section>
          </Tween>
        </Timeline>
      </Scene>
    </Controller>
  </SectionWipes2Styled>
      {/* <Header /> */}
     
      {/* <Footer /> */}
        {/* <Contact */}
    </div>
  );
}

const SectionWipes2Styled = styled.div`
  overflow: hidden;
  #pinContainer {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
  #pinContainer .panel {
    height: 100vh;
    width: 100vw;
    position: absolute;
    overflow: hidden;
    
  }
  

  .turqoise {
    background-color: white;
  }
  
`;

export default App;
