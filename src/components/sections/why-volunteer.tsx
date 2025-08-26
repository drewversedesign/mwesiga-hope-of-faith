import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Heart, Briefcase, Users, BadgeCheck } from "lucide-react"

const benefits = [
    {
        icon: <Heart className="w-8 h-8 text-accent" />,
        title: "Make a Real Impact",
        description: "See the direct results of your work in children's lives."
    },
    {
        icon: <Briefcase className="w-8 h-8 text-accent" />,
        title: "Professional Development",
        description: "Gain valuable experience and skills in a new environment."
    },
    {
        icon: <Users className="w-8 h-8 text-accent" />,
        title: "Community",
        description: "Join a passionate team of like-minded individuals from around the world."
    },
    {
        icon: <BadgeCheck className="w-8 h-8 text-accent" />,
        title: "Support",
        description: "Receive comprehensive training and ongoing mentorship from our team."
    },
]

export default function WhyVolunteer() {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container max-w-screen-lg">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl">
                        Why Volunteer With Us?
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map(benefit => (
                        <Card key={benefit.title} className="text-center border-0 shadow-none">
                             <CardHeader className="items-center">
                                <div className="bg-accent/10 p-4 rounded-full">
                                    {benefit.icon}
                                </div>
                                <CardTitle className="font-headline text-lg pt-4">{benefit.title}</CardTitle>
                             </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-sm">{benefit.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
