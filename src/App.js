import { GlobalStyle } from "./styles/GlobalStyle";
import { Header } from './components/Header/Header';
import  Home  from  './pages/Home/Home';
import {LoginWithGoogle} from './components/Auth/Login/Login';
import {Person} from './components/Auth/Login/Login';



export const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <Home />
    <LoginWithGoogle />
    <Person />
  </>
);
