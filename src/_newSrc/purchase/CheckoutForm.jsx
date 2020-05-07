import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import CircularProgress from '@material-ui/core/CircularProgress';
import MediaQuery from 'react-responsive';

import './checkout.scss';
import Footer from '../footer/Footer';
import Nav from '../header/Nav';

const Form = props => {
    
    console.log(props)
    
    const [email, setEmail] = useState('')
    const [amount, setAmount] = useState(0)
    const [address, setAddress] = useState({
        line1: '',
        line2: '',
        city: '',
        state: ''
    })
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [buttonActive, setButtonActive] = useState(true)

    useEffect(() => {
        setAmount(props.location.state.total > 39 ? props.location.state.total: props.location.state.total + 5 )
    },[])

    const handleAddressChange = e => {
        
        setAddress({...address, [e.target.name]: e.target.value })
    }

    const handleFirstNameChange = e => {

        setFirstName(e.target.value);
    }

    const handleLastNameChange = e => {

        setLastName(e.target.value);
    }

    const handleEmailChange = e => {

        setEmail(e.target.value)
    }

    const handleSubmit = async e => {
        e.preventDefault();
        // const amount = props.pepperState.price
        // console.log(amount)

        setButtonActive(false)

        try{
            
            let token = await props.stripe.createToken({
                name: `${firstName} ${lastName}`
            })
            const res = await Axios.post('https://simes-pepper.herokuapp.com/checkout', {token, firstName, lastName, amount, address, email})
            // const res = await Axios.post('http://localhost:3003/checkout', {token, name, amount, address, email})
            setFirstName('')
            setLastName('')
            console.log(res)
            
            // if (props.setOpen) props.setOpen(res)

            // props.history.push({pathname:'/checkout-complete', state:{receipt: res.data.receipt}})
            //needs to redirect back to homepage
        }catch(error){

            console.log(error)
            // props.history.push('/checkout-complete')

        }


    }


    const openItem = _ => {
        document.querySelector('.item').classList.toggle('item-open')
        document.querySelector('.arrow').classList.toggle('arrow-open')
    }
   

    return(
        <div className="checkout">

            <MediaQuery minWidth={800}>

                <Nav />
            </MediaQuery>
            <MediaQuery maxWidth={790}>

                <Nav className="mobile" />
            </MediaQuery>

            <div className="order-summary">

                <div className="item" >
                    <img src={require('../../img/simes_bottle_top_burned.png')} alt=""/>

                    <div className="columns">
                        <div className="cat">

                            <p>Quantity</p>
                            <p>flavor</p>
                            <p>total</p>
                        </div>
                        {
                            props.location.state.cart.map(item => (
                                <div className="item-description">
                                    <p> { item.quantity || 1 } </p>
                                    <p> { item.heat } </p>
                                    <p> ${ item.price } </p>
                                </div>
                                
                            ))
                        }
                    </div>
                </div>

                <div className="summary-results" onClick={openItem}>

                    <p>Subtotal: ${ props.location.state.total }  </p>
                    <p style={{textDecoration: amount>39? 'line-through': 'none'}} >Shipping: { amount > 39 ? '$0.00': '$5.00'} </p>
                    <h1>Total: ${ amount } </h1>
                    <i class="fas fa-angle-down fa-2x arrow"></i>
                </div>


            </div>

            
            <form onSubmit={e => handleSubmit(e)}>

                <img src={require('../../img/white_logo.png')} alt=""/>
                <div className="names">
                    <input 
                        name="firstName"
                        type="text"
                        value={firstName}
                        placeholder="First name" 
                        onChange={e => handleFirstNameChange(e)}
                        />

                    <input 
                        name="LastName"
                        type="text"
                        value={lastName}
                        placeholder="Last name" 
                        onChange={e => handleLastNameChange(e)}
                        />

                </div>

                <input 
                    type="email" 
                    name="email" 
                    value={email} 
                    placeholder="Email" 
                    onChange={e => handleEmailChange(e)}
                />

                <input 
                    required
                    type="text" 
                    name='line1' 
                    value={address.line1} 
                    placeholder="Address 1" 
                    onChange={e => handleAddressChange(e)}
                />

                <input 
                    type="text" 
                    name='line2' 
                    value={address.line2} 
                    placeholder="Address 2"
                    onChange={e => handleAddressChange(e)}

                />
                
                <div className="city_state">
                    <input 
                        required
                        type="text" 
                        name='city' 
                        placeholder="City" 
                        value={address.city}
                        onChange={e => handleAddressChange(e)}

                    />

                    <input 
                        required
                        type="text" 
                        name='state' 
                        placeholder="State" 
                        value={address.state} 
                        onChange={e => handleAddressChange(e)}
                        
                    />
                </div>

                <CardElement />

                
                <button disabled={!buttonActive}>
                    {
                        !buttonActive? <CircularProgress /> : 
                        `Pay: $
                            ${ amount }
                        `
                    }
                </button>
            </form> 
            <MediaQuery minWidth={800}>

                <Footer />
            </MediaQuery>

        </div>

    )
}

export default injectStripe(Form)