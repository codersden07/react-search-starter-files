import { Paper, Alert, Box, Typography } from "@mui/material";

// eslint-disable-next-line react/prop-types
const ShowDetailsCard = ({ data }) => {
  return (
    <Paper
      elevation={5}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "50%",
        p: 2,
        border: `1px solid #1976d2`,
      }}
    >
      <Typography>Pin Code Found! 🤩</Typography>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          width: "100%",
          p: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "100%",
          }}
        >
          <Alert severity="info" icon={false}>
            <strong>Pin code :-</strong> {data?.pincode}
          </Alert>
          <Alert severity="info" icon={false}>
            <strong>County :-</strong> {data?.country}
          </Alert>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "100%",
          }}
        >
          <Alert severity="info" icon={false}>
            <strong>State :-</strong> {data?.state}
          </Alert>
          <Alert severity="info" icon={false}>
            <strong>City :-</strong> {data?.city}
          </Alert>
        </Box>
      </Box>
    </Paper>
  );
};

export default ShowDetailsCard;
