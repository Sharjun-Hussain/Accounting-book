/* eslint-disable react/prop-types */

import { Outlet, Navigate } from 'react-router-dom';



const PrivateRoutes = () => {
 const user = sessionStorage.getItem('user');
    
  return (
    user ? <Outlet/> : <Navigate to='/login'  />

  )
};

export default PrivateRoutes;
