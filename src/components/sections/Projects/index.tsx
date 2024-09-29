"use client";
import React from "react";
import { Box, Grid2 as Grid, Toolbar, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context/AppContext";

const ProjectsSection = () => {
  const { projectRef } = useAppContext();
  const router = useRouter();

  const handleProjectDetail = () => {
    router.push("/projects");
  };

  return (
    <Box sx={{ height: "100vh" }} ref={projectRef}>
      <Toolbar />
      <Typography variant="h5" textAlign="center">
        Proyectos
      </Typography>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12 }}>
          <Typography variant="body2" color="textSecondary">
            Aquí se muestran algunos de los proyectos en los que he trabajado
            recientemente.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectsSection;
