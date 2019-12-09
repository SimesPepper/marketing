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
import PaymentOutcome from './PaymentOutcome';

const useStyles = makeStyles(theme => ({
    root: {
    //   position: 'relative',
    //   border: "1px solid red"
    },
    paper: {
      position: 'absolute',
      width: "35%",
      right: 10,
      padding: "2%",
      
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
    const [receipt, setReceipt] = useState(0);
    const [completePurchase, setCompletePurchase] = useState(false)
    
    console.log(` purchased is ${completePurchase}`)
    console.log(`open is ${open}`)

    const classes = useStyles();

    const [checkout, setCheckout] = useState(false)

    const checkoutComplete = receipt => {
        setCompletePurchase(true)
        setReceipt(receipt.data.receipt)
        props.setCart([])
        
    }


    const handleClick = () => {
        setOpen(prev => !prev);
        
    };
    
      const handleClickAway = () => {
        setOpen(false);
        setCheckout(false)
        setCompletePurchase(false)
      };

      const fake = <div className={classes.fake} />;
    if(!checkout) {
        console.log('normal return')

        return(
            
            <nav>
                
                <a className="nav_links" href="#">Login</a>
                <a className="nav_links" href="#">Register</a>
    
                    <div className={classes.root}>
                    <ClickAwayListener onClickAway={handleClickAway}>
                        <div>
                        <i className="fa fa-shopping-basket fa-4x" style={{cursor: 'pointer'}} onClick={ handleClick }>
                            <p 
                                className="cart_count" 
                                style={{visibility: props.cart == undefined || props.cart.length == 0 ? 'hidden': "visible", cursor: 'pointer' }}
                            >
                                {props.cart == undefined || props.cart.length == 0 ? 0 : props.cart.length }
                            </p>
                        </i>
                        {open ? (
                            
                            <div>
                            <Paper className={`cart ${classes.paper}`}>
                                <CartItems cart={ props.cart } setCart={ props.setCart }/>
                                
                                <p style={{marginTop: "15%", fontSize: "1.5rem", textAlign: "center"}}>
                                    <span style={{fontWeight: "bold"}}>Total:</span> ${ 
                                        props.cart.length < 1? 0: 
                                        props.cart.length > 0 && props.cart.length < 4? props.cart.reduce((acc, cur) => acc + cur.price, 0) + 5:
                                        props.cart.reduce((acc, cur) => acc + cur.price, 0)
                                    }
                                </p>

                                <p 
                                    className="checkout_btn" 
                                    style={{
                                        cursor: "pointer", 
                                        borderRadius: "15px", 
                                        margin: "2% auto", 
                                        width: "95%", 
                                        textAlign: "center", 
                                        fontSize: '2rem', 
                                        border: "1px solid green", 
                                        color: "green",

                                        
                                    }}
                                    className="checkout" 
                                    onClick={e => setCheckout(true)}>
                                        
                                    Checkout
                                </p>
                                    
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
        console.log('checkout return')
        if(!completePurchase){
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
                                    
                                <Paper className={`cart ${classes.paper}`}>
                                    <CartCheckout cart={ props.cart } setOpen={checkoutComplete} open={open}/>
                                </Paper>
                                </div>
                            ) : null}
                        </div>
                    </ClickAwayListener>
                    </div>
            </nav> 
        )}else{
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
                                    
                                <Paper className={`cart ${classes.paper}`}>
                                    <p style={{fontSize: '2rem'}}>Thank you for your purchase. To print your receipt, click <a target="_blank" href={receipt}>here</a></p>
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
}