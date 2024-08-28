import { useState, Suspense, lazy } from "react";
import "./App.css";
import UserProvider from "./components/UserContext";
import User from "./components/User";
import Form from "./components/Form";

import ParentComponent from "./components/ParentComponent";

const ImageLoading = lazy(() => import("./components/ImageLoading"));
import UseFetch from "./components/UseFetch";
// import ImageLoading from "./components/ImageLoading";

function App() {
  return (
    <>
      <UserProvider>
        <User />
        <Form title="sign up" />
        <ParentComponent />
        <UseFetch />
        <Suspense fallback={<h1>Loading</h1>}>
          <ImageLoading />
        </Suspense>
      </UserProvider>
    </>
  );
}

export default App;




