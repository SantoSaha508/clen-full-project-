import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import {publicRoute} from './routes/publicRoute'



function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          {/* <Route path="/" element={<Home></Home>}></Route>
          <Route path="/services" element={<Services></Services>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route> */}
          {
            publicRoute.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component></Component>}
              />))
          }
        </Routes>
      </Navbar>


    </div>
  );
}

export default App;
