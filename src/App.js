import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { Outlet } from "react-router-dom";
import Footer from './Footer';
import { RecoilRoot } from 'recoil';
import Login from './Login';

function App() {
  const auth = JSON.parse(localStorage.getItem('auth'))
  return (
    auth && auth.isAuthenticated ?
    <RecoilRoot>
      <Header/>
      <Outlet/>
      <Footer/>
    </RecoilRoot> :  <Login/>
  );
}

export default App;
