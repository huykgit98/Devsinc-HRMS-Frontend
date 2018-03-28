import DashboardPage from "views/Dashboard/Dashboard.jsx";
// import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import LandingPage from "views/Landing/Landing.jsx";
import DepartmentsPage from "views/Departments/Departments.jsx";
import NewDepartmentsPage from "views/Departments/NewDepartment.jsx";
import EditDepartmentsPage from "views/Departments/EditDepartment.jsx";
import ManageUsers from "../views/ManageUsers/ManageUsers";
import RolesPage from "views/Roles/Roles.jsx";
import NewRolesPage from "views/Roles/New.jsx";
import ProfilePage from "views/Profile/Profile.jsx";
import EditRolesPage from "views/Roles/Edit.jsx";
import ShowRolesPage from "views/Roles/Role.jsx";

import {
    Dashboard,
    Person,
    ContentPaste,
    LibraryBooks,
    BubbleChart,
    LocationOn,
    Notifications
} from "material-ui-icons";

const appRoutes = [
  {
      path: "/dashboard",
      sidebarName: "Dashboard",
      navbarName: "Material Dashboard",
      icon: Dashboard,
      component: DashboardPage,
  },
  {
      path: "/users/profile",
      sidebarName: "User Profile",
      navbarName: "Profile",
      icon: Person,
      component: ProfilePage,
      exact: true
  },
  {
      path: "/table",
      sidebarName: "Table List",
      navbarName: "Table List",
      icon: ContentPaste,
      component: TableList
  },
  {
      path: "/typography",
      sidebarName: "Typography",
      navbarName: "Typography",
      icon: LibraryBooks,
      component: Typography
  },
  {
      path: "/icons",
      sidebarName: "Icons",
      navbarName: "Icons",
      icon: BubbleChart,
      component: Icons
  },
  {
      path: "/maps",
      sidebarName: "Maps",
      navbarName: "Map",
      icon: LocationOn,
      component: Maps
  },
  {
      path: "/notifications",
      sidebarName: "Notifications",
      navbarName: "Notifications",
      icon: Notifications,
      component: NotificationsPage
  },
  {
      path: "/login",
      sidebarName: "Landing",
      navbarName: "Landing",
      icon: Notifications,
      component: LandingPage,
      unprotected: true
  },
  {
      path: "/departments",
      sidebarName: "Departments",
      navbarName: "Departments",
      icon: Notifications,
      exact: true,
      component: DepartmentsPage
  },
  {
      path: "/departments/new",
      sidebarName: "New Department",
      navbarName: "New Department",
      icon: Notifications,
      component: NewDepartmentsPage,
      notSidebar: true
  },
  {
      path: "/departments/edit/:id",
      sidebarName: "Edit Department",
      navbarName: "Edit Department",
      icon: Notifications,
      component: EditDepartmentsPage,
      notSidebar: true
  },
  {
      path: "/manageusers",
      sidebarName: "Manage Users",
      navbarName: "Manage USers",
      icon: Person,
      component: ManageUsers
  },
  {
    path: "/roles",
    sidebarName: "Roles",
    navbarName: "Roles",
    icon: Notifications,
    component: RolesPage,
    exact: true
  },
  {
    path: "/roles/new",
    sidebarName: "New Role",
    navbarName: "New Role",
    icon: Notifications,
    component: NewRolesPage,
    notSidebar: true
  },
  {
    path: "/roles/edit/:id",
    sidebarName: "Edit Role",
    navbarName: "Edit Role",
    icon: Notifications,
    component: EditRolesPage,
    notSidebar: true
  },
  {
    path: "/roles/:id",
    sidebarName: "Role",
    navbarName: "Role",
    icon: Notifications,
    component: ShowRolesPage,
    notSidebar: true
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];


export default appRoutes;
