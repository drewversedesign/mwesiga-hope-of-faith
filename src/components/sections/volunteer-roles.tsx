import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Globe, HeartHandshake, BookOpen } from "lucide-react";

const roles = [
    {
        title: "Education Support",
        description: "Help teach children, assist with homework, and support literacy programs.",
        icon: <BookOpen className="w-10 h-10 text-primary" />,
        requirements: ["Love for children", "Basic literacy skills", "Patience and compassion"],
        commitment: "4+ hours per week"
    },
    {
        title: "Community Outreach",
        description: "Visit families, assess needs, and connect them with available resources.",
        icon: <HeartHandshake className="w-10 h-10 text-primary" />,
        requirements: ["Good communication skills", "Cultural sensitivity", "Transportation"],
        commitment: "6+ hours per week"
    },
    {
        title: "Healthcare Support",
        description: "Assist with health screenings, basic first aid, and health education.",
        icon: <BookOpen className="w-10 h-10 text-primary" />,
        requirements: ["Basic health training", "Care for others", "Attention to detail"],
        commitment: "8+ hours per week"
    },
    {
        title: "International Volunteers",
        description: "Long-term volunteers from abroad to support various programs.",
        icon: <Globe className="w-10 h-10 text-primary" />,
        requirements: ["Relevant skills/education", "Cultural adaptability", "Long-term commitment"],
        commitment: "3+ months"
    }
]

export default function VolunteerRoles() {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container max-w-screen-xl">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {roles.map(role => (
                        <Card key={role.title} className="flex flex-col">
                            <CardHeader className="items-center text-center">
                                {role.icon}
                                <CardTitle className="font-headline text-xl pt-4">{role.title}</CardTitle>
                                <CardDescription>{role.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <h4 className="font-semibold mb-2 text-sm">Requirements:</h4>
                                <ul className="space-y-2 text-muted-foreground text-sm">
                                    {role.requirements.map(req => (
                                        <li key={req} className="flex items-start">
                                            <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 text-green-500 shrink-0" />
                                            <span>{req}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-sm mt-4">
                                    <span className="font-semibold">Time Commitment:</span> {role.commitment}
                                </p>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full">Apply for This Role</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
