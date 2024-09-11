import React from "react";
import { useNavigate } from "react-router-dom";

import Logout from "./Logout";

function Home() {
  const navigate = useNavigate();

  const goToCategory = () => {
    navigate("/category");
  };
  return (
    <div>
      <h1>Welcome to Our Store</h1>
      <button onClick={goToCategory}>Category</button> <Logout />
    </div>
  );
}

export default Home;
