import React from "react";
import { TsReactTest } from "screens/project-list/try-use-array";
import "./App.css";
import { ProjectListScreen } from "./screens/project-list/index";
import { LoginScreen } from "./screens/login/index";

function App() {
  return (
    <div className="App">
      <LoginScreen></LoginScreen>
      {/* <TsReactTest></TsReactTest> */}
      {/* <ProjectListScreen></ProjectListScreen> */}
    </div>
  );
}

export default App;
