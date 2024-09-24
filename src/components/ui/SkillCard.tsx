import { Box, CircularProgress, Paper, Typography } from "@mui/material";
import React from "react";

interface SkillCardProps {
  title: string;
  value: number;
}

interface CircularProgressWithLabelProps {
  value: number;
}

const CircularProgressWithLabel: React.FC<CircularProgressWithLabelProps> = ({
  value,
}) => {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" value={value} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          sx={{ color: "text.secondary" }}
        >{`${Math.round(value)}%`}</Typography>
      </Box>
    </Box>
  );
};

const SkillCard: React.FC<SkillCardProps> = ({ title, value }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: 1,
        "&:hover": {
          backgroundColor: "primary.light",
          color: "primary.main",
        },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="subtitle1">{title}</Typography>
        <Box sx={{ flexGrow: 1 }} />
        <CircularProgressWithLabel value={value} />
      </Box>
    </Paper>
  );
};

export default SkillCard;
