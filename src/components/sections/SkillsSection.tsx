import React from "react";
import { Box, Grid2 as Grid, Typography } from "@mui/material";
import SkillCard from "@/components/ui/SkillCard";

const skills = [
  {
    title: "React",
    description: "A JavaScript library for building user interfaces",
    value: 90,
  },
  {
    title: "Next.js",
    description: "The React Framework for Production",
    value: 85,
  },
  {
    title: "Node.js",
    description: "A JavaScript runtime built on Chrome's V8 JavaScript engine",
    value: 85,
  },
  {
    title: "Express",
    description: "Fast, unopinionated, minimalist web framework for Node.js",
    value: 80,
  },
  {
    title: "MongoDB",
    description: "The database for modern applications",
    value: 85,
  },
  {
    title: "PostgreSQL",
    description: "The world's most advanced open source database",
    value: 80,
  },
  {
    title: "MySQL",
    description: "The world's most popular open source database",
    value: 80,
  },
  {
    title: "Docker",
    description: "Empowering App Development for Developers",
    value: 85,
  },
  {
    title: "Git",
    description: "Fast, scalable, distributed revision control system",
    value: 90,
  },
];

const SkillsSection = () => {
  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h5" component="h3">
        Tecnologías
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Estas son algunas de las tecnologías con las que trabajo.
      </Typography>
      <Grid container spacing={1} sx={{ m: 2 }}>
        {skills.map((skill) => (
          <Grid key={skill.title} size={{ xs: 12, sm: 6, md: 2 }}>
            <SkillCard {...skill} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SkillsSection;
