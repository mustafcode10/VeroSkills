export default function Panel(props) {
  if (!props.shouldRender) return null;
  return props.children;
}
