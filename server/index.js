const express = require('express');
const uuid = require('uuid/v4');
const stripe = require('stripe')('sk_test_LFqFcUs2vKC7JViJRcXIfSFP00JbaQJhnx');

const server = express();

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    res.send('got it')
})
server.post('/checkout', async (req, res) => {
    console.log(req.body);

    const status;
    const error;
    const { product, token } = req.body;
    const idempotency_key = uuid()
    
    try{

        const customer = await stripe.customer.create({
            email: token.email,
            source: token.id
        })
        const charge = await stripe.charges.create({
            amount: product.price * 100,
            currency: "usd",
            customer: customer.id,
            receipt_email: token.email,
            description: `Purchased ${product.name}`,
            shipping: {
                name: token.card.name,
                address: {
                    line1: token.card.address_line1,
                    line2: token.card.address_line2,
                    city: token.card.address_city,
                    country: token.card.address_country,
                    postal_code: token.card.address_zip
                }

            }
            
        },{
            idempotency_key
        });

        console.log({charge})
        status = 'success'
        

    }catch (error) {
        console.error(error)
        status = 'failure'
    }

    res.json({ status, error })
})

const port = process.env.PORT || 3003;

server.listen(port, _ => {
    console.log(`running on ${port}`)
})  