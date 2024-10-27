import logo from "./logo.svg";
import "./App.css";
import IndexPage from "./pages";
import IndNavbar from "./components/ind-navbar";
import IndNavbarLoggedIn from "./components/ind-navbarloggedin";
import Footer from "./components/footer";
import HeroCerti from "./components/hero-certicate";
import CertiVerify from "./pages/certificate-verify";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import UserDashboard from "./pages/userdashboard";
import IndexLoggedIn from "./pages/indexloggedin";
import Sidebar from "./components/sidebar";
import UserManage from "./pages/usermanage";
import UserDocs from "./pages/userdocs";
import UserSetting from "./pages/usersetting";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/ind-navbar" element={<IndNavbar />} />
        <Route path="/usermanage" element={<UserManage />} />
        <Route path="/ind-navbarloggedin" element={<IndNavbarLoggedIn />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/hero-certicate" element={<HeroCerti />} />
        <Route path="/certificate-verify" element={<CertiVerify />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/indexloggedin" element={<IndexLoggedIn />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/userdocs" element={<UserDocs />} />
        <Route path="/usersetting" element={<UserSetting />} />
      </Routes>
    </BrowserRouter>
  );
};

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
