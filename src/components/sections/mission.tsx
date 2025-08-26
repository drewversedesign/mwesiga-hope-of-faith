import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { HandHeart, Scale, Users, Award } from "lucide-react";

const values = [
    {
        icon: <HandHeart className="w-10 h-10 text-primary" />,
        title: "Love",
        description: "Unconditional love and compassion for every child."
    },
    {
        icon: <Scale className="w-10 h-10 text-primary" />,
        title: "Integrity",
        description: "Highest standards of transparency and accountability."
    },
    {
        icon: <Award className="w-10 h-10 text-primary" />,
        title: "Excellence",
        description: "Striving for excellence in every program and service."
    },
    {
        icon: <Users className="w-10 h-10 text-primary" />,
        title: "Community",
        description: "Believing in the power of community to transform lives."
    }
];

export default function Mission() {
  return (
    <section id="mission" className="py-16 md:py-24 bg-background">
      <div className="container max-w-screen-lg text-center">
        <h2 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl animate-slide-up-fade">
          Our Mission & Core Values
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground animate-slide-up-fade [animation-delay:200ms]">
          Transforming lives through love and care, providing holistic care for vulnerable children in Uganda.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
          {values.map((value, i) => (
            <Card key={value.title} className="bg-card hover:shadow-lg transition-shadow animate-slide-up-fade" style={{animationDelay: `${(i * 100) + 400}ms`}}>
              <CardHeader>
                <div className="mb-4">{value.icon}</div>
                <CardTitle className="font-headline">{value.title}</CardTitle>
                <CardDescription className="pt-2">{value.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
