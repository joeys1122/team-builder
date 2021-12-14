import React from "react";

export default function Form(props) {
  const {values, update, submit} = props;

  const onChange = e => {
    const name = e.target.name;
    const {value} = e.target
    update(name, value);
  }

  const onSubmit = e => {
    e.preventDefault();
    submit();
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input 
          name='username'
          type='text'
          placeholder='Username here'
          maxLength='30'
          value={values.username}
          onChange={onChange}
        />

        <input 
          name='email'
          type='email'
          placeholder='Email here'
          value={values.email}
          onChange={onChange}
        />

        <select name='role' value={values.role} onChange={onChange}>
          <option>--- Select a Role ---</option>
          <option>Backend Engineer</option>
          <option>Frontend Engineer</option>
          <option>Designer</option>
        </select>

        <button>Submit</button>
      </form>
    </div>
  )
}