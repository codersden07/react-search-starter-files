import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

// eslint-disable-next-line react/prop-types
const Search = ({ value, onChange }) => {
  return (
    <TextField
      placeholder="Enter a pin code"
      value={value}
      type="number"
      onChange={onChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Search;
