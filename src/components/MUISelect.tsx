import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";

export const MUISelect = () => {
  const [country, setCountry] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value);
  };
  return (
    <Box width="250px">
      <TextField
        label="Select country"
        select
        value={country}
        onChange={handleChange}
        fullWidth
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="Us">US</MenuItem>
        <MenuItem value="AE">UAE</MenuItem>
        <MenuItem value="UK">United Kingdom</MenuItem>
      </TextField>
    </Box>
  );
};
