/* eslint-disable semi */
/* eslint-disable comma-dangle */
import { Mail, Home } from "react-feather";

export default [
  {
    id: "property",
    title: "Find a Property",
    children: [
      {
        id: "buyProperty",
        title: "Buy",
        // icon: <Mail size={20} />,
        navLink: "/second-page",    
      },
      {
        id: "rentProperty",
        title: "Rent",
        // icon: <Mail size={20} />,
        navLink: "/second-page",    
      },
    ]
  },
  {
    id: "Advertise",
    title: "Advertise With Us",
    children: [
      {
        id: "buyAdvertise",
        title: "Buy",
        // icon: <Mail size={20} />,
        navLink: "/second-page",    
      },
      {
        id: "rentAdvertise",
        title: "Rent",
        // icon: <Mail size={20} />,
        navLink: "/second-page",    
      },
    ]
  },
  {
    id: "Lead",
    title: "Lead Share",
    children: [
      {
        id: "buyLead",
        title: "Buy",
        // icon: <Mail size={20} />,
        navLink: "/second-page",    
      },
      {
        id: "rentLead",
        title: "Rent",
        // icon: <Mail size={20} />,
        navLink: "/second-page",    
      },
    ]
  },
  {
    id: "Register/Login",
    title: "Register/Login",
    // icon: <Home size={20} />,
    navLink: "/home"
  },
];
