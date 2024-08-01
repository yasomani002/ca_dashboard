import PrivateRoute from "../components/common/PrivetRoute";
import DashBoard from "../components/pages/DashBoard";
import Document from "../components/pages/Document";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";

export const routeData = [
    {
      path: '/login',
      name: 'Login',
      element: <Login />
    },
    {
      path: '/',
      name: 'Home',
      element: (<PrivateRoute
        element={<Home />}
      />)
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      element: (<PrivateRoute
        element={<DashBoard />}
      />)
    },
    {
        path: '/document',
        name: 'Document',
        element: (<PrivateRoute
          element={<Document />}
        />)
      }
  ]