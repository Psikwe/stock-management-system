import React from "react";
import "./App.css";
import Dashboard from "./views/dashboard/_page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./views/signup/Signup";
import Login from "./views/login/Login";
import { getFrontendConfig } from "./functions/functions";
import { setBaseApi } from "./config";

function App() {
  React.useEffect(() => {
    getFrontendConfig().then((res) => {
      document.title = res.appName;
      setBaseApi(res.apiBaseUrl);
      console.log("base: ", setBaseApi(res.apiBaseUrl));
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Dashboard />} path="/" />
          <Route element={<Signup />} path="/signup" />
          <Route element={<Login />} path="/login" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
