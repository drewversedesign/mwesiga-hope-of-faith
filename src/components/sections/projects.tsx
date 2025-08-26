import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
    {
        title: "Clean Water Initiative",
        category: "Healthcare",
        description: "Bringing safe and accessible drinking water to rural villages by constructing wells and water purification systems.",
        image: "https://picsum.photos/600/400?random=1",
        aiHint: "african village water"
    },
    {
        title: "Primary School Build",
        category: "Education",
        description: "Constructing and equipping a new primary school to provide quality education for over 300 children in an underserved area.",
        image: "https://picsum.photos/600/400?random=2",
        aiHint: "ugandan classroom"
    },
    {
        title: "Maternal Health Clinic",
        category: "Healthcare",
        description: "Establishing a clinic focused on providing essential pre-natal and post-natal care for mothers and infants.",
        image: "https://picsum.photos/600/400?random=3",
        aiHint: "ugandan mother child"
    },
    {
        title: "Youth Skills Training",
        category: "Empowerment",
        description: "A vocational training program teaching practical skills like tailoring and carpentry to empower young adults.",
        image: "https://picsum.photos/600/400?random=4",
        aiHint: "ugandan youth learning"
    }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-secondary">
      <div className="container max-w-screen-xl">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl">
            Our Projects
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            From education to healthcare, see how we're making a difference on the ground.
            </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden group transition-transform duration-300 ease-in-out hover:-translate-y-2">
                <CardHeader className="p-0">
                    <div className="aspect-video relative overflow-hidden">
                        <Image 
                            src={project.image}
                            alt={project.title}
                            data-ai-hint={project.aiHint}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
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
