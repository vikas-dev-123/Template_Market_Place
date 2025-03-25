import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { UserDataContext } from '../context/UserContext';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // eslint-disable-next-line no-unused-vars
  const [userData, setUserData] = useState({})

  // eslint-disable-next-line no-unused-vars
  const {user , setUser} = useContext(UserDataContext)
  const navigate = useNavigate()

  const submitHandler = async(e) => {
    e.preventDefault()
    
    const userData = {
      email:email,
      password:password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)

    if(response.status === 200) {
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }

    setEmail('')
    setPassword('')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-3xl p-8 md:p-12 w-full max-w-lg mx-4"
      >
        <h2 className="text-3xl font-bold text-center mb-8">Login</h2>
        
        <form onSubmit={submitHandler} className="space-y-8">
          {/* Email Field */}
          <div>
            <h3 className="text-lg font-medium mb-4">Email</h3>
            <input
              type="email"
              required
              className="w-full bg-transparent focus:bg-transparent border-b border-white/50 outline-none focus:border-blue-500 transition-all text-lg py-1"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Field */}
          <div>
            <h3 className="text-lg font-medium mb-4">Password</h3>
            <input
              type="password"
              required
              className="w-full bg-transparent focus:bg-transparent border-b border-white/50 outline-none focus:border-blue-500 transition-all text-lg py-1"
              placeholder="Enter your password"
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
            Login
          </motion.button>
        </form>

        {/* Forgot Password & Signup Links */}
        <div className="text-center mt-6">
          <p className="text-sm">
            Forgot your password?{' '}
            <Link to="/forgot-password" className="text-blue-400 hover:text-blue-300 transition-all">
              Reset here.
            </Link>
          </p>
          <p className="text-sm mt-4">
            Want to create an account?{' '}
            <Link to="/signup" className="text-blue-400 hover:text-blue-300 transition-all">
              Sign up here.
            </Link>
          </p>
        </div>

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

export default Login;
