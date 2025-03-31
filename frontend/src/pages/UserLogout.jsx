import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserLogout = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const logoutUser = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        console.log('No token found');
        navigate('/');
        return;
      }

      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.status === 200) {
          localStorage.removeItem('token');
          console.log('Token removed');
          window.location.reload(); // refresh the page
          navigate('/');  
        }
      } catch (error) {
        console.error('Logout failed:', error);
        localStorage.removeItem('token');  
        window.location.reload(); //refresh the page
        navigate('/');
      }
    };

    logoutUser();
  }, [navigate]);

  return (
    <div>
      {children}
    </div>
  );
};

export default UserLogout;
