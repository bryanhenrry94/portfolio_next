import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  link,
}) => (
  <Card sx={{ maxWidth: 345, margin: "1rem" }}>
    <CardContent>
      <Typography variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button
        size="small"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project
      </Button>
    </CardActions>
  </Card>
);

export default ProjectCard;
