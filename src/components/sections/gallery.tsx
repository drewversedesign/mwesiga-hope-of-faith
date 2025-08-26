import Image from "next/image";

const images = [
  { src: "https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0161.jpg?raw=true", alt: "Children learning", aiHint: "children learning" },
  { src: "https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0163.jpg?raw=true", alt: "Community gathering", aiHint: "community gathering" },
  { src: "https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0164.jpg?raw=true", alt: "Children in a classroom", aiHint: "ugandan classroom" },
  { src: "https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0168.jpg?raw=true", alt: "Mother with child", aiHint: "ugandan mother child" },
  { src: "https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0066.jpg?raw=true", alt: "Youth learning skills", aiHint: "ugandan youth learning" },
  { src: "https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0064.jpg?raw=true", alt: "Happy woman", aiHint: "african person" },
  { src: "https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0172.jpg?raw=true", alt: "Happy man", aiHint: "african person" },
  { src: "https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0057.jpg?raw=true", alt: "Foundation's location", aiHint: "uganda map" },
  { src: "https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0062.jpg?raw=true", alt: "Happy children", aiHint: "happy children" },
  { src: "https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0058.jpg?raw=true", alt: "Children playing", aiHint: "safe children" },
  { src: "https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0053.jpg?raw=true", alt: "Food distribution", aiHint: "food aid" },
  { src: "https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0170.jpg?raw=true", alt: "Vocational training", aiHint: "vocational training" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-background">
      <div className="container max-w-screen-xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl">
            Photo Gallery
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A glimpse into the lives we're transforming and the communities we serve.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="w-full h-64 relative rounded-lg overflow-hidden group">
              <Image
                src={image.src}
                alt={image.alt}
                data-ai-hint={image.aiHint}
                fill
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300 ease-in-out"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}