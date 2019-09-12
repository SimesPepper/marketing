import React, { useState, useEffect } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import Axios from 'axios';
import MediaQuery from 'react-responsive';
import {StripeProvider} from 'react-stripe-elements';

import './Styles/App.scss';
import Header from './Components/Header'; 
import IntroCard from './Components/IntroCard';
import MiddleCard from './Components/MiddleCard';
import PictureWindow from './Components/PictureWindow';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import ReviewsComponent from './Components/ReviewsComponent';
import ReviewComponent from './Components/ReviewsComponent';

const App = (props) => {

  const mobile = 700;
  const desktop = 701;

  const [ products ] = useState(
    {
      name: 'simes mild',
      price: 7.99,
      description: 'simes mild chilli sauce'
    },
  )

  const [stripe, setStripe] = useState(null)

  const [cart, setCart] = useState([]);
  // const cart = []

  useEffect(() => {
    if (window.Stripe) {
      setStripe(window.Stripe('pk_test_6olVHcdmYI1PU8613u9RYIlS00iTxjp7ip'));
    } else {
      document.querySelector('#stripe-js').addEventListener('load', () => {
        // Create Stripe instance once Stripe.js loads
        setStripe(window.Stripe('pk_test_6olVHcdmYI1PU8613u9RYIlS00iTxjp7ip'));
      });
    }
  }, [])



  // const handlePurchase = async (token, addresses) => {
  //   console.log(token, addresses)
  //   // const res = await Axios.post('localhost:3003/checkout', { token, products })
  //   // const { status } = res.data;

  //   // if(status === 'success') toast('Success! Check email for details')
  //   // toast('Something went wrong', { type: "error"})
  // }

  return (
    <StripeProvider
      stripe={stripe}
      apiKey="pk_test_6olVHcdmYI1PU8613u9RYIlS00iTxjp7ip"
    >

      <div className="app">
          {/* <Header /> */}
        <MediaQuery maxWidth={mobile}>
            <Header 
              cart={ cart } 
              history={props.history}
              setCart={ setCart }
            />
            <IntroCard />
            <MiddleCard />
            <PictureWindow 
              product={ products }
              history={props.history}
              setCart={ setCart }
              cart={ cart }
            />
            <Contact />
            <ReviewsComponent />
            {/* <Footer /> */}
        </MediaQuery>

        <MediaQuery minWidth={desktop}>
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
              <section className="panel blue">
                <IntroCard
                setCart={ setCart }
                  cart={ cart } 
                  history={props.history}
                />
              </section>
              <Tween
                from={{ x: '-100%' }}
                to={{ x: '0%' }}
              >
                <section className="panel turqoise">
                  <MiddleCard 
                    
                  />
                </section>
              </Tween>
                <Tween
                  from={{ y: '-100%' }}
                  to={{ y: '0%' }}
                >
                  <section className="panel green">
                    <PictureWindow 
                      products={ products }
                      history={props.history}
                      setCart={ setCart }
                      cart={cart}
                    /> 
                    
                  </section>
                </Tween>
                <Tween
                  from={{ y: '1600%' }}
                  to={{ y: '0%' }}
                >
                  <section className="panel bordeaux"><Contact /> </section>
                </Tween>
                <Tween
                  from={{ x: '100%' }}
                  to={{ x: '0%' }}
                >
                  <section className="panel bordeaux"><ReviewComponent /> </section>
                </Tween>
              </Timeline>
            </Scene>
          </Controller>
        </SectionWipes2Styled>
        {/* <Footer /> */}
      </MediaQuery>
      </div>
    </StripeProvider>
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
