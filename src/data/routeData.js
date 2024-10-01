import PrivateRoute from "../components/common/PrivetRoute";
import DashBoard from "../components/pages/DashBoard";
import Document from "../components/pages/Document";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DescriptionIcon from '@mui/icons-material/Description';

export const routeData = [
  // always put privert route as 1st
  {
    element: <PrivateRoute />,
    children: [
      {
        path: '/home',
        name: 'Home',
        icon: <OtherHousesIcon />,
        element: <Home />
      },
      {
        path: '/dashboard',
        name: 'Dashboard',
        icon: <DashboardIcon />,
        element: <DashBoard />
      },
      {
        path: '/document',
        name: 'Document',
        icon: <DescriptionIcon />,
        element: <Document />
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    icon: <OtherHousesIcon />,
    element: <Login />
  },
]