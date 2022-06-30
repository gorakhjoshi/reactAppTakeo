import React from "react";
import { CountContext } from "./CountContext";

export default function CountProvider(props) {
  const value = React.useState(0);

  return (
    <CountContext.Provider value={{ value, greeting: "hello" }} {...props} />
  );
}
