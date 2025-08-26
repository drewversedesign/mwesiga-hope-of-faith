import Header from '@/components/header';
import Footer from '@/components/footer';
import Hero from '@/components/sections/hero';
import Mission from '@/components/sections/mission';
import Projects from '@/components/sections/projects';
import Impact from '@/components/sections/impact';
import GetInvolved from '@/components/sections/get-involved';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Mission />
        <Projects />
        <Impact />
        <GetInvolved />
      </main>
      <Footer />
    </div>
  );
}
