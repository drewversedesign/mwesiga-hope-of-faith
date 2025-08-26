import { Button } from "@/components/ui/button"

const steps = [
    {
        number: "1",
        title: "Submit Application",
        description: "Complete our online volunteer application form with your details."
    },
    {
        number: "2",
        title: "Background Check",
        description: "For the safety of our children, a screening is required for all volunteers."
    },
    {
        number: "3",
        title: "Interview & Training",
        description: "Meet with our team and complete the necessary training program."
    },
    {
        number: "4",
        title: "Start Volunteering",
        description: "Begin your journey of making a difference in children's lives."
    }
]

export default function ApplicationProcess() {
    return (
        <section className="py-16 md:py-24 bg-secondary">
            <div className="container max-w-screen-lg">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl">
                        Application Process
                    </h2>
                </div>
                <div className="relative">
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2"></div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                        {steps.map(step => (
                            <div key={step.number} className="text-center bg-secondary p-4">
                                <div className="flex justify-center mb-4">
                                    <div className="w-12 h-12 flex items-center justify-center bg-primary text-primary-foreground font-bold text-xl rounded-full border-4 border-secondary">
                                        {step.number}
                                    </div>
                                </div>
                                <h3 className="font-bold font-headline text-lg">{step.title}</h3>
                                <p className="text-muted-foreground text-sm mt-1">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                 <div className="text-center mt-12">
                    <Button size="lg">Start Your Application</Button>
                    <p className="text-sm text-muted-foreground mt-4">
                        Questions about volunteering? <a href="mailto:info@hopeoffaithfoundation.org" className="text-primary underline">Contact our volunteer coordinator</a>
                    </p>
                </div>
            </div>
        </section>
    )
}
