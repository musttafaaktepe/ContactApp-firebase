import React, { useEffect, useState } from "react";
import { TableStyled } from "./Table.styled";
import "./table.css";
import { getDatabase, ref, onValue } from "firebase/database";
import app from "../../utils/firebase";
import DeleteIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from '@mui/icons-material/Edit';

const Table = () => {
  const [contactList, setContactList] = useState([]);

  const handleGet = () => {
    const database = getDatabase(app);
    const constactRef = ref(database, "user/");

    onValue(constactRef, (snapshot) => {
      console.log(snapshot.val());
    });
  };

  useEffect(() => {
    const database = getDatabase(app);
    const constactRef = ref(database, "user/");

    onValue(constactRef, (snapshot) => {
      const data = snapshot.val();
      const contactArray = [];

      for (let id in data) {
        contactArray.push({ id, ...data[id] });
        console.log(contactArray);
      }
      setContactList(contactArray);
    });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TableStyled>
        <p>Contacts</p>

        <table>
          <thead>
            <tr>
              <th>user name</th>
              <th>Phone Number</th>
              <th>gender</th>
              <th>delete</th>
              <th>edit</th>
            </tr>
          </thead>
          {contactList.map((item) => {
            const { name, gender, phone } = item;
            return (
              <tbody>
                <tr>
                  <td>{name}</td>
                  <td>{phone}</td>
                  <td>{gender}</td>
                  <td>
                    <DeleteIcon />
                  </td>
                  <td>
                    <EditIcon/>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </TableStyled>
      <button onClick={handleGet}>get contacts</button>
    </div>
  );
};

export default Table;
