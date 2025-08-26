import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
    {
        title: "Education Support & Scholarships",
        category: "Education",
        description: "School fees coverage, learning materials, uniforms, and after-school tutoring for over 30 children.",
        image: "https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0164.jpg?raw=true",
        aiHint: "ugandan classroom"
    },
    {
        title: "Health & Nutrition Programs",
        category: "Healthcare",
        description: "Providing regular health checkups, nutritious daily meals, and health education for 45+ children.",
        image: "https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0168.jpg?raw=true",
        aiHint: "ugandan mother child"
    },
    {
        title: "Child Protection Services",
        category: "Protection",
        description: "Offering safe shelter, counseling services, and legal protection to more than 15 children in need.",
        image: "https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0058.jpg?raw=true",
        aiHint: "safe children"
    },
    {
        title: "Family Empowerment Initiatives",
        category: "Empowerment",
        description: "Supporting 25+ families with skills training, microfinance loans, and income generation programs.",
        image: "https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0066.jpg?raw=true",
        aiHint: "ugandan youth learning"
    },
    {
        title: "Emergency Assistance",
        category: "Aid",
        description: "Delivering emergency food aid, temporary shelter, and medical support to over 20 families in crisis.",
        image: "https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0053.jpg?raw=true",
        aiHint: "food aid"
    },
    {
        title: "Vocational Training",
        category: "Empowerment",
        description: "Equipping 12+ youth with technical skills, business mentorship, and job placement support.",
        image: "https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0170.jpg?raw=true",
        aiHint: "vocational training"
    }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-secondary">
      <div className="container max-w-screen-xl">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl">
            Our Core Programs & Services
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            From education to empowerment, see how we're making a difference on the ground.
            </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden group transition-transform duration-300 ease-in-out hover:-translate-y-2">
                <CardHeader className="p-0">
                    <div className="aspect-video relative overflow-hidden">
                        <Image 
                            src={project.image}
                            alt={project.title}
                            data-ai-hint={project.aiHint}
                            width={600}
                            height={400}
                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300 ease-in-out"
                        />
                    </div>
                </CardHeader>
                <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-2 bg-accent text-accent-foreground">{project.category}</Badge>
                    <CardTitle className="font-headline text-xl mb-2">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
