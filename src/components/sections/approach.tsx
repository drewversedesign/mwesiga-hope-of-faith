import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const steps = [
    {
        number: "01",
        title: "Community Assessment",
        description: "We start by understanding the unique needs and challenges of each community we serve."
    },
    {
        number: "02",
        title: "Collaborative Planning",
        description: "Working with local leaders and families to develop tailored programs that address specific needs."
    },
    {
        number: "03",
        title: "Implementation & Support",
        description: "Delivering comprehensive programs while providing ongoing mentorship and resources."
    },
    {
        number: "04",
        title: "Monitoring & Growth",
        description: "Continuously evaluating impact and adapting our approach to ensure sustainable outcomes."
    }
];

export default function Approach() {
  return (
    <section id="approach" className="py-16 md:py-24 bg-background">
      <div className="container max-w-screen-xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl animate-slide-up-fade">
            Our Four-Step Approach
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground animate-slide-up-fade [animation-delay:200ms]">
            A systematic methodology that ensures sustainable impact and meaningful change in every community we serve.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative animate-slide-up-fade" style={{animationDelay: `${(index * 100) + 400}ms`}}>
              <div className="absolute -top-4 -left-4 w-16 h-16 flex items-center justify-center bg-primary rounded-full text-2xl font-bold text-primary-foreground font-headline z-10">
                {step.number}
              </div>
              <Card className="pt-10 h-full bg-card hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="font-headline">{step.title}</CardTitle>
                  <CardDescription className="pt-2">{step.description}</CardDescription>
                </CardHeader>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
