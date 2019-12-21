import React, { useState, useEffect } from 'react';
import { CardElement, injectStripe, ReactStripeElements } from 'react-stripe-elements';
import Axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';

import '../Styles/checkout_form.scss';
const Form = props => {
    console.log(props)
    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0)
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState({
        line1: '',
        line2: '',
        city: '',
        state: ''
    })
    const [buttonActive, setButtonActive] = useState(true)

    useEffect(() => {
        setAmount(props.cart.length < 1? props.price + 5 || 0: 
            props.cart.length > 0 && props.cart.length < 4? props.cart.reduce((acc, cur) => acc + cur.price, 0) + 5:
            props.cart.reduce((acc, cur) => acc + cur.price, 0))
    },[])

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
        // const amount = props.pepperState.price
        // console.log(amount)

        setButtonActive(false)

        try{
            
            let token = await props.stripe.createToken({
                name: name
            })
            // const res = await Axios.post('https://simes-pepper.herokuapp.com/checkout', {token, name, amount, address, email})
            const res = await Axios.post('http://localhost:3003/checkout', {token, name, amount, address, email})
            setName('')
            console.log(res)
            
            if (props.setOpen) props.setOpen(res)

            props.history.push({pathname:'/checkout-complete', state:{receipt: res.data.receipt}})
            //needs to redirect back to homepage
        }catch(error){
            console.log(error)
            props.history.push('/checkout-complete')

        }


    }


console.log(amount)
   

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

            
            <button disabled={!buttonActive}>
                {
                    !buttonActive? <CircularProgress /> : 
                    `Pay: $
                        ${ amount }
                    `
                }
            </button>
        </form> 
    )
}

export default injectStripe(Form)