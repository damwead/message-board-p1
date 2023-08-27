// import '/styles/globals.css'
import '@picocss/pico'
import '/styles/theme.css'

import Navbar from '../components/Navbar';


function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default App