import { MdSpaceDashboard } from "react-icons/md";
import { MdOutlineRemoveCircle } from "react-icons/md";
import { AiFillWallet } from "react-icons/ai";
import { BiBookAdd } from "react-icons/bi";
import { GrUpdate } from "react-icons/gr";
import { FaBorderAll } from "react-icons/fa";

export const IventoryLists = [
  {
    name: "Add Product",
    link: "/add-product",
    id: 3,
    icon: <BiBookAdd />,
  },
  {
    name: "Remove Product",
    link: "/remove-product",
    id: 1,
    icon: <MdOutlineRemoveCircle />,
  },
  {
    name: "Update Product",
    link: "/update-product",
    id: 4,
    icon: <GrUpdate />,
  },
];

export const INavigation = [
  {
    name: "Dashboard",
    link: "/",
    id: 3,
    icon: <MdSpaceDashboard />,
  },
  {
    name: "Categories",
    link: "/catogories",
    id: 3,
    icon: <FaBorderAll />,
  },
  {
    name: "All products",
    link: "/all-products",
    id: 1,
    icon: <AiFillWallet />,
  },
];
