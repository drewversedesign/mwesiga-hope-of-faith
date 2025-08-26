import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const teamMembers = [
    {
        name: "Kaweesa Ivan",
        role: "Founder & Director",
        bio: "With a deep passion for community development, Kaweesa founded the organization to create lasting change for vulnerable children in Uganda.",
        avatar: "https://picsum.photos/200/200",
        aiHint: "man headshot"
    },
    {
        name: "Nakamya Jalia",
        role: "Program Manager",
        bio: "Jalia oversees all our core programs, ensuring that our interventions are effective, sustainable, and meet the needs of the community.",
        avatar: "https://picsum.photos/201/201",
        aiHint: "woman headshot"
    },
    {
        name: "Mutebi John",
        role: "Head of Operations",
        bio: "John manages the day-to-day operations, from logistics to finance, ensuring the smooth running of all our projects.",
        avatar: "https://picsum.photos/202/202",
        aiHint: "male headshot"
    },
    {
        name: "Namugga Sarah",
        role: "Volunteer Coordinator",
        bio: "Sarah is the friendly face that welcomes our volunteers, managing their placements and ensuring they have a meaningful experience.",
        avatar: "https://picsum.photos/203/203",
        aiHint: "female headshot"
    }
];

export default function Team() {
  return (
    <section id="team" className="py-16 md:py-24 bg-background">
      <div className="container max-w-screen-xl">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl">
                Meet Our Dedicated Team
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                The driving force behind our mission to empower communities and change lives.
            </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.name} className="text-center hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="items-center">
                    <Avatar className="h-24 w-24 mb-4">
                        <AvatarImage src={member.avatar} alt={member.name} data-ai-hint={member.aiHint} />
                        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <CardTitle className="font-headline text-xl">{member.name}</CardTitle>
                    <CardDescription className="text-primary">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
