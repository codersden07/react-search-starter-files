import { Stack, Typography } from "@mui/material";
import Nav from "./components/Nav";
import Search from "./components/Search";

const BASE_URL = "https://api.postalpincode.in/pincode";

function App() {
  return (
    <Stack direction={"column"} gap={5}>
      <Nav />
      <Stack px={5} direction={"column"} gap={2}>
        <Search />
        <Typography>Searched Pincode:</Typography>
      </Stack>
    </Stack>
  );
}

export default App;
