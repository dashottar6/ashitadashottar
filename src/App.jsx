import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Connect from "./components/Connect";
import Navbar from "./components/CustomNavbar";
import Container from "react-bootstrap/Container";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            headerLinks: [
                {title: 'Home', path: '/ashitadashottar'},
                {title: 'About', path: '/about'},
                //yha bhi
                {title: 'Projects', path: '/projects'}
            ]
        }
    }
    render() {
        return (
           <Router>
               <Container fluid={true} className="p-0 appColor ">
                   <Navbar sticky="top"/>
                   {/*yha karna h /ashitadashottar*/}
                   <Route path="/ashitadashottar" exact render={() => <Home/>}/>
                   <Route path="/about" render={() => <About/>}/>
                   <Route path="/projects" render={() => <Projects/>}/>
               </Container>

               <Footer />
           </Router>
        );
    }
}



export default App;
