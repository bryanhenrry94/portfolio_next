"use client";
import React from "react";
import {
  Box,
  Button,
  IconButton,
  Container,
  Grid2 as Grid,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { Send, Call, WhatsApp, Email } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context/AppContext";

import ImgContactUs from "@/assets/images/contact_us.svg";

const ContactSection = () => {
  const { contactRef } = useAppContext();

  const router = useRouter();

  const handleReservarAsesoria = () => {
    router.push("/contact");
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      ref={contactRef}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            borderRadius: 2,
            alignContent: "center",
            mb: 4,
          }}
        >
          <Grid container spacing={2} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h4" align="center" sx={{ m: 2 }}>
                Contactar
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                align="center"
                sx={{ m: 2 }}
              >
                Puedes contactarme por medio de las siguientes opciones:
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<Email />}
                  onClick={handleReservarAsesoria}
                >
                  Contactar
                </Button>
              </Box>
              <Stack
                direction="row"
                spacing={5}
                sx={{ mt: 2, justifyContent: "center" }}
              >
                <IconButton color="primary">
                  <WhatsApp />
                </IconButton>
                <IconButton color="primary">
                  <Call />
                </IconButton>
                <IconButton color="primary">
                  <Send />
                </IconButton>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Image
                src={ImgContactUs}
                alt="Contacto"
                width={400}
                height={250}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactSection;
