import React from "react";
import Button from '@mui/material/Button';

export default function Settings() {
  const goLogin = () => {
    window.location.assign("/login");
  };

  const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  };

  return (
    <div style={style}>
      <h1>You are not logged in!!</h1>
      <Button onClick={goLogin}>Login</Button>
    </div>
  );
}
