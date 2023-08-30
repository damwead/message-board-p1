import '@picocss/pico'
// import '/styles/theme.css'

import Navbar from '../components/Navbar';
import { Toaster } from 'react-hot-toast';

import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { UserContext } from '../lib/context';
import { useUserData } from '../lib/hooks';

function App({ Component, pageProps }) {
  const userData = useUserData();

  return (
    <UserContext.Provider value={userData}>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </UserContext.Provider>
  );
}

export default App