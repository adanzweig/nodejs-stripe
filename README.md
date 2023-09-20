# Stripe Integration with Node.js

This Node.js project demonstrates how to integrate Stripe, a popular payment processing platform, into your Node.js application. With Stripe, you can create products, set prices, and generate payment links for your services or products. This README provides step-by-step instructions on how to set up and use this integration.

## Prerequisites

Before running this project, ensure you have the following prerequisites:

- Node.js installed on your system (at least Node.js 12 or higher).
- A Stripe account. If you don't have one, you can sign up at [Stripe](https://stripe.com/).

## Installation

1. Clone or download this repository to your local machine.

```bash
git clone https://github.com/adanzweig/nodejs-stripe.git
```

2. Navigate to the project directory.

```bash
cd nodejs-stripe
```

3. Create a `.env` file in the project directory and add your Stripe secret key.

```plaintext
STRIPE_KEY=your_stripe_secret_key_here
```

4. Install project dependencies using npm.

```bash
npm install
```

## Usage

This project demonstrates the following steps for Stripe integration:

1. **Step 1: Create a Product**
   - Function: `createProduct()`
   - Usage: Creates a product in your Stripe account. You need to specify the product name and type (e.g., "service").

2. **Step 2: Add a Price to the Product**
   - Function: `addPriceToProduct(productId, amount, currency)`
   - Usage: Adds a price (in a specified currency) to the product you created in Step 1. You need to provide the product ID, amount (in cents), and currency code (e.g., "usd").

3. **Step 3: Create a Payment Link for the Product**
   - Function: `createPaymentLink(priceId)`
   - Usage: Generates a payment link (checkout session) for the product with the specified price. You can customize success and cancel URLs, payment method types, and other options.

4. **Usage Example:**
   - The project includes a usage example at the end of `index.js`. It creates a product, adds a price, and generates a payment link. You can customize this code for your specific use case.

To test the integration:

1. Customize the usage example with your product details and pricing.
2. Run the project using Node.js:

```bash
node index.js
```

3. The product, price, and payment link information will be displayed in the console.

## Example

Here's an example of what the output might look like in the console:

```plaintext
Product created: { id: 'prod_1234567890', name: 'Your Product Name', type: 'service' }
Price added to product: { id: 'price_1234567890', product: 'prod_1234567890', unit_amount: 1000, currency: 'usd' }
Payment link: https://checkout.stripe.com/pay/cs_test_1234567890abc1234567890def12345
```

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it as needed. See the [LICENSE](LICENSE) file for more details.

## Acknowledgments

- This project uses the Stripe API to manage products and payments.

If you have any questions or encounter issues, please don't hesitate to reach out.

Happy coding and enjoy integrating Stripe with your Node.js application!