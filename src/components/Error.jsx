import { Paper, Typography } from "@mui/material";

// eslint-disable-next-line react/prop-types
const Error = ({ error }) => {
  return (
    <Paper
      elevation={5}
      sx={{
        display: "flex",
        width: "50%",
        p: 4,
        border: `1px solid #ef5350`,
        justifyContent: "center",
      }}
    >
      <Typography sx={{ fontSize: "2rem", fontWeight: "500" }}>
        {error} 🥺
      </Typography>
    </Paper>
  );
};

export default Error;
