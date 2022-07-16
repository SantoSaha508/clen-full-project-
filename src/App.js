import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
// import {publicRoute} from './routes/publicRoute';
import { publicRoute } from './routes/publicRoute';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';
// import Services from './pages/Services';
// import About from './pages/About';
import PrivateRoute from './authentication/PrivateRoute';
import { PrivateRoutes } from './routes/PrivateRoutes';
import AdminRoute from './authentication/AdminRoute';
import Dashboard from './pages/Dashboard/Dashboard';
import AddService from './pages/Dashboard/AddService';
import AddAdmin from './pages/Dashboard/AddAdmin';



function App() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div>
      <Navbar>
        <Routes>
          {
            publicRoute.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component></Component>}
              />))
          }

          <Route element={<PrivateRoute />}>
            {
              PrivateRoutes.map(({ path, Component }, index) => (
                <Route key={index} path={path} element={<Component></Component>}
                />))
            }
          </Route>

          <Route element={<AdminRoute></AdminRoute>}>
            <Route path="/dashboard" element={<Dashboard></Dashboard>}>

              <Route path='add-service' element={<AddService></AddService>}></Route>

              <Route path='add-admin' element={<AddAdmin></AddAdmin>}></Route>

            </Route>
          </Route>

        </Routes>
      </Navbar>

    </div>
  );
}

export default App;
