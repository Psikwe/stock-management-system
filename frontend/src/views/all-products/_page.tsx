import React from "react";
import Navbar from "../../components/navbar/Navbar";
import SidePanel from "../../components/side-panel/SidePanel";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { columns } from "./_data";

const AllProducts = () => {
  const data: any = useQuery(["products"], () => {
    return axios.get("http://localhost:5000/api/products/all");
  });

  const tableInstance = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  console.log("table: ", tableInstance);

  return (
    <>
      <Navbar />
      <SidePanel />
      <div>
        <table className="relative flex justify-around my-8 ml-64">
          <thead>asdf</thead>
          <tbody>asdfasdf</tbody>
        </table>

        <th></th>
      </div>
    </>
  );
};

export default AllProducts;
