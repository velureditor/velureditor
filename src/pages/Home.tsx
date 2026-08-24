import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import CodePreview from '../components/CodePreview';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <CodePreview />
      <Testimonials />
    </div>
  );
}