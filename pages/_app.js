import '@/styles/globals.css'
import '@/styles/homepage.css'
import '@/styles/SmoothScroll.module.css'
import '@/styles/minihero.module.css'

import {useRouter} from 'next/router';
import {NextUIProvider} from '@nextui-org/react';
import { Footer } from '@/components/Footer';
import Navbarmain from '@/components/Navbar';


function App({ Component, pageProps }) {
  const router = useRouter();
  return (

    <div className="flex flex-col min-h-screen bg-[#ffffff]">
    {/* Page content */}
    <main className="flex-grow">
      <Component {...pageProps} />
    </main>
   <Navbarmain/>
    <Footer />
  </div>
  

  )
}

export default App;