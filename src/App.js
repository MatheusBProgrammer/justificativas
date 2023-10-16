import Login from "./pages/login/index.js";
import Navbar from "./layout/Navbar";
import { Outlet } from "react-router-dom";
import { AuthContext } from "./context/AuthContext.js";
import { useContext } from "react";
import Footer from "./layout/Footer.js";
import styles from "./App.module.css";
function App() {
  const { user } = useContext(AuthContext);

  return (
    <div className={styles.app}>
      <Navbar user={user} />
      <Login />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;