import { useContext } from "react";
import { ToggleContext } from "./ToggleContext";
export function ToggleOff({ children }) {
  const { on } = useContext(ToggleContext);
  return on ? null : children;
}
