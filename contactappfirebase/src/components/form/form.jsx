import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { LoginDivStyled } from "./Form.styled";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { useState } from "react";
import CallIcon from "@mui/icons-material/Call";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { FormControl } from "@mui/material";
import { styled } from "@mui/material/styles";

const Form = () => {
  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fielset": {
        borderColor: "white",
      },
    },
  });
  const genderSelect = [
    {
      value: "male",
      label: "Male",
    },
    {
      value: "female",
      label: "Female",
    },
    {
      value: "other",
      label: "Other",
    },
  ];
  const [gender, setGender] = useState("male");
  const handleChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <LoginDivStyled>
        <div>
          <p
            style={{ textAlign: "center", fontSize: "1.8rem", color: "white" }}
          >
            ADD CONTACT
          </p>
        </div>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <AccountCircle sx={{ color: "white", mr: 1, my: 0.5 }} />

          <CssTextField
            InputLabelProps={{ style: { color: "white" } }}
            id="input-with-sx"
            label="Name"
            variant="standard"
            color="primary"
            inputProps={{ style: { color: "white" } }}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <CallIcon sx={{ color: "white", mr: 1, my: 0.5 }} />
          <CssTextField
            InputLabelProps={{ style: { color: "white" } }}
            id="input-with-sx"
            label="Phone Number"
            variant="standard"
            sx={{ input: { color: "white" } }}
          />
        </Box>

        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { width: "25ch" },
            marginTop: "0.5rem",
            color: "white",
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <CssTextField
              InputLabelProps={{ style: { color: "white" } }}
              id="standard-select-currency"
              select
              label="Gender"
              value={gender}
              onChange={handleChange}
              variant="standard"
            >
              {genderSelect.map((option) => (
                <MenuItem  key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </CssTextField>
          </div>
        </Box>

        <Button variant="contained">Add</Button>
      </LoginDivStyled>
    </div>
  );
};

export default Form;
