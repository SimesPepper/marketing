import React, { useState, useEffect } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import { Route, Link } from 'react-router-dom';

import CartItems from './CartItems';
import CartCheckout from './CartCheckout';

const useStyles = makeStyles(theme => ({
    root: {
    //   position: 'relative',
    //   border: "1px solid red"
    },
    paper: {
      position: 'absolute',
      width: "35%",
      right: 10,
      padding: "2%"
      
    },
    fake: {
      backgroundColor: grey[200],
      height: theme.spacing(1),
      margin: theme.spacing(2),
      // Selects every two elements among any group of siblings.
      '&:nth-child(2n)': {
        marginRight: theme.spacing(3),
      },
    },
  }));

export default (props) => {

    const [ open, setOpen] = useState(false)
    const [total, setTotal] = useState(0);
    const [isShipping, setIsShipping] = useState(true)

    

    const classes = useStyles();

    const [checkout, setCheckout] = useState(false)

    console.log(props)

    const handleClick = () => {
        setOpen(prev => !prev);
        
    };
    
      const handleClickAway = () => {
        setOpen(false);
        setCheckout(false)
      };

      const fake = <div className={classes.fake} />;
    if(!checkout) {

        return(
            <nav>
                <a className="nav_links" href="#">Login</a>
                <a className="nav_links" href="#">Register</a>
    
                    <div className={classes.root}>
                    <ClickAwayListener onClickAway={handleClickAway}>
                        <div>
                        <i className="fa fa-shopping-basket fa-4x" onClick={ handleClick }>
                            <p className="cart_count" style={{visibility: props.cart == undefined || props.cart.length == 0 ? 'hidden': "visible" }}>{props.cart == undefined || props.cart.length == 0 ? 0 : props.cart.length }</p>
                        </i>
                        {open ? (
                            
                            <div>
                            <Paper className={classes.paper}>
                                <CartItems cart={ props.cart } setCart={ props.setCart }/>
                                
                                <p style={{marginTop: "15%", fontSize: "1.5rem", textAlign: "center"}}>
                                    <span style={{fontWeight: "bold"}}>Total:</span> ${ 
                                        props.cart.length < 1? 0: 
                                        props.cart.length > 1 && props.cart.length < 4? props.cart.reduce((acc, cur) => acc + cur.price, 0) + 5:
                                        props.cart.reduce((acc, cur) => acc + cur.price, 0)
                                    }
                                </p>

                                <p style={{cursor: "pointer", borderRadius: "15px", margin: "2% auto", width: "95%", textAlign: "center", fontSize: '2rem', border: "1px solid green", color: "green"}} className="checkout" onClick={e => setCheckout(true)}>Checkout</p>
                                    
                                {/* <Route path="cart-checkout" component={CartCheckout}/> */}
                            </Paper>
                            </div>
                        ) : null}
                        </div>
                    </ClickAwayListener>
                    </div>
            </nav> 
        )
    }else {
        return(
            <nav>
                <a className="nav_links" href="#">Login</a>
                <a className="nav_links" href="#">Register</a>
    
                {/* <i className="fa fa-shopping-basket fa-4x" onClick={ handleClick }>
                    <p className="cart_count" style={{visibility: props.cart == undefined || props.cart.length == 0 ? 'hidden': "visible" }}>{props.cart == undefined || props.cart.length == 0 ? 0 : props.cart.length }</p>
                </i> */}
                    <div className={classes.root}>
                    <ClickAwayListener onClickAway={handleClickAway}>
                        <div>
                            <i className="fa fa-shopping-basket fa-4x" onClick={ handleClick }>
                                <p className="cart_count" style={{visibility: props.cart == undefined || props.cart.length == 0 ? 'hidden': "visible" }}>{props.cart == undefined || props.cart.length == 0 ? 0 : props.cart.length }</p>
                            </i>
                            {open ? (
                                
                                <div>
                                    
                                <Paper className={classes.paper}>
                                    <CartCheckout cart={ props.cart }/>
                                </Paper>
                                </div>
                            ) : null}
                        </div>
                    </ClickAwayListener>
                    </div>
            </nav> 
        )
    }
}