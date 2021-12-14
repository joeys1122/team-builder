import './App.css';
import React, {useState} from 'react';
import Form from './Form';
import Member from './Member';

const initialFormValues = {
  username: '',
  email: '',
  role: '',
}

const initialMembers = [
  {
    username: 'joey',
    email: 'joey@joey.com',
    role: 'Frontend Engineer'
  },
  {
    username: 'steven',
    email: 'steven@steven.com',
    role: 'Backend Engineer'
  },
  {
    username: 'anna',
    email: 'anna@anna.com',
    role: 'Designer'
  },
]

function App() {
  const [teamMembers, setTeamMembers] = useState(initialMembers);
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue});
  }

  const submitForm = () => {
    const newMember = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }

    if (!newMember.username || !newMember.email || !newMember.role) {
      console.error('All fields required')
    } else {
      setTeamMembers([...teamMembers, newMember])
    }
  }
  
  return (
    <div className="App">
      <h1>Team Members Form</h1>
      <Form values={teamMembers} update={updateForm} submit={submitForm} />

      {
        teamMembers.map((member, index) => {
          return (
            <Member key={index} details={member} />
          )
        })
      }
    </div>
  );
}

export default App;
