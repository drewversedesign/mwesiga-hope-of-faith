import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, HeartPulse, ShieldCheck, Users } from "lucide-react";
import Link from "next/link";

const impactStats = [
    { value: "90+", label: "Children Supported", description: "Direct beneficiaries of our programs" },
    { value: "4", label: "Communities Served", description: "Across rural and urban Uganda" },
    { value: "95%", label: "School Enrollment", description: "Of children in our education program" },
    { value: "45+", label: "Families Empowered", description: "Through economic support programs" }
];

const programOutcomes = [
    {
        title: "Education Program",
        icon: <BookOpen className="w-8 h-8 text-primary" />,
        outcomes: [
            "95% of children improved their reading skills",
            "88% showed significant academic improvement",
            "92% school attendance rate",
            "15 children received scholarships for higher education"
        ]
    },
    {
        title: "Health & Nutrition",
        icon: <HeartPulse className="w-8 h-8 text-primary" />,
        outcomes: [
            "78% reduction in malnutrition cases",
            "500+ children received health screenings",
            "100% vaccination coverage in program areas",
            "25 children received specialized medical care"
        ]
    },
    {
        title: "Family Empowerment",
        icon: <Users className="w-8 h-8 text-primary" />,
        outcomes: [
            "150 families started small businesses",
            "200% average increase in family income",
            "85% of families achieved food security",
            "50 mothers completed skills training"
        ]
    },
    {
        title: "Child Protection",
        icon: <ShieldCheck className="w-8 h-8 text-primary" />,
        outcomes: [
            "30 children removed from dangerous situations",
            "100% of cases followed up regularly",
            "45 families reunified successfully",
            "12 children placed in loving foster homes"
        ]
    }
];

export default function Impact() {
  return (
    <section id="impact" className="py-16 md:py-24 bg-secondary">
      <div className="container max-w-screen-xl">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl animate-slide-up-fade">
                Our Impact
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground animate-slide-up-fade [animation-delay:200ms]">
                See how your support is transforming lives and building stronger communities across Uganda. Every number represents a child whose life has been changed.
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {impactStats.map((stat, i) => (
                <Card key={stat.label} className="text-center bg-background p-6 animate-slide-up-fade" style={{animationDelay: `${(i * 100) + 400}ms`}}>
                    <p className="text-5xl font-bold text-primary font-headline">{stat.value}</p>
                    <p className="text-lg font-semibold text-foreground mt-2">{stat.label}</p>
                    <p className="text-sm text-muted-foreground mt-1">{stat.description}</p>
                </Card>
            ))}
        </div>
        
        <div className="text-center mb-12">
            <h3 className="text-2xl font-bold tracking-tight font-headline sm:text-3xl animate-slide-up-fade [animation-delay:600ms]">
                Program Outcomes
            </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {programOutcomes.map((program, i) => (
                <Card key={program.title} className="bg-background animate-slide-up-fade" style={{animationDelay: `${(i * 100) + 800}ms`}}>
                    <CardHeader className="flex flex-row items-center gap-4">
                        {program.icon}
                        <CardTitle className="font-headline text-xl">{program.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2 text-muted-foreground">
                            {program.outcomes.map((outcome, j) => (
                                <li key={j} className="flex items-start">
                                    <span className="text-primary font-bold mr-2 mt-1">&#8226;</span>
                                    <span>{outcome}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            ))}
        </div>

        <div className="text-center animate-slide-up-fade" style={{animationDelay: `1200ms`}}>
            <h3 className="text-2xl font-bold tracking-tight font-headline sm:text-3xl">Be Part of Our Growing Impact</h3>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
                Join us in creating even more success stories and transforming more lives.
            </p>
            <Button asChild className="mt-6" size="lg">
                <Link href="#get-involved">
                    Support Our Mission <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
