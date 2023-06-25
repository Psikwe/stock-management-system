import { useQuery } from "@tanstack/react-query";
import Navbar from "../../components/navbar/Navbar";
import SidePanel from "../../components/side-panel/SidePanel";
import Card from "../../reusables/card/Card";
import axios from "axios";

const Dashboard = () => {
  const productQuery = useQuery(["products"], () => {
    return axios.get("http://localhost:5000/api/products/all");
  });

  return (
    <>
      <Navbar />
      <SidePanel />
      <div className="relative flex justify-around my-8 ml-64">
        {productQuery.isError && (
          <div>{JSON.stringify(productQuery.error)}</div>
        )}
        {productQuery.isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            <Card
              className="flex flex-col items-center justify-center w-72 h-36 bg-white border-2 border-slate-300"
              cardName="Count of Total Products"
              cardNumberClassName="font-bold text-xl"
              cardNumber={productQuery.data?.data.length + " Products"}
            />
            <Card
              className="flex flex-col items-center justify-center w-72 h-36 bg-white border-2 border-slate-300"
              cardName="Products out of stock"
              cardNumberClassName="font-bold text-xl"
              cardNumber={100 + " Products"}
            />
            <Card
              className="flex flex-col items-center justify-center w-72 h-36 bg-white border-2 border-slate-300"
              cardName="Product overstocked"
              cardNumberClassName="font-bold text-xl"
              cardNumber={5 + " Products"}
            />
          </>
        )}
      </div>
    </>
  );
};

export default Dashboard;
