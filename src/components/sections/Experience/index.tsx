import React, { useState } from "react";
import { experience } from "@/data";
import {
  Box,
  Container,
  Grid2 as Grid,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { useAppContext } from "@/context/AppContext";

interface ExperienceProps {
  title: string;
  company_name: string;
  date: string;
  detail: string[];
}

const ExperienceSection = () => {
  const { experienceRef } = useAppContext();
  const [exerienceSelected, setExperienceSelected] =
    useState<ExperienceProps | null>(null);

  const handleExperienceClic = (experience: ExperienceProps) => {
    setExperienceSelected(experience);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      ref={experienceRef}
    >
      <Container>
        <Typography variant="h5" textAlign="center">
          Experiencia
        </Typography>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <List>
              {experience.map((item) => (
                <ListItemButton onClick={() => handleExperienceClic(item)}>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <ListItemText>
                      <Typography variant="subtitle1">{item.title}</Typography>
                    </ListItemText>
                    <ListItemText>
                      <Typography variant="subtitle2">
                        {item.company_name} | {item.date}
                      </Typography>
                    </ListItemText>
                  </Box>
                </ListItemButton>
              ))}
            </List>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            {exerienceSelected && (
              <Box>
                <Typography variant="h6">{exerienceSelected.title}</Typography>
                <Typography variant="subtitle1">
                  {exerienceSelected.company_name}
                </Typography>
                <Typography variant="subtitle2">
                  {exerienceSelected.date}
                </Typography>
                <Typography variant="body1">
                  {exerienceSelected.detail}
                </Typography>
              </Box>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ExperienceSection;
