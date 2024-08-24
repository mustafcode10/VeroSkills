import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Layout from "./components/Layout";
import Panel from "./components/Panel";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Layout>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <Panel shouldRender={true}>
          <p> You can see me!</p>
        </Panel>
        <Panel shouldRender={false}>
          <p> You can't see me!</p>
        </Panel>
      </Layout>
    </>
  );
}

export default App;
