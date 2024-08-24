import { useContext } from "react";
import { ToggleContext } from "./ToggleContext";
export const ToggleButton = () => {
  const { on, toggle } = useContext(ToggleContext);
  return <button onClick={toggle}>{on ? "Close" : "Sign Up"}</button>;
};
