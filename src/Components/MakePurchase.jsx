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
import Header from './head/Header';
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
    const [total, setTotal] = useState(0)
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);
  const [pepperState, setPepperState] = useState({})
  const [displayState, setDisplayState] = useState({})
  const [borderColorState, setBorderColorState] = useState('white')

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

        <img src={require('../img/simes_bottle_burned.png')} alt=""/>
        
        </div>
        
    )
}
