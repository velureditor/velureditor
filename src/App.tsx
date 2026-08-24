import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors">
      <Navbar />
      <main className="flex-grow">
      <Suspense>
        <Outlet />
      </Suspense>
      </main>
      <Footer />
    </div>
  );
}
