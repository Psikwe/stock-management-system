import React from "react";
import { IDashboard } from "../../core/interfaces";
import Navbar from "../../components/navbar/Navbar";

const Dashboard = () => {
  const [state, changeState] = React.useState<String>("asdf");
  return (
    <>
      <Navbar />
      <div className="flex justify-center content-center h-screen">
        <p className="text-red-700">{state}</p>
      </div>
    </>
  );
};

export default Dashboard;
