"use client";
import React from "react";
import { Box, Button, Grid2 as Grid, Typography } from "@mui/material";
import { Info } from "@mui/icons-material";
import Image from "next/image";
import { useRouter } from "next/navigation";

import project1 from "@/public/projects/project1.png";
import project2 from "@/public/projects/project2.png";

const itemData = [
  {
    img: project1,
    title: "Breakfast",
    author: "@bkristastucchio",
  },
  {
    img: project2,
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: project1,
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: project1,
    title: "Breakfast",
    author: "@bkristastucchio",
  },
  {
    img: project2,
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: project1,
    title: "Camera",
    author: "@helloimnik",
  },
];

const ProjectsSection = () => {
  const router = useRouter();

  const handleProjectDetail = () => {
    router.push("/projects");
  };

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5">Proyectos</Typography>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12 }}>
          <Typography variant="body2" color="textSecondary">
            Aquí se muestran algunos de los proyectos en los que he trabajado
            recientemente.
          </Typography>
        </Grid>
        {itemData.map((item) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.title}>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={item.img}
                alt={item.title}
                loading="lazy"
                width={200}
                height={100}
                style={{ width: "100%", height: "auto", opacity: 0.8 }}
              />
              <Button
                variant="contained"
                color="primary"
                style={{ position: "absolute" }}
                startIcon={<Info />}
                onClick={handleProjectDetail}
              >
                Detalle
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectsSection;
