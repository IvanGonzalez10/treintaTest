import { GlobalStyle } from "./styles/GlobalStyle";
import { Header } from './components/Header/Header';
import  Home  from  './pages/Home/Home';
import Login from './components/Auth/Login/Login';


export const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <Home />
    <Login />
  </>
);
