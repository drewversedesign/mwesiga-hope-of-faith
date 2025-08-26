import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight, BookOpen, Utensils, CalendarHeart } from "lucide-react";

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
            <Card className="shadow-lg animate-slide-up-fade" style={{animationDelay: `400ms`}}>
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

            <Card className="shadow-lg animate-slide-up-fade" style={{animationDelay: `600ms`}}>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Volunteer With Us</CardTitle>
                    <CardDescription>Join our mission and make a direct impact in children's lives by volunteering your time and skills.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>We have a wide range of volunteer opportunities available, both locally and internationally. Explore how you can get involved and make a difference.</p>
                </CardContent>
                <CardFooter>
                    <Button asChild>
                        <Link href="/volunteer">
                            Explore Volunteer Roles <ArrowRight className="w-4 h-4 ml-2"/>
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
      </div>
    </section>
  );
}
