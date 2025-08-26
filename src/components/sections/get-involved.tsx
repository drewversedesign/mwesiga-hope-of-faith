import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, BookOpen, Utensils, CalendarHeart } from "lucide-react";

const volunteerOpportunities = [
    {
        icon: <BookOpen className="w-8 h-8 text-primary" />,
        title: "Teaching Assistant",
        commitment: "4 hours/week",
        description: "Help children with homework and reading skills."
    },
    {
        icon: <Utensils className="w-8 h-8 text-primary" />,
        title: "Meal Preparation",
        commitment: "2 hours/week",
        description: "Assist in preparing nutritious meals for children."
    },
    {
        icon: <CalendarHeart className="w-8 h-8 text-primary" />,
        title: "Event Coordinator",
        commitment: "Flexible",
        description: "Help organize and run community events."
    }
];

const faqs = [
    {
        question: "What are the requirements to become a volunteer?",
        answer: "We welcome volunteers from all backgrounds. Key requirements include being over 18, a passion for our cause, and a commitment of at least two weeks. Medical or teaching backgrounds are a plus but not mandatory."
    },
    {
        question: "Are there costs associated with volunteering?",
        answer: "Volunteers are typically responsible for their own airfare to Uganda. We provide basic, safe accommodation and meals at a subsidized cost. We can provide more details during the application process."
    },
    {
        question: "What kind of work will I be doing?",
        answer: "Volunteer activities vary based on current project needs and your skillset. You could be assisting in classrooms, helping with construction projects, participating in community health outreach, or supporting our administrative team."
    },
    {
        question: "How do I apply?",
        answer: "Simply click the 'Apply to Volunteer' button on our website, fill out the application form, and our coordinator will get in touch with you to discuss the next steps."
    }
];

export default function GetInvolved() {
  return (
    <section id="get-involved" className="py-16 md:py-24 bg-secondary">
      <div className="container max-w-screen-xl">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl animate-slide-up-fade">
                You Can Make a Difference
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground animate-slide-up-fade [animation-delay:200ms]">
                Your support, whether through donations or volunteering, is crucial to our success. Join us in building a brighter future for Uganda.
            </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <Card className="shadow-lg animate-slide-up-fade order-2 lg:order-1" style={{animationDelay: `400ms`}}>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Donate to Our Cause</CardTitle>
                    <CardDescription>Your contribution directly funds our projects and helps us reach more people in need.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p>Every dollar counts. Donations can be made as a one-time gift or a recurring monthly contribution to provide ongoing support.</p>
                    <div className="flex flex-wrap gap-4">
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">One-Time Donation</Button>
                        <Button size="lg" variant="outline">Monthly Giving</Button>
                    </div>
                </CardContent>
                <CardFooter>
                  <p className="text-xs text-muted-foreground">All donations are secure and tax-deductible where applicable.</p>
                </CardFooter>
            </Card>

            <div className="space-y-8 order-1 lg:order-2">
                <div className="animate-slide-up-fade" style={{animationDelay: `600ms`}}>
                    <h3 className="text-2xl font-bold font-headline mb-4">Volunteer With Us</h3>
                     <p className="text-muted-foreground mb-6">
                        Join our mission and make a direct impact in children's lives through volunteering.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {volunteerOpportunities.map((opp, index) => (
                            <Card key={index} className="text-center">
                                <CardContent className="p-6">
                                    <div className="flex justify-center mb-3">{opp.icon}</div>
                                    <h4 className="font-bold font-headline">{opp.title}</h4>
                                    <p className="text-sm text-primary font-semibold">{opp.commitment}</p>
                                    <p className="text-xs text-muted-foreground mt-2">{opp.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                <div className="space-y-4 animate-slide-up-fade" style={{animationDelay: `800ms`}}>
                    <h3 className="text-xl font-bold font-headline">Volunteer FAQs</h3>
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger>{faq.question}</AccordionTrigger>
                                <AccordionContent>
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                    <Button variant="link" asChild className="text-accent hover:text-accent/80 p-0 h-auto">
                        <Link href="#contact">
                            Apply to Volunteer <ArrowRight className="w-4 h-4 ml-2"/>
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}