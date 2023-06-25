import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Dashboard from "./views/dashboard/_page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./views/signup/_page";
import Login from "./views/login/_page";
import { getFrontendConfig } from "./functions/functions";
import { setBaseApi } from "./config";
import { getUserSession } from "./core/utility";
import AddProduct from "./views/add-product/_page";
import AllProducts from "./views/all-products/_page";

function App() {
  const queryClient = new QueryClient();
  const [userSession] = React.useState(getUserSession());
  React.useEffect(() => {
    getFrontendConfig().then((res) => {
      document.title = res.appName;
      setBaseApi(res.apiBaseUrl);
    });
  }, []);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            {!userSession ? (
              <>
                <Route element={<Login />} path="*" />
                <Route element={<Signup />} path="/signup" />
              </>
            ) : (
              <>
                <Route element={<Dashboard />} path="/" />
                <Route element={<AddProduct />} path="/add-product" />
                <Route element={<AllProducts />} path="/all-products" />
              </>
            )}
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
