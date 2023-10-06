import F1 from "./components/F1";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {HashRouter, Routes, Route, Form} from "react-router-dom";
import { Home, About } from './components/F2';
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Employeedetails from "./components/Employeedetails";
function App() {
  return (
    <div>
      {/* {<F1></F1>} */}
      {/* <HashRouter>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </HashRouter> */}
      <Employeedetails></Employeedetails>
      {/*
      To install: npm install react-router-dom

      http://localhost:3000/ -> Home
      http://localhost:3000/about -> About
      http://localhost:3000/contact -> Contact
      */}
    </div>
  );
}

export default App;
