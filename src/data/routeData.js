import PrivateRoute from "../components/common/PrivetRoute";
import DashBoard from "../components/pages/DashBoard";
import Document from "../components/pages/Document";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DescriptionIcon from '@mui/icons-material/Description';

export const routeData = [
  {
    path: '/login',
    name: 'Login',
    icon: <OtherHousesIcon />,
    element: <Login />
  },
  {
    path: '/',
    name: 'Home',
    icon: <OtherHousesIcon />,
    element: (<PrivateRoute
      element={<Home />}
    />)
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: <DashboardIcon  />,
    element: (<PrivateRoute
      element={<DashBoard />}
    />)
  },
  {
    path: '/document',
    name: 'Document',
    icon: <DescriptionIcon />,
    element: (<PrivateRoute
      element={<Document />}
    />)
  }
]