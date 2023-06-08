import Navbar from "../../components/navbar/Navbar";
import SidePanel from "../../components/side-panel/SidePanel";
import { dashboardData } from "./_data";
import Card from "../../reusables/card/Card";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="fixed left-0">
        <SidePanel />
      </div>
      <div className="flex justify-around relative ml-48 my-8">
        {dashboardData.map((dd) => (
          <Card
            className="bg-red-300 w-48 h-48 flex flex-col justify-center items-center"
            cardName={dd.name}
            cardNumber={dd.quantity}
          />
        ))}
      </div>
    </>
  );
};

export default Dashboard;
