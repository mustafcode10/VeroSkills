export default function Layout(props) {
  return (
    <div className="layout">
      <header>My App Header</header>
      <main>{props.children}</main>
      <footer>Footer Info</footer>
    </div>
  );
}
