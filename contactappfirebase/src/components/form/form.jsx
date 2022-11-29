import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { FormStyledDiv } from "./Form.styled";
import { LoginDivStyled } from "./Form.styled";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { useState } from "react";
import CallIcon from "@mui/icons-material/Call";

const Form = () => {
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
    <FormStyledDiv>
      <LoginDivStyled>
        <div>
          <p style={{ textAlign: "center" }}>ADD CONTACT</p>
        </div>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField id="input-with-sx" label="Name" variant="standard" />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <CallIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            id="input-with-sx"
            label="Phone Number"
            variant="standard"
          />
        </Box>

        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { width: "25ch" },
            marginTop: "0.5rem",
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              id="standard-select-currency"
              select
              label="Gender"
              value={gender}
              onChange={handleChange}
              variant="standard"
            >
              {genderSelect.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </Box>

        <Button variant="contained">Add</Button>
      </LoginDivStyled>
    </FormStyledDiv>
  );
};

export default Form;
