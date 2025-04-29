import ExperienceSection from "@/components/ExperienceSection";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import StarBackground from "@/components/StarBackground";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <StarBackground/>
      <HeroSection/>
      <ExperienceSection/>
      <ProjectSection/>
    </main>
  );
}
