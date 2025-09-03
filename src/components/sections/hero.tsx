import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section 
      className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-center text-white bg-cover bg-center"
      style={{ backgroundImage: "url('https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0066.jpg?raw=true')" }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="container relative max-w-4xl px-4 animate-fade-in z-10">
        <h1 className="text-4xl font-extrabold tracking-tight font-headline sm:text-5xl md:text-6xl lg:text-7xl">
          Empowering Communities, One Hope at aTime
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-neutral-200">
          Hope of Faith Foundation is dedicated to transforming lives in Uganda through education, healthcare, and sustainable development projects.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="#get-involved">Donate Now</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-white text-white bg-transparent hover:bg-white/10">
            <Link href="#projects">Our Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
