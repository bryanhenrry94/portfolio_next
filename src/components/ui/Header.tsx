import { AppBar, Toolbar, Typography, Button, Container, Avatar } from "@mui/material";
import Link from "next/link";

const Header = () => (
  <Container maxWidth="lg">
    <AppBar position="static" color="inherit" sx={{ boxShadow: 0 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          LOGO
        </Typography>
        <Button color="inherit" component={Link} href="/">
          Inicio
        </Button>
        <Button color="inherit" component={Link} href="/about">
          Acerca de Mí
        </Button>
        <Button color="inherit" component={Link} href="/projects">
          Proyectos
        </Button>
        <Button color="inherit" component={Link} href="/contact">
          Contacto
        </Button>
      </Toolbar>
    </AppBar>
  </Container>
);

export default Header;
