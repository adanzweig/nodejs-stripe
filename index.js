require('dotenv').config()

const apiKey = process.env.STRIPE_KEY; // Replace with your Stripe secret key
const baseUrl = 'https://api.stripe.com/v1';

// Step 1: Create a product
async function createProduct() {
  try {
    const response = await fetch(`${baseUrl}/products`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'name=Your Product Name&type=service', // Replace 'Your Product Name' and 'service' as needed
    });

    const product = await response.json();
    return product;
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
}

// Step 2: Add a price to the product
async function addPriceToProduct(productId, amount, currency) {
  try {
    const response = await fetch(`${baseUrl}/prices`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `unit_amount=${amount}&currency=${currency}&product=${productId}`,
    });

    const price = await response.json();
    return price;
  } catch (error) {
    console.error('Error adding price to product:', error);
    throw error;
  }
}

// Step 3: Create a payment link for the product
async function createPaymentLink(priceId) {
  try {
    
    const response = await fetch(`${baseUrl}/checkout/sessions`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `payment_method_types[0]=card&
            success_url=https://your-website.com/success&
            cancel_url=https://your-website.com/cancel&
            mode=payment
            &line_items[0][price]=${priceId}
            &line_items[0][quantity]=1`
    });
    
    const session = await response.json();
    return session.url;
  } catch (error) {
    console.error('Error creating payment link:', error);
    throw error;
  }
}

// Usage
(async () => {
  try {
    const product = await createProduct();
    console.log('Product created:', product);

    const price = await addPriceToProduct(product.id, 1000, 'usd'); // $10.00
    console.log('Price added to product:', price);

    const paymentLink = await createPaymentLink(price.id);
    console.log('Payment link:', paymentLink);
  } catch (error) {
    console.error('Error:', error);
  }
})();