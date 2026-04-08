import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Approach from '@/components/Approach';
import Stack from '@/components/Stack';
import Experience from '@/components/Experience';
import About from '@/components/About';
import Contact from '@/components/Contact';
import SnakeGame from '@/components/SnakeGame';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Approach />
        <Stack />
        <Experience />
        <About />
        <Contact />
        <SnakeGame />
      </main>
      <Footer />
    </>
  );
}
