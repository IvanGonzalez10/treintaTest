import { GlobalStyle } from "./styles/GlobalStyle";
import { Header } from "./components/Header/Header";
import { Auth } from './components/Auth/Auth';
import { Home } from "./pages/Home";
import { Information } from './/pages/Information';
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from "./components/Footer/Footer";
import { Router } from "@reach/router";
import { NotFound } from "./pages/NotFound";

export const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <Auth />
    <Router>
      <NotFound default />
      <Home path="/"/>
      <Information path="/information" />
    </Router>
    <NavBar />
    <Footer />
  </>
);
