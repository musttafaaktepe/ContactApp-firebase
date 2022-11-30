import React, { useContext, useEffect, useState } from "react";
import { TableStyled } from "./Table.styled";
import "./table.css";
import { getDatabase, ref, onValue, remove } from "firebase/database";
import app from "../../utils/firebase";
import DeleteIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import Edit from "../edit/Edit";
import { ContactContext } from "../../App";


const Table = () => {

  const {userContact, setUserContact}= useContext(ContactContext)
  const [dataId, setDataId] = useState("")


  const [contactList, setContactList] = useState([]);

  const handleDelete = (id) => {
    const database = getDatabase(app);
    const dataRef = ref(database, `user/${id}`);
    remove(dataRef);
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

        <table className="table text-center table-hover">
          <thead>
            <tr>
              <th>username</th>
              <th>Phone Number</th>
              <th>gender</th>
              <th>delete</th>
              <th>edit</th>
            </tr>
          </thead>
          {contactList.map((item) => {
            const { id, name, gender, phoneNumber } = item;

            const handleEdit =()=>{
              setUserContact({...userContact, name:name, gender:gender, phoneNumber: phoneNumber })
              setDataId(id)
            }
            return (
              <tbody>
                <tr>
                  <td>{name}</td>
                  <td>{phoneNumber}</td>
                  <td>{gender}</td>
                  <td>
                    <DeleteIcon
                      style={{ cursor: "pointer" }}
                      onClick={() => handleDelete(id)}
                    />
                  </td>
                  <td>
                    <EditIcon
                      data-bs-target="#editData" onClick={handleEdit}
                      data-bs-toggle="modal"
                      style={{ cursor: "pointer" }}
                    />
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </TableStyled>
      
      <Edit dataId ={dataId} />
    </div>
  );
};

export default Table;
