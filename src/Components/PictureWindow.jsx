import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import MediaQuery from 'react-responsive'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import '../Styles/pictureWindow.scss';
import MiddleCard from './MiddleCard';
import Header from './Header';
import NewModal from './NewModal';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 
    const left = 50 
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles(theme => ({
    paper: {

      position: 'absolute',
      width: 400,
      backgroundColor: 'white',
      border: '2px solid #000',
      borderRadius: '15px',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      outline: 'none'
    },
  }));


export default (props) => {
    const mobile = 700;
    const desktop = 701;


    const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [pepperState, setPepperState] = useState({})
  const [displayState, setDisplayState] = useState({})
  const [borderColorState, setBorderColorState] = useState('white')
  const [total, setTotal] = useState(0)

  const handleOpen = chosenPepper => {
    setOpen(true);
    setPepperState({...chosenPepper})
    props.history.push('/item')
    setTotal(chosenPepper.price + chosenPepper.shipping)

  };

  const handleHover = pepperInfo => {
    setDisplayState({...pepperInfo})
    setBorderColorState(pepperInfo.color);
  }

  const handleHoverOut = _ => {
    setDisplayState({color: 'white'})
    setBorderColorState('white');
   

  }

  const handleClose = () => {
    setOpen(false);
    setPepperState()
    props.history.push('/')
    setTotal(0)


  };


    return (
    <div className="picture_window component_container">

        <MediaQuery maxWidth={mobile} >

            <div className="overlay"></div>
            
            <div className="container">
                <h1 style={{color: 'green', borderTop: '2px solid black'}}>
                  WHAT WE OFFER:
                </h1>
                <p style={{fontSize: '1rem'}}>"LOVE IN A JAR FOR THOSE WHO SEEK TO BE ADVENTUROUS WITH THEIR PALETTES"</p>
                
                    <div className="image_div">
                        <img src={require('../img/simes_bottle_burned.png')} alt=""/>
                        <p 
                            className="hot"
                            onClick={e => handleOpen({
                                name: "Si'me's hot chilli pepper",
                                price: 7.99,
                                shipping: 5.00,
                                flavor: "HOT",
                                color: "red",
                                description: "Si'me's hot chilli sauce. Are you ready for the heat?"
                            })}
                        >
                            HOT
                        </p>
                        <p 
                            className="medium"
                            onClick={e => handleOpen({
                                name: "Si'me's medium chilli sauce",
                                price: 7.99,
                                shipping: 5.00,
                                flavor: "MEDIUM",
                                color: "yellow",
                                description: "Si'me's medium chilli sauce, more punch than you'd think."
                            })}    
                        >
                            MEDIUM
                        </p>
                        <p
                             className="mild"
                             onClick={e => handleOpen({
                                name: "Si'me's mild chilli sauce",
                                price: 7.99,
                                shipping: 5.00,
                                flavor: "MILD",
                                color: "#28842B",
                                description: "Si'me's mild sauce. For those with fragile pallets."
                            })}    
                        >
                            MILD
                        </p>

                       
                    </div>
                    <Modal
                        className='item_modal'
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        open={open}
                        onClose={handleClose}
                    >
                    <div style={modalStyle} className={`item_modal ${classes.paper}`}>
                    <NewModal 
                        className='item_modal'
                        pepperState={ pepperState } 
                        setCart={ props.setCart }
                        cart={ props.cart }
                        close={handleClose}
                    />

                    </div>
                    </Modal>
                <h1 className="choose">CHOOSE YOUR OWN ADVENTURE<span className="exclaim">!</span></h1>
            </div>
        </MediaQuery>
        <MediaQuery minWidth={desktop} >
            <div className="overlay" />
            <div className="container">
                <h1><span className="three">3</span> WAYS TO CHALLENGE YOURSELF</h1>
                <div className="content_display" style={{color: `${displayState.color}`}} ><p>{ displayState.text }</p></div>
                <Controller>
                    <Scene
                        triggerElement="1"
                        triggerHook="0"
                        duration="600%"
                    >                        
                        <Timeline wrapper={<div className="animation_div" />}>
                            <Tween
                                from={{y: '100%', x: '-100%', width: '400%'}}
                                to={{y: '1%', x: '0%', width: '20%'}}
                            >
                                <img 
                                    style={{borderColor: `${ borderColorState }`}}
                                    className="jar jar1" 
                                    src={require('../img/simes_bottle_burned.png')} 
                                    alt=""
                                    onMouseEnter={e => handleHover({text: 'MEDIUM', color: 'yellow'})}
                                    onMouseLeave={handleHoverOut}
                                    onClick={e => handleOpen({
                                        name: "Si'me's medium chilli sauce",
                                        price: 7.99,
                                        shipping: 5.00,
                                        flavor: "MEDIUM",
                                        color: "yellow",
                                        description: "Si'me's medium sauce, more punch than you'd think."
                                    })}
                                />
                            </Tween>
                        </Timeline>                            
                    </Scene>
                    <Scene
                        triggerElement="1"
                        triggerHook="0"
                        duration="600%"   
                    >                        
                        <Timeline wrapper={<div className="animation_div" />}>
                            <Tween
                                from={{y: '100%', x: '-100%', width: '400%'}}
                                to={{y: '1%', x: '100%', width: '20%'}}
                            >
                                <img 
                                    style={{borderColor: `${ borderColorState }`}}
                                    className="jar jar2" 
                                    src={require('../img/simes_bottle_burned.png')} 
                                    alt=""
                                    onMouseEnter={e => handleHover({text: 'MILD', color: '#2D892F'})}
                                    onMouseLeave={handleHoverOut}
                                    onClick={e => handleOpen({
                                        name: "Si'me's mild chilli sauce",
                                        price: 7.99,
                                        shipping: 5.00,
                                        flavor: "MILD",
                                        color: "#28842B",
                                        description: "Si'me's mild sauce. For those with fragile pallets."
                                    })}
                                    
                                    />
                            </Tween>
                        </Timeline>                            
                    </Scene>
                    <Scene
                        triggerElement="1"
                        triggerHook="0"
                        duration="600%"
                    >                        
                        <Timeline wrapper={<div className="animation_div" />}>
                            <Tween
                                from={{y: '0%', x: '0%', width: '400%'}}
                                to={{y: '1%', x: '-100%', width: '20%'}}
                            >
                                <img 
                                    style={{borderColor: `${ borderColorState }`}}
                                    className="jar jar3" 
                                    src={require('../img/simes_bottle_burned.png')} 
                                    alt=""
                                    onMouseEnter={e => handleHover({text: 'HOT', color: 'red'})}
                                    onMouseLeave={handleHoverOut}
                                    onClick={e => handleOpen({
                                        name: "Si'me's HOT chilli sauce",
                                        price: 7.99,
                                        shipping: 5.00,
                                        flavor: "HOT",
                                        color: "red",
                                        description: "Si'me's HOT sauce. Are you ready for the heat?"
                                    })}

                                />
                            </Tween>
                        </Timeline>                            
                    </Scene>
                </Controller>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={open}
                    onClose={handleClose}
                >
                    <div style={modalStyle} className={classes.paper}>
                    <NewModal 
                        pepperState={ pepperState } 
                        setCart={ props.setCart }
                        total={ total }
                        cart={ props.cart } 
                        close={handleClose}
                    />

                    </div>
                </Modal>
                <h2>CHOOSE YOUR OWN ADVENTURE<span className="exclaim">!</span></h2>
            </div>
        </MediaQuery>
    
        
    </div>
        
    )
}
