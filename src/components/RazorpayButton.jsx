// src/components/RazorpayButton.jsx
import React, { useEffect } from 'react';

export default function RazorpayButton({ amount = 50000 }) {
  const keyId = import.meta.env.VITE_RAZORPAY_KEY_ID;

  useEffect(() => {
    const s = document.createElement('script');
    s.src = 'https://checkout.razorpay.com/v1/checkout.js';
    s.async = true;
    document.body.appendChild(s);
    return () => document.body.removeChild(s);
  }, []);

  function onClick() {
    const options = {
      key: keyId,
      amount,
      currency: 'INR',
      name: 'Demo Corp',
      description: 'Test Payment',

      config: {
        display: {
          blocks: {
            highlighted: {
              name: 'Pay via UPI',
              instruments: [{ method: 'upi' }]
            }
          },
          sequence: ['block.highlighted'],
          preferences: { show_default_blocks: true }
        }
      },

      handler: res => alert('Success: ' + res.razorpay_payment_id),
      prefill: { name:'Test', email:'t@e.com', contact:'9999999999' },
      theme: { color: '#1D4ED8' }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  }

  return (
    <button
      onClick={onClick}
      className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
    >
      Pay ₹{(amount/100).toFixed(2)}
    </button>
  );
}
