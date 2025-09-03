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
        <section className="py-16 md:py-24 bg-secondary text-center">
            <div className="container">
                <h2 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl">
                    See Our Work in Action
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Explore our gallery to see the real-life impact of our programs and the vibrant communities we support.
                </p>
                <Button asChild className="mt-8" size="lg">
                    <Link href="/gallery">
                        View Photo Gallery <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </div>
        </section>
        <GetInvolved />
      </main>
      <Footer />
    </div>
  );
}
