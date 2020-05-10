import Axios from 'axios';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import { Tween, Timeline } from 'react-gsap';
import { Route , Switch } from 'react-router';
import React, { useState, useEffect } from 'react';
import {StripeProvider, Elements} from 'react-stripe-elements';
import { Controller, Scene } from 'react-scrollmagic';

import Footer from './_newSrc/footer/Footer';
import AboutUs from './Components/AboutUs'
import Contact from './Components/Contact';
import Cart from './_newSrc/purchase/Cart';
import FanBoard from './Components/FanBoard';
import Header from './Components/head/Header'; 
import IntroCard from './Components/IntroCard';
import CheckoutForm from './_newSrc/purchase/CheckoutForm';

import HomePage from './_newSrc/body/HomePage';

import './Styles/App.scss';
import About from './_newSrc/body/About';
import SocialBoard from './_newSrc/body/SocialBoard';
import ContactUs from './_newSrc/body/ContacUs';

const App = (props) => {

  const mobile = 700;
  const desktop = 701;

  const [stripe, setStripe] = useState(null)

  const [cart, setCart] = useState([]);
  // const cart = []

  useEffect(() => {
    if (window.Stripe) {
      setStripe(window.Stripe('pk_live_adoCNhh7KNUkcjSnyRScAH1A00SPJuwx04'));// put this in an env
    } else {
      document.querySelector('#stripe-js').addEventListener('load', () => {
        // Create Stripe instance once Stripe.js loads
        setStripe(window.Stripe('pk_live_adoCNhh7KNUkcjSnyRScAH1A00SPJuwx04'));
      });
    }
  }, [])


  const toggleMenu = _ => {

    const menu = document.querySelector('.header2')
    const menuButton = document.querySelector('.hamburger')

    menuButton.classList.toggle('close')
    menu.classList.toggle('show')
}


  return (
    <StripeProvider
      stripe={stripe}
      apiKey={ process.env.APIKEY  || "pk_live_adoCNhh7KNUkcjSnyRScAH1A00SPJuwx04" }
    >
      <Elements>

        <div className="app">
        

          <MediaQuery maxWidth={790}>
              <div className="hamburger" onClick={toggleMenu}>

                  <div className="line" />
                  <div className="line" />
                  <div className="line" />

              </div>
          </MediaQuery>

          <Switch className="app">

            <Route exact path="/" render={ props => <HomePage {...props} cart={cart} setCart={setCart} toggleMenu={toggleMenu} /> } />
            <Route path="/cart" render={ props => <Cart  cart={cart} setCart={setCart}  {...props} /> } />
            <Route path="/checkout" render={ props => <CheckoutForm {...props} /> } />
            <Route path="/about" render={ props => <About {...props} /> } />
            <Route path="/social-board" render={ props => <SocialBoard {...props} /> } />
            <Route path="/contact-us" render={ props => <ContactUs {...props} /> } />
            {/* <Route exact path='/' component={IntroCard} />
            <Route path="/about" component={AboutUs} /> 
            <Route path="/fan-board" component={FanBoard} />
            <Route path="/contact" component={Contact} /> */}

          </Switch>

          <MediaQuery maxWidth={790}>
            <Footer />
          </MediaQuery>
        </div>
        
      </Elements>
      
    </StripeProvider>
  );
}


export default App;
