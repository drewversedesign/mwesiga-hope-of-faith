import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const projects = [
    {
        title: "Education Support & Scholarships",
        category: "Education",
        description: "Providing quality education opportunities, school supplies, uniforms, and scholarships to children from vulnerable families.",
        provides: [
            "School fees coverage",
            "Learning materials",
            "Uniforms and supplies",
            "After-school tutoring"
        ],
        metric: "30+ children",
        image: "https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0164.jpg?raw=true",
        aiHint: "ugandan classroom"
    },
    {
        title: "Health & Nutrition Programs",
        category: "Healthcare",
        description: "Ensuring children receive proper healthcare, regular health screenings, and nutritious meals for healthy development.",
        provides: [
            "Regular health checkups",
            "Nutritious daily meals",
            "Vaccination programs",
            "Health education"
        ],
        metric: "45+ children",
        image: "https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0168.jpg?raw=true",
        aiHint: "ugandan mother child"
    },
    {
        title: "Child Protection Services",
        category: "Protection",
        description: "Creating safe environments and protecting children from abuse, exploitation, and harmful situations.",
        provides: [
            "Safe shelter programs",
            "Counseling services",
            "Legal protection",
            "Emergency response"
        ],
        metric: "15+ children",
        image: "https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0058.jpg?raw=true",
        aiHint: "safe children"
    },
    {
        title: "Family Empowerment Initiatives",
        category: "Empowerment",
        description: "Supporting families with skills training, microfinance, and resources to become self-reliant and stable.",
        provides: [
            "Skills training",
            "Microfinance loans",
            "Parenting support",
            "Income generation"
        ],
        metric: "25+ families",
        image: "https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0066.jpg?raw=true",
        aiHint: "ugandan youth learning"
    },
    {
        title: "Emergency Assistance",
        category: "Aid",
        description: "Providing immediate support during crises, natural disasters, and urgent family situations.",
        provides: [
            "Emergency food aid",
            "Temporary shelter",
            "Medical emergency support",
            "Crisis intervention"
        ],
        metric: "20+ families",
        image: "https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0053.jpg?raw=true",
        aiHint: "food aid"
    },
    {
        title: "Vocational Training",
        category: "Empowerment",
        description: "Equipping older children and youth with practical skills for employment and entrepreneurship.",
        provides: [
            "Technical skills training",
            "Business mentorship",
            "Job placement support",
            "Entrepreneurship guidance"
        ],
        metric: "12+ youth",
        image: "https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0170.jpg?raw=true",
        aiHint: "vocational training"
    }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-secondary">
      <div className="container max-w-screen-xl">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl animate-slide-up-fade">
                Our Programs
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground animate-slide-up-fade [animation-delay:200ms]">
                Comprehensive support systems designed to nurture, protect, and empower children and families in Uganda.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <Card key={project.title} className="flex flex-col overflow-hidden group transition-transform duration-300 ease-in-out hover:-translate-y-2 animate-slide-up-fade" style={{animationDelay: `${(i * 100) + 400}ms`}}>
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
                <CardContent className="p-6 flex flex-col flex-grow">
                    <Badge variant="secondary" className="mb-2 bg-accent text-accent-foreground w-fit">{project.category}</Badge>
                    <CardTitle className="font-headline text-xl mb-2">{project.title}</CardTitle>
                    <CardDescription className="mb-4">{project.description}</CardDescription>
                    
                    <div className="mt-auto space-y-4">
                        <div>
                            <h4 className="font-semibold text-sm mb-2 text-foreground">What We Provide:</h4>
                            <ul className="space-y-1">
                                {project.provides.map(item => (
                                    <li key={item} className="flex items-center text-sm text-muted-foreground">
                                        <Check className="w-4 h-4 mr-2 text-primary" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex items-center justify-between text-sm font-medium">
                           <Badge variant="outline">{project.metric} Supported</Badge>
                           <Button variant="link" className="p-0 h-auto text-primary">Learn More</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
