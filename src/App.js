import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Header from "./components/Header";
import "./style/style.scss";
import "./style/header.scss";
import "./style/home.scss";
import "./style/footer.scss";
import "./style/contact.scss";
import "./style/servises.scss";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Servises from "./components/Servises";




function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/contact"  element={<Contact/>}/>
        <Route path="/services"  element={<Servises/>}/>
      </Routes>
      <Footer/>
    </Router>

   
  );
}

export default App;
