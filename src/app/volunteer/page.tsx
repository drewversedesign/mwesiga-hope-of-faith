import Header from '@/components/header';
import Footer from '@/components/footer';
import VolunteerHero from '@/components/sections/volunteer-hero';
import VolunteerRoles from '@/components/sections/volunteer-roles';
import VolunteerTraining from '@/components/sections/volunteer-training';
import WhyVolunteer from '@/components/sections/why-volunteer';
import ApplicationProcess from '@/components/sections/application-process';

export default function VolunteerPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <VolunteerHero />
        <VolunteerRoles />
        <VolunteerTraining />
        <WhyVolunteer />
        <ApplicationProcess />
      </main>
      <Footer />
    </div>
  );
}
