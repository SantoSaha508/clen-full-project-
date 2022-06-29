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

        </Routes>
      </Navbar>

    </div>
  );
}

export default App;
