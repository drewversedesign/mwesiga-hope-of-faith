import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Aisha N.",
    role: "Beneficiary Parent",
    avatar: "https://picsum.photos/id/1011/200/200",
    aiHint: "african woman",
    quote:
      "The Hope of Faith Foundation has been a blessing to our family. My daughter now has access to quality education that we could have never afforded on our own. We are so grateful for their support.",
  },
  {
    name: "John D.",
    role: "International Volunteer",
    avatar: "https://picsum.photos/id/1012/200/200",
    aiHint: "caucasian man",
    quote:
      "Volunteering with this foundation was a life-changing experience. The team is incredibly dedicated, and seeing the direct impact of our work on the children's lives was profoundly moving.",
  },
  {
    name: "Robert K.",
    role: "Community Leader",
    avatar: "https://picsum.photos/id/1013/200/200",
    aiHint: "african man",
    quote:
      "This organization has brought so much more than just resources to our community; they've brought hope. Their holistic approach is truly making a sustainable difference for our future generations.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-secondary">
      <div className="container max-w-screen-xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl animate-slide-up-fade">
            What People Are Saying
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground animate-slide-up-fade [animation-delay:200ms]">
            Hear from the parents, volunteers, and community members who have experienced our impact firsthand.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
                 <Card key={testimonial.name} className="bg-background flex flex-col animate-slide-up-fade" style={{animationDelay: `${(i * 100) + 400}ms`}}>
                    <CardContent className="pt-6 flex-grow">
                         <p className="text-muted-foreground">"{testimonial.quote}"</p>
                    </CardContent>
                    <CardHeader className="flex-row items-center gap-4 pt-4">
                        <Avatar className="h-12 w-12">
                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                            <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-semibold text-foreground">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                    </CardHeader>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
