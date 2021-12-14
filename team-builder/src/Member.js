import React from "react";

export default function Member(props) {
  const {details} = props

  if (!details) {
    return <h2>Fetching Members...</h2>
  }

  return (
    <div>
      <h2>{details.username}</h2>
      <p>Email: {details.email}</p>
      <p>Role: {details.role}</p>
    </div>
  )
}