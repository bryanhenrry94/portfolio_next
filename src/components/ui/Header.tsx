import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  List,
  ListItemButton,
  ListItemText,
  Box,
} from "@mui/material";

import { useAppContext } from "@/context/AppContext";

const Header: React.FC = ({}) => {
  const { handleClicHome, handleClicExperience, handleClicProject, handleClicContact } =
    useAppContext();

  return (
    <AppBar
      component="nav"
      position="fixed"
      color="transparent"
      sx={{ boxShadow: 0 }}
    >
      <Toolbar>
        <Box display="flex" flexDirection="row">
          <ListItemButton onClick={handleClicHome}>
            <ListItemText>Inicio</ListItemText>
          </ListItemButton>
          <ListItemButton onClick={handleClicExperience}>
            <ListItemText>Experiencia</ListItemText>
          </ListItemButton>
          <ListItemButton onClick={handleClicProject}>
            <ListItemText>Proyectos</ListItemText>
          </ListItemButton>
          <ListItemButton onClick={handleClicContact}>
            <ListItemText>Contacto</ListItemText>
          </ListItemButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
