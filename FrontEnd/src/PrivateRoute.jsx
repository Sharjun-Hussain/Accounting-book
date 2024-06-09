/* eslint-disable react/prop-types */

import { Outlet, Navigate } from 'react-router-dom';
import { getCookie } from 'react-use-cookie';

const PrivateRoutes = () => {

    const token = getCookie('token');
    
  return (
   token ? <Outlet/> : <Navigate to='/login'  />
  )
};

export default PrivateRoutes;
