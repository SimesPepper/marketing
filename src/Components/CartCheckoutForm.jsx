import React, { useState } from 'react';
import { CardElement, injectStripe, ReactStripeElements } from 'react-stripe-elements';
import Axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';

import '../Styles/checkout_form.scss';
const Form = props => {
    console.log(props)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState({
        line1: '',
        line2: '',
        city: '',
        state: ''
    })
    const [buttonActive, setButtonActive] = useState(true)

    const handleAddressChange = e => {
        
        setAddress({...address, [e.target.name]: e.target.value })
    }

    const handleNameChange = e => {

        setName(e.target.value);
    }

    const handleEmailChange = e => {

        setEmail(e.target.value)
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setButtonActive(false)
        const total = props.total
        try{
            
            let token = await props.stripe.createToken({
                name
            })
            const res = await Axios.post('http://localhost:3003/checkout', {token, name, total, address, email})
            // const res = await Axios.post('https://simes-pepper.herokuapp.com/checkout', {token, name, total, address, email})
            setName('')
            console.log(res)
            props.pepperState.history.push({pathname:'/checkout-complete', state:{receipt: res.data.receipt}})
            
        }catch(error){
            console.log(error)
        }

    }
    return(
        <form onSubmit={e => handleSubmit(e)}>
            <input 
                name="name"
                type="text"
                value={name}
                placeholder="Name" 
                onChange={e => handleNameChange(e)}
                />

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
                placeholder="Address line 1" 
                onChange={e => handleAddressChange(e)}
            />

            <input 
                type="text" 
                name='line2' 
                value={address.line2} 
                placeholder="Address line 2"
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
            <button disabled={!buttonActive}>{
                !buttonActive? <CircularProgress /> : 
                `Pay: $${
                    props.cart.length < 1? 0: 
                    props.cart.length > 0 && props.cart.length < 4? props.cart.reduce((acc, cur) => acc + cur.price, 0) + 5:
                    props.cart.reduce((acc, cur) => acc + cur.price, 0)
                }`
                
            }</button>
            
        </form>
    )


}

export default injectStripe(Form)