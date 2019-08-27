import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

import '../Styles/pictureWindow.scss';
import MiddleCard from './MiddleCard';
import Header from './Header';
import NewModal from './NewModal';

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
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));


export default ({ handlePurchase, products }) => {

    const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [pepperState, setPepperState] = useState()

  const handleOpen = _ => {
    setOpen(true);
    
  };

  const handleClose = () => {
    setOpen(false);
  };

    return (
    <div className="picture_window component_container">
    
        <div className="overlay"></div>
        <div className="container">
            <h1><span className="three">3</span> WAYS TO CHALLENGE YOURSELF</h1>
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
                                className="jar jar1" 
                                src={require('../img/simes_bottle_burned.png')} 
                                alt=""
                                onClick={e => handleOpen('MILD')}
                            />
                        </Tween>
                    </Timeline>                            
                </Scene>
                <Scene
                    triggerElement="1"
                    triggerHook="0"
                    duration="600%"
            
                   
                    
                >                        
                    <Timeline >
                        <Tween
                            from={{y: '100%', x: '-100%', width: '400%'}}
                            to={{y: '1%', x: '100%', width: '20%'}}
                        >
                            <img 
                                className="jar jar2" 
                                src={require('../img/simes_bottle_burned.png')} 
                                alt=""
                                onClick={e => handleOpen('REGULAR')}
                                
                                />
                        </Tween>
                    </Timeline>                            
                </Scene>
                <Scene
                    triggerElement="1"
                    triggerHook="0"
                    duration="600%"
            
                   
                    
                >                        
                    <Timeline >
                        <Tween
                            from={{y: '0%', x: '0%', width: '400%'}}
                            to={{y: '1%', x: '-100%', width: '20%'}}
                        >
                            <img 
                                className="jar jar3" 
                                src={require('../img/simes_bottle_burned.png')} 
                                alt=""
                                onClick={e => handleOpen('HOT')}
                                
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
                    products={ products } 
                    handlePurchase={ handlePurchase }
                />

                </div>
            </Modal>
            <h2>CHOOSE YOUR OWN ADVENTURE<span className="exclaim">!</span></h2>
        </div>
        
    </div>
        
    )
}
