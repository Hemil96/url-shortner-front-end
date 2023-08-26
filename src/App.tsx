import { Container } from "react-bootstrap";
import NavScrollExample from "./components/Navbar";
import "./App.css";
import Tabs from "./components/Tabs";

const App = () => (
  <Container className="p-3">
    <NavScrollExample></NavScrollExample>
    <div className="container-fluid text-sm-center p-5 bg-light">
      <h1 className="display-2">What would you like to create?</h1>
    </div>
    <Tabs></Tabs>
  </Container>
);

export default App;
