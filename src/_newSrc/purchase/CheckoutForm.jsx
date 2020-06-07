import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import CircularProgress from '@material-ui/core/CircularProgress';
import MediaQuery from 'react-responsive';

import './checkout.scss';
import './checkout_form.scss';

import Footer from '../footer/Footer';
import Nav from '../header/Nav';
import OrderSummary from './OrderSummary';

const Form = props => {
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('')

    const [address, setAddress] = useState({
        line1: '',
        line2: '',
        city: '',
        state: ''
    })

    const [amount, setAmount] = useState(0)
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

        setButtonActive(false)

        //Errors comes in at res -> data -> error -> code || raw -> message

        try{
            
            let token = await props.stripe.createToken({
                name: `${firstName} ${lastName}`
            })
            // const res = await Axios.post('https://simes-pepper.herokuapp.com/checkout', {token, name:`${firstName}, ${lastName}`, amount, address, email})
            const res = await Axios.post('http://localhost:3003/checkout', {token, name:`${firstName}, ${lastName}`, amount, address, email})
        
            
            if (res.data.error){

                alert(res.data.error.raw.message)
                setButtonActive(true)
            } else {

                setButtonActive(true)

                setFirstName('')
                setLastName('')
                setEmail('')

                setAddress({
                    line1: '',
                    line2: '',
                    city: '',
                    state: ''
                })

                setAmount(0)

                window.location.assign(`${res.data.receipt}`)

            }
            

            
            //needs to redirect back to homepage
        }catch(error){

            console.log(error)

        }


    }


    const openItem = _ => {
        document.querySelector('.item').classList.toggle('item-open')
        document.querySelector('.arrow').classList.toggle('arrow-open')
    }
   

    return(
        <div className="checkout">

            <MediaQuery minWidth={800}>

                <Nav className="standard" history={props.history} />
            </MediaQuery>

            <MediaQuery maxWidth={790}>

                <Nav className="mobile" />
            </MediaQuery>

            <OrderSummary
                location={props.location}
                openItem={openItem}
                amount={amount}
            />

            
            <form onSubmit={handleSubmit}>

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