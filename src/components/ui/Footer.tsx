import { Box, Typography } from "@mui/material";

const Footer = () => (
  <Box
    component="footer"
    sx={{
      py: 3,
      textAlign: "center",
      mt: "auto",
      backgroundColor: "#333",
      color: "white",
    }}
  >
    <Typography variant="body1">
      &copy; 2024 Bryan Navarrete. Todos los derechos reservados.
    </Typography>
  </Box>
);

export default Footer;
