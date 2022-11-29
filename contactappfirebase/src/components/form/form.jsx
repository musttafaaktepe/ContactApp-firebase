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
import app from "../../utils/firebase";
import { getDatabase, ref, set, push } from "firebase/database";
import { useContext } from "react";
import { ContactContext } from "../../App";


const Form = () => {
  const { userContact, setUserContact } = useContext(ContactContext);

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
    setUserContact({ ...userContact, gender: event.target.value });
  };

  const addUser = (user) => {
    const database = getDatabase(app);
    const userRef = ref(database, "user/");
    const newUserRef = push(userRef);

    set(newUserRef, {
      name: user.name,
      phone: user.phoneNumber,
      gender: user.gender,
    });
    console.log(database);
  };

  console.log(userContact);

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

          <TextField
            InputLabelProps={{ style: { color: "white" } }}
            id="input-with-sx"
            label="Name"
            variant="standard"
            color="primary"
            inputProps={{ style: { color: "white" } }}
            onChange={(e) =>
              setUserContact({ ...userContact, name: e.target.value })
            }
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <CallIcon sx={{ color: "white", mr: 1, my: 0.5 }} />
          <TextField
            // inputProps={{pattern:"[0-9]"}}
            InputLabelProps={{ style: { color: "white" } }}
            id="input-with-sx"
            label="Phone Number"
            variant="standard"
            sx={{ input: { color: "white" } }}
            onChange={(e) =>
              setUserContact({ ...userContact, phoneNumber: e.target.value })
            }
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
            <TextField
              InputLabelProps={{ style: { color: "white" } }}
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

        <Button onClick={() => addUser(userContact)} variant="contained">
          Add
        </Button>
      </LoginDivStyled>
    </div>
  );
};

export default Form;
