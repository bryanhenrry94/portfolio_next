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
  Toolbar,
} from "@mui/material";
import { Download, Email } from "@mui/icons-material";

import heroImage from "@/assets/images/freelancer.svg";
import { useAppContext } from "@/context/AppContext";

interface IHeroSectionProps {
  welcome: string;
  title: string;
  subtitle: string;
}

const HeroSection: React.FC<IHeroSectionProps> = ({
  welcome,
  title,
  subtitle,
}) => {
  const { heroRef } = useAppContext();

  return (
    <Box
      sx={{
        height: "100vh",
      }}
      ref={heroRef}
    >
      <Container
        sx={{
          height: "100%",
          width: { xs: "100%" },
        }}
      >
        <Grid container spacing={2} sx={{ height: "100%" }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                justifyContent: "center",
                gap: 1,
              }}
            >
              <Typography variant="h5" component="p" gutterBottom>
                {welcome}
              </Typography>
              <Typography
                variant="h2"
                component="h1"
                sx={{ fontWeight: 700, letterSpacing: 3 }}
              >
                {title}
              </Typography>
              <Typography variant="h6" component="p">
                {subtitle}
              </Typography>
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
            <Fade in={true} timeout={2000}>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
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
                <Image src={heroImage} alt="Profile" width={350} height={350} />
              </Box>
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
