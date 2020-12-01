import React from "react";

const style = {
  width: "15rem",
  margin: "2rem 0rem 0rem 15rem",
};

export const Account = ({ user }) => {
  return (
    <div key={user.username} style={style}>
      <h4>{user.name}</h4>
      <p>{user.email}</p>
      <hr />
    </div>
  );
};

export default Account;
