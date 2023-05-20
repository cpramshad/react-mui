import { useState } from "react";
import { TextField, Stack } from "@mui/material";

export const MUITextField = () => {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField label="Name" size="small" color="secondary" />
        <TextField label="Form" size="medium" color="primary" />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          label="Read Only"
          size="small"
          color="secondary"
          InputProps={{ readOnly: true }}
        />
      </Stack>{" "}
      <Stack spacing={2} direction="row">
        <TextField
          label="Form Input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={!value ? "Please enter a value" : "Do not share password"}
        />
      </Stack>
    </Stack>
  );
};
