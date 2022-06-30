import React from "react";
import { CountContext } from "../context/CountContext";

export function useCount() {
  const context = React.useContext(CountContext);

  if (!context) {
    throw new Error("no context");
  }

  return context;
}
