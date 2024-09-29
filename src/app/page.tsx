"use client";
import { Box, Container } from "@mui/material";

import HeroSection from "@/components/sections/Hero";
import ProjectsSection from "@/components/sections/Projects";
import ContactSection from "@/components/sections/Contact";
import ExperienceSection from "@/components/sections/Experience";

import { portfolio } from "@/data";

const HomePage: React.FC = () => {
  return (
    <Box>
      <HeroSection
        welcome={portfolio.welcome}
        title={portfolio.title}
        subtitle={portfolio.subtitle}
      />
      <Container maxWidth="lg">
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </Container>
    </Box>
  );
};

export default HomePage;
