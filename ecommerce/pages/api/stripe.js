const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // console.log(req.body.cartItems)
    try {
      const params = {
        submit_type: 'pay',
        mode: 'payment',
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        shipping_options: [
            {shipping_rate: 'shr_1M36XnBYijAbRYETJXh9w9Be'},
            {shipping_rate: 'shr_1M36YpBYijAbRYETrd3mlkwE'}
        ],
        line_items: req.body.cartItems.map((item) => {
            const img = item.image[0].asset._ref
            const newImage = img.replace('image-', 'https://cdn.sanity.io/images/p4zyz1e4/production/').replace('-webp', '.webp')
            // console.log('IMAGE', newImage)
            return{
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: item.name,
                        imagems: [newImage]
                    },
                    unit_amount: item.price * 100
                },
                ajustable_quantity: {
                    enabled: true,
                    minmun: 1
                },
                quantity: item.quantity
            }
        }),
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      }
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params)
      res.status(200).json(session)

    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}