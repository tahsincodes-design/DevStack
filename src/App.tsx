import { Suspense, useState } from 'react';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import TechSection from './Components/TechSection/TechSection';
import Footer from './Components/Footer';
import type { TStackData } from './Types/technology';
import './index.css';
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const stackFetch = async (): Promise<TStackData[]> => {
  const response = await fetch('/data.json');
  return await response.json();
};

function App() {
  const [stackPromise] = useState(() => stackFetch());

  return (
    <div className="bg-slate-50/50 min-h-screen flex flex-col justify-between">
      <div>
        <NavBar />
        <Hero />
        <Suspense
          fallback={
            <div className="flex flex-col justify-center items-center py-20 gap-3">
              <span className="loading loading-spinner loading-lg text-pink-500"></span>
              <h2 className="text-center text-xl font-bold text-gray-600">Loading Dev Stack Data...</h2>
            </div>
          }
        >
          <TechSection stackPromise={stackPromise} />
        </Suspense>
      </div>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
}

export default App;