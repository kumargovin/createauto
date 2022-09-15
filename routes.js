/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import Properties from "views/properties/Properties";
import Leads from "views/leads/Leads";
import Meetings from "views/meetings/Meetings";
import Group from "views/master/group/Group";
import Communication from "views/master/communication/Communication";
import Documents from "views/master/documents/Documents";
import SearchUser from "views/search_user/SearchUser";
import AddUser from "views/user_master/AddUser";
import Rights from "views/user_master/Rights";
import Login from "views/examples/Login";
import Register from "views/examples/Register";

import classes from "theme/theme";
const routeClasses = classes.routes;
var routes = [
//assdsa 
{
    path: "/index",
    name: "Dashboard",
    icon: `ni ni-${routeClasses.dashboard.icon} text-${routeClasses.dashboard.color}`,
    component: Index,
    layout: "/admin",
  }, 
  {
    path: "/asdasdda",
    name: "Dashboard",
    icon: `ni ni-${routeClasses.dashboard.icon} text-${routeClasses.dashboard.color}`,
    component: Index,
    layout: "/admin",
  },
  {
    path: "/properties",
    name: "Properties",
    icon: `ni ni-${routeClasses.properties.icon} text-${routeClasses.properties.color}`,
    component: Properties,
    layout: "/admin",
  },
  {
    path: "/leads",
    name: "Leads",
    icon: `ni ni-${routeClasses.leads.icon} text-${routeClasses.leads.color}`,
    component: Leads,
    layout: "/admin",
  },
  {
    path: "/search_user",
    name: "Search User",
    icon: `ni ni-${routeClasses.search_user.icon} text-${routeClasses.search_user.color}`,
    component: SearchUser,
    layout: "/admin",
  },
  {
    path: "/meetings",
    name: "Meetings",
    icon: `ni ni-${routeClasses.meetings.icon} text-${routeClasses.meetings.color}`,
    component: Meetings,
    layout: "/admin",
  },
  {
    isList: true,
    name: "Master",
    icon: `ni ni-${routeClasses.master.icon} text-${routeClasses.master.color}`,
    path: "/master",
    layout: "/admin",
    routes: [
      {
        path: "/master/group",
        name: "Group",
        icon: `ni ni-${routeClasses.master.routes.group.icon} text-${routeClasses.master.routes.group.color}`,
        component: Group,
        layout: "/admin",
      },
      {
        path: "/master/communication",
        name: "Communication",
        icon: `ni ni-${routeClasses.master.routes.communication.icon} text-${routeClasses.master.routes.communication.color}`,
        component: Communication,
        layout: "/admin",
      },
      {
        path: "/master/documents",
        name: "Documents",
        icon: `ni ni-${routeClasses.master.routes.documents.icon} text-${routeClasses.master.routes.documents.color}`,
        component: Documents,
        layout: "/admin",
      },
    ],
  },
  {
    isList: true,
    name: "User Master",
    icon: `ni ni-${routeClasses.user_master.icon} text-${routeClasses.user_master.color}`,
    path: "/user_master",
    layout: "/admin",
    routes: [
      {
        path: "/user_master/add_user",
        name: "Add User",
        icon: `ni ni-${routeClasses.user_master.routes.add_user.icon} text-${routeClasses.user_master.routes.add_user.color}`,
        component: AddUser,
        layout: "/admin",
      },
      {
        path: "/user_master/rights",
        name: "RIghts",
        icon: `ni ni-${routeClasses.user_master.routes.rights.icon} text-${routeClasses.user_master.routes.rights.color}`,
        component: Rights,
        layout: "/admin",
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    icon: `ni ni-${routeClasses.master.routes.documents.icon} text-${routeClasses.master.routes.documents.color}`,
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: `ni ni-${routeClasses.master.routes.documents.icon} text-${routeClasses.master.routes.documents.color}`,
    component: Register,
    layout: "/auth",
  },
];
export default routes;