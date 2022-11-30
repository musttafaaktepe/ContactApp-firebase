import Table from "./components/table/Table";
import Form from "./components/form/Form";
import "./App.css";
import { createContext } from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


export const ContactContext = createContext();

function App() {
  const [userContact, setUserContact] = useState({
    name: "-",
    phoneNumber: "-",
    gender: "male",
  });

  return (
    <ContactContext.Provider value={{ userContact, setUserContact }}>
      <Form />
      <Table />
      
    </ContactContext.Provider>
  );
}

export default App;
