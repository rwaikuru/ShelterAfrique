import '@/styles/globals.css'
import '@/styles/homepage.css'
import {useRouter} from 'next/router';
import {NextUIProvider} from '@nextui-org/react';
import { Footer } from '@/components/Footer';


function App({ Component, pageProps }) {
  const router = useRouter();
  return (

    <div className="flex flex-col min-h-screen bg-[#F3F4F1]">
    {/* Page content */}
    <main className="flex-grow">
      <Component {...pageProps} />
    </main>
    {/* Footer */}
    <Footer />
  </div>
  

  )
}

export default App;