import React from "react";
import Routes from "./Routes";
import Navbar from "./Containers/Navbar/Navbar";
import { Button } from "@material-ui/core";

const App = () => {
  return (
    <div>
      <Navbar />
      <Button>Let's get Started</Button>
      <Routes />
    </div>
  );
};

export default App;
