import { Box, Container, Divider } from "@mui/material";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <Box>
      <HeroSection />
      <Container maxWidth="lg">
        <AboutSection />
        <Divider />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </Container>
    </Box>
  );
}
