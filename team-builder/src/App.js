import React, { useState } from "react";
import './App.css';
import Form from './components/Form';
import MemberList from './components/MemberList';
import data from './components/data';
function App() {

  const [members, setMembers] = useState(data);
  const addNewMember = member => {
    setMembers([...members, member]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>The Dream Team</h1>
        <Form className = "formStyle" addNewMember={addNewMember} />
        <div className="teamContainer">
          <MemberList memberList={members} />
        </div>
      </header>
    </div>
  );
}

export default App;
