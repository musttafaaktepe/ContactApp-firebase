
import Table from './components/table/Table';
import Form from './components/form/Form';
import './App.css';
import { createContext } from 'react';
import { useState } from 'react';


export const ContactContext = createContext();


function App() {
   

  const [userContact, setUserContact] = useState({
    name:"",
    phoneNumber:"",
    gender:""
  }) 


  return (
    <ContactContext.Provider value={{userContact, setUserContact}}>

      <Form/>
      <Table/>

      </ContactContext.Provider>
   
  );
}

export default App;

