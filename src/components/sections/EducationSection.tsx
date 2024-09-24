import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { School } from "@mui/icons-material";

interface Education {
  id: number;
  title: string;
  date: string;
  content: string;
}

const EducationItem: React.FC<Education> = ({ title, date, content }) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Box
        sx={{
          display: "flex",
          // alignItems: "center",
        }}
      >
        <IconButton>
          <School />
        </IconButton>
        <Box>
          <Typography variant="h6" component="h4">
            {title}
          </Typography>
          <Typography variant="subtitle1" component="p">
            {date}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {content}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const EducationSection = () => {
  const educations = [
    {
      id: 1,
      title: "Universidad De Guayaquil",
      date: "2012-2028",
      content: "Education content goes here",
    },
    {
      id: 2,
      title: "Universidad De Guayaquil",
      date: "2012-2028",
      content: "Education content goes here",
    },
    {
      id: 3,
      title: "Universidad De Guayaquil",
      date: "2012-2028",
      content: "Education content goes here",
    },
  ];

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h5" component="h3">
        Educación
      </Typography>
      <Box sx={{ mt: 1 }}>
        {educations.map((education) => (
          <EducationItem
            key={education.id}
            id={education.id}
            title={education.title}
            date={education.date}
            content={education.content}
          />
        ))}
      </Box>
    </Box>
  );
};

export default EducationSection;
