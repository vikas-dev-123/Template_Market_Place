import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const UserSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      email: email,
      password: password,
      fullName: {
        firstName: firstname,
        lastName: lastname,
      },
    });

    console.log('User Data:', userData);

    // Reset form fields
    setEmail('');
    setPassword('');
    setFirstname('');
    setLastname('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-3xl p-8 md:p-12 w-full max-w-lg mx-4"
      >
        <form onSubmit={submitHandler} className="space-y-8">
          {/* First & Last Name */}
          <div>
            <h3 className="text-lg font-medium mb-4">What's your name</h3>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2">
                <input
                  type="text"
                  required
                   className="w-full bg-transparent focus:bg-transparent border-b border-white/50 outline-none focus:border-blue-500 transition-all text-lg py-1"
                  placeholder="Firstname"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
              <div className="w-full md:w-1/2">
                <input
                  type="text"
                  required
                  className="w-full bg-transparent focus-bg-transparent border-b border-white/50 outline-none focus:border-blue-500 transition-all text-lg py-1"
                  placeholder="Lastname"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Email */}
          <div>
            <h3 className="text-lg font-medium mb-4">What's your email</h3>
            <input
              type="email"
              required
              className="w-full bg-transparent focus-bg-transparent border-b border-white/50 outline-none focus:border-blue-500 transition-all text-lg py-1"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div>
            <h3 className="text-lg font-medium mb-4">Enter Password</h3>
            <input
              type="password"
              required
              className="w-full bg-transparent focus-bg-transparent border-b border-white/50 outline-none focus:border-blue-500 transition-all text-lg py-1"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition-all duration-300"
          >
            Sign Up
          </motion.button>
        </form>

        {/* Login Link */}
        <p className="text-center mt-6 text-sm">
          Want to login your account?{' '}
          <Link to="/login" className="text-blue-400 hover:text-blue-300 transition-all">
            Login here.
          </Link>
        </p>

        {/* Footer */}
        <div className="mt-6 text-center text-xs leading-tight">
          <p>
            This site is protected by reCAPTCHA and the{' '}
            <span className="underline">Google Privacy Policy</span> and{' '}
            <span className="underline">Terms of Service apply</span>.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default UserSignup;
