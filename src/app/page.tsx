import Header from '@/components/header';
import Footer from '@/components/footer';
import Hero from '@/components/sections/hero';
import Mission from '@/components/sections/mission';
import Approach from '@/components/sections/approach';
import Projects from '@/components/sections/projects';
import Impact from '@/components/sections/impact';
import Testimonials from '@/components/sections/testimonials';
import GetInvolved from '@/components/sections/get-involved';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  console.log("Forcing a rebuild to clear any potential caching issues.");
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Mission />
        <Approach />
        <Projects />
        <Impact />
        <Testimonials />
        <GetInvolved />
      </main>
      <Footer />
    </div>
  );
}
