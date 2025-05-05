/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const Templates = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [purchases, setPurchases] = useState([]);
  const [currentUser, setCurrentUser] = useState({ id: 'user123' });  // Replace with actual user data

  const templates = [
    { name: 'Cyber Punk', image: '/cyberpunk.png', link: '/cyber-punk', cost: 49 },
    { name: 'New Innovations', image: '/studio.png', link: '/studio', cost: 39 },
    { name: 'Futuristic Gadgets', image: '/Mac.png', link: '/Macbook', cost: 59 },
    { name: 'Dark Mode Portfolio', image: '/portfolio.png', link: '/Portfolio', cost: 29 },
    { name: 'DarkTemplate', image: '/traffic.png', link: 'https://vikas-dev-123.github.io/traffic-management/', cost: 45 },
    { name: 'Cuberto', image: '/Cuberto.png', link: 'https://cuberto-three-ashen.vercel.app/', cost: 35 },
    { name: 'Vintage', image: '/vintage.png', link: '/vintage', cost: 40 },
    { name: 'Elegant', image: '/elegant.png', link: '/elegant', cost: 55 },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // ✅ Handle Payment
  const handlePayment = async (token) => {
    if (!selectedTemplate) {
      alert('Please select a template before making the payment.');
      return;
    }
  
    const body = {
      token,
      product: selectedTemplate,
      userId: currentUser.id,  // Use actual user ID
    };
  
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/payment/checkout`, body, {
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.status === 200) {
        alert('Payment Successful! Your template is ready for download.');
  
        // ✅ Auto-Download File (Wait for user confirmation)
        if (window.confirm('Do you want to download the template now?')) {
          const downloadLink = document.createElement('a');
          downloadLink.href = response.data.downloadUrl;  // Backend should provide a correct ZIP URL
          downloadLink.setAttribute('download', '');
          document.body.appendChild(downloadLink);
          downloadLink.click();
          document.body.removeChild(downloadLink);
        }
  
      } else {
        alert(`Payment Failed: ${response.data.message}`);
      }
  
    } catch (error) {
      console.error('Payment Error:', error);
      alert('Payment Error. Please check console logs.');
    }
  };
  

  
  // Fetch purchased templates
  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/payment/purchases/${currentUser.id}`);
        setPurchases(response.data);
      } catch (error) {
        console.error('Error fetching purchases:', error);
      }
    };

    fetchPurchases();
  }, [currentUser.id]);

  return (
    <>
      <Navbar />
      
      <div className="bg-black min-h-screen px-10 py-32">
        <h1 className="text-white text-3xl font-bold mb-8">Choose Your Template</h1>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2 }}
        >
          {templates.map((template, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="rounded-lg overflow-hidden shadow-lg transition-transform duration-300 bg-black border"
            >
              <Link to={template.link}>
                <div
                  className="h-[250px] w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${template.image})` }}
                />
              </Link>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-white">{template.name}</h2>
                <p className="text-white text-lg my-2">${template.cost}</p>
                <div className="flex gap-3">
                  <Link
                    to={template.link}
                    className="bg-transparent border px-4 py-2 text-white font-semibold hover:bg-white hover:text-black rounded"
                  >
                    Preview
                  </Link>

                  {/* Stripe Checkout */}
                  <StripeCheckout
                    stripeKey={import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY}
                    token={handlePayment}
                    amount={template.cost * 100}
                    name={`Buy ${template.name}`}
                    currency="USD"
                    email="customer@example.com"
                    shippingAddress
                    billingAddress
                    zipCode
                  >
                    <button
                      onClick={() => {
                        setSelectedTemplate(template);
                        setIsCheckoutOpen(true);
                      }}
                      className="bg-transparent text-white border px-4 py-2 rounded hover:bg-white hover:text-black font-semibold"
                    >
                      Buy Now
                    </button>
                  </StripeCheckout>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* My Purchases Section */}
        <h2 className="text-white text-3xl font-bold mb-8 mt-16">My Purchased Templates</h2>
        {purchases.length === 0 ? (
          <p className="text-white">No purchases yet.</p>
        ) : (
          purchases.map((purchase) => (
            <div key={purchase._id} className="bg-gray-900 p-4 my-4 rounded text-white">
              <h2 className="text-xl font-semibold">{purchase.templateName}</h2>
              <p>Price: ${purchase.templateCost}</p>
              <a
                href={purchase.templateLink}
                className="bg-blue-600 px-4 py-2 rounded mt-2 inline-block"
              >
                Download Template
              </a>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Templates;
