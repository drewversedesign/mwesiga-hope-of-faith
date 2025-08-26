import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, RefreshCw, Award } from "lucide-react"

const trainingInfo = [
    {
        icon: <Clock className="w-8 h-8 text-primary" />,
        title: "40 hours",
        description: "Initial Training"
    },
    {
        icon: <RefreshCw className="w-8 h-8 text-primary" />,
        title: "Monthly",
        description: "Ongoing Support"
    },
    {
        icon: <Award className="w-8 h-8 text-primary" />,
        title: "Certificate",
        description: "Upon Completion"
    }
]

export default function VolunteerTraining() {
    return (
        <section className="py-16 md:py-24 bg-secondary">
            <div className="container max-w-screen-lg">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl">
                        Volunteer Training Program
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        All volunteers receive comprehensive training to ensure effective and safe interactions with children and families.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {trainingInfo.map(info => (
                        <Card key={info.title}>
                            <CardContent className="p-8">
                                <div className="flex justify-center mb-4">{info.icon}</div>
                                <h3 className="text-2xl font-bold font-headline">{info.title}</h3>
                                <p className="text-muted-foreground mt-1">{info.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Button variant="outline" size="lg">Learn About Training</Button>
                </div>
            </div>
        </section>
    )
}
