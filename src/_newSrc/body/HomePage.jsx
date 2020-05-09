import React, { useEffect, useState } from 'react';
import MediaQuery from 'react-responsive';

import Nav from '../header/Nav';
import Overlay from './Overlay';
import Footer from '../footer/Footer';
import ItemChoices from './ItemChoices';

// import '../index.scss';
import './home.scss';

export default ({ cart, setCart, history, location, match }) => {
    

    const [ choices, setChoices ] = useState([

        {
            id: 1,
            price: 799,
            subClass: 'price1',
            heat: 'mild',
            description: 'For the big dreamers, who just need a little more time. . . '
        },
        {
            id: 2,
            price: 799,
            subClass: 'price2',
            heat: 'medium',
            description: 'Just the right amount of kick, while still packing all the flavor.'
        },
        {
            id: 3,
            price: 799,
            subClass: 'price3',
            heat: 'hott',
            description: 'Soo hot, it needed an extra T . . .'
        }
    ]);

    const [ chosen, setChosen ] = useState([])
    const [ className, setClassName ] = useState('')

    useEffect(() => {

       

        window.addEventListener('scroll', () => {

            window.scrollY > 70 ? 
                setClassName('active-header2'):
                setClassName('')
        })
    }, []) // add active-header2 class to header on scroll away from top



    return (

        <div className="home-page">

            <MediaQuery maxWidth={700}>
                <img src={require('../../img/cuttingboard_pork.jpg')} className="full-pic" />

                <Nav 
                cart={cart} 
                className='mobile' 
                history={history}
                location={location}
                match={match}
                
            />

            </MediaQuery>

            <MediaQuery minWidth={800}>

                <Nav 
                    cart={cart} 
                    className={className} 
                />
            </MediaQuery>

            <Overlay />
            
            <ItemChoices
                history={history}
                location={location}
                choices={choices}
                chosen={chosen}
                setChosen={setChosen}
                cart={cart}
                setCart={setCart}
            />

            <MediaQuery minWidth={790}>
                <Footer />
            </MediaQuery>

        </div>
    )
}