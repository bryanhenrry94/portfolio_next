import React from "react";
import Image from "next/image";
import {
  Box,
  Typography,
  Grid2 as Grid,
  Button,
  Stack,
  Container,
  Fade,
} from "@mui/material";
import { Download, Email } from "@mui/icons-material";
import DeveloperPicture from "@/public/images/developer.svg";

const HeroSection = () => {
  return (
    <Box sx={{ mb: 4 }} bgcolor="primary.light">
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 1,
              }}
            >
              <Typography variant="h5" component="h2" gutterBottom>
                Hola amigo 👋
              </Typography>
              <Typography variant="h4" component="h1">
                Soy Bryan, <strong>Desarrollador Web</strong>.
              </Typography>
              <Typography variant="body2" component="p" color="textSecondary">
                Hola, soy Bryan, un desarrollador web independiente de Ecuador,
                ayudo a las marcas a convertir sus ideas en productos de alta
                calidad.
              </Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<Email />}
                >
                  Contactar
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<Download />}
                >
                  Descargar CV
                </Button>
              </Stack>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Fade in={true} timeout={2000}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    transform: "translateX(100%)",
                    animation: "fadeInRight 1s forwards",
                    "@keyframes fadeInRight": {
                      "0%": {
                        opacity: 0,
                        transform: "translateX(100%)",
                      },
                      "100%": {
                        opacity: 1,
                        transform: "translateX(0)",
                      },
                    },
                  }}
                >
                  <Image
                    src={DeveloperPicture}
                    alt="Profile"
                    width={400}
                    height={400}
                  />
                </Box>
              </Fade>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
