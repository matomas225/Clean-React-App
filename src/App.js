//SITE COPY: https://www.rekupe.com/
import "./App.css";
import Burger from "./Components/Burger";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Nav from "./Components/Nav";
import Services from "./Components/Services";
function App() {
  return (
    <div id="outer-container">
      <Burger
        className="burger-disapear"
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
      />
      <main className="main" id="page-wrap">
        <Nav className="nav-disapear" />
        <Header />
        <Main />
        <Content />
        <Services />
        <Form />
        <Footer />
      </main>
    </div>
  );
}

export default App;
