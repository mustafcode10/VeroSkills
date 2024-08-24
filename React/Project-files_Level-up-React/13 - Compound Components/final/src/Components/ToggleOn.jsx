import { useContext } from "react";
import { ToggleContext } from "./ToggleContext";
export function ToggleOn({ children }) {
  const { on } = useContext(ToggleContext);
  return on ? children : null;
}
