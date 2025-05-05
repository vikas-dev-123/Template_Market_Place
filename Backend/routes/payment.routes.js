const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Purchase = require('../models/purchase.model');

// 🔹 Template Repository Mapping
const templateRepos = {
  'Cyber Punk': 'cyber_punk_animation',
  'New Innovations': 'studioLandingPage',
  'Futuristic Gadgets': '3D-model',
  'Dark Mode Portfolio': 'dark_mode_portfolio',
  'DarkTemplate': 'traffic-management',
  'Cuberto': 'Cuberto',
  'Vintage': 'vintage_template',
  'Elegant': 'elegant_template',
};

router.post('/checkout', async (req, res) => {
  const { token, product, userId } = req.body;

  if (!token || !product || !userId) {
    return res.status(400).json({ message: 'Missing payment data' });
  }

  try {
    // 💳 Process Payment with Stripe
    const charge = await stripe.charges.create({
      amount: product.cost * 100, // Convert to cents
      currency: 'usd',
      source: token.id,
      description: `Payment for ${product.name}`
    });

    // ✅ Get Correct GitHub Download URL
    const repoName = templateRepos[product.name] || 'default_template';
    const downloadUrl = `https://github.com/vikas-dev-123/${repoName}/archive/refs/heads/main.zip`;

    // ✅ Save purchase in MongoDB
    const newPurchase = new Purchase({
      userId,
      templateName: product.name,
      templateCost: product.cost,
      templateLink: downloadUrl
    });

    await newPurchase.save();
    res.status(200).json({ message: 'Payment successful', downloadUrl });

  } catch (error) {
    console.error('Payment Error:', error);
    res.status(500).json({ message: 'Payment failed', error: error.message });
  }
});

module.exports = router;
