"use client";
import { Box, Button, Typography } from "@mui/material";
import { Info } from "@mui/icons-material";
import { useRouter } from "next/navigation";

const AboutSection = () => {
  const router = useRouter();

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" component="h3">
        Sobre Mí
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Soy consultor, emprendedor y amante de la tecnología. He trabajado en
        grandes empresas del sector informático e industrial. En 2023 fundé mi
        start up de desarrollo de software, Dazzsoft, donde me dedico full-time al
        desarrollo y fortalecimiento de empresas y startups. Mis competencias
        principales son la arquitectura de proyectos, consultoría y desarrollo de
        software, con un enfoque en soluciones empresariales y sistemas ERP.
      </Typography>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Button
          variant="text"
          color="primary"
          startIcon={<Info />}
          sx={{ mt: 2 }}
          onClick={() => router.push("/about")}
        >
          Saber más
        </Button>
      </Box>
    </Box>
  );
};

export default AboutSection;
