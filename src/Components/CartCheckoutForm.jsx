import React, { useState } from 'react';
import { CardElement, injectStripe, ReactStripeElements } from 'react-stripe-elements';
import Axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';

import '../Styles/checkout_form.scss';
const Form = props => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState({
        line1: '',
        line2: '',
        city: '',
        state: ''
    })
    const [buttonActive, setButtonActive] = useState(true)

    const handleChange = e => {
        setName(e.target.value);
        setAddress({
            [e.target.name]: e.target.value
        })
        setEmail(e.target.value);
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setButtonActive(false)
        const total = props.total
        try{
            
            let token = await props.stripe.createToken({
                name
            })
            const res = await Axios.post('https://simes-pepper.herokuapp.com/checkout', {token, name, total, address, email})
            setName('')
            console.log(res)
           
            //needs to redirect back to homepage
        }catch(error){
            console.log(error)
        }

        // props.pepperState.history.push('/checkout-complete')

    }

    return(
        <form onSubmit={e => handleSubmit(e)}>
            <input 
                type="text"
                name="name"
                placeholder="Name" 
                id=""
                value={name}
                onChange={e => handleChange(e)}
            />

            <input type="email" name="email" value={email} onChange={e => handleChange(e)}/>

            <input type="text" name='line1' value={address.line1} placeholder="Address line 1" required/>
            <input type="text" name='line2' value={address.line2} placeholder="Address line 2"/>
            <div className="city_state">
                <input type="text" name='city' value={address.city} placeholder="City" required/>
                <input type="text" name='state' value={address.state} placeholder="State" required/>
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