import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const impactStats = [
    { value: "60+", label: "Children Supported" },
    { value: "4", label: "Communities Served" },
    { value: "95%", label: "School Enrollment" },
    { value: "40+", label: "Families Empowered" }
];

const testimonials = [
    {
        quote: "The new well has changed everything for our village. Our children are healthier, and we spend less time fetching water and more time on our farms.",
        name: "Aisha N.",
        role: "Community Elder",
        avatar: "https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0064.jpg?raw=true"
    },
    {
        quote: "My children can now go to a real school. The Hope of Faith Foundation has given them a future I could only dream of.",
        name: "David O.",
        role: "Parent",
        avatar: "https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0172.jpg?raw=true"
    }
];

export default function Impact() {
  return (
    <section id="impact" className="py-16 md:py-24 bg-background">
      <div className="container max-w-screen-xl">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl animate-slide-up-fade">
                Our Tangible Impact
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground animate-slide-up-fade [animation-delay:200ms]">
                We measure our success by the lives we change. Here's a glimpse of our achievements.
            </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {impactStats.map((stat, i) => (
                <div key={stat.label} className="text-center animate-slide-up-fade" style={{animationDelay: `${(i * 100) + 400}ms`}}>
                    <p className="text-4xl md:text-5xl font-bold text-primary font-headline">{stat.value}</p>
                    <p className="text-sm md:text-base text-muted-foreground mt-2">{stat.label}</p>
                </div>
            ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, i) => (
                <Card key={testimonial.name} className="bg-card animate-slide-up-fade" style={{animationDelay: `${(i * 100) + 800}ms`}}>
                    <CardContent className="p-6">
                        <blockquote className="text-lg italic text-foreground mb-4">
                            "{testimonial.quote}"
                        </blockquote>
                        <div className="flex items-center">
                            <Avatar className="h-12 w-12 mr-4">
                                <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint="african person" />
                                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-semibold font-headline">{testimonial.name}</p>
                                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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
