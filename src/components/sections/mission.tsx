import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { HandHeart, Scale, Users } from "lucide-react";

const values = [
    {
        icon: <HandHeart className="w-10 h-10 text-primary" />,
        title: "Compassion & Community",
        description: "We are driven by a deep sense of compassion, working hand-in-hand with local communities to create lasting change."
    },
    {
        icon: <Scale className="w-10 h-10 text-primary" />,
        title: "Transparency & Integrity",
        description: "We are committed to the highest standards of transparency, ensuring every donation makes a direct and measurable impact."
    },
    {
        icon: <Users className="w-10 h-10 text-primary" />,
        title: "Sustainability & Empowerment",
        description: "Our projects are designed to be sustainable, empowering individuals and communities to build a self-reliant future."
    }
];

export default function Mission() {
  return (
    <section id="mission" className="py-16 md:py-24 bg-background">
      <div className="container max-w-screen-lg text-center">
        <h2 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl">
          Our Mission & Core Values
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          To uplift and empower vulnerable communities in Uganda by providing access to essential services and fostering opportunities for sustainable growth.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {values.map((value) => (
            <Card key={value.title} className="bg-card hover:shadow-lg transition-shadow">
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
